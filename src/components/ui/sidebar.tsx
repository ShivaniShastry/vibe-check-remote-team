
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarContextProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextProps>({
  collapsed: false,
  setCollapsed: () => {},
})

export function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  defaultCollapsed?: boolean
}

export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  const value = React.useMemo(
    () => ({ collapsed, setCollapsed }),
    [collapsed, setCollapsed]
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const { collapsed } = useSidebar()

  return (
    <aside
      data-collapsed={collapsed}
      className={cn(
        "group/sidebar relative flex h-screen flex-col overflow-hidden border-r bg-background data-[collapsed=true]:w-14 lg:w-64",
        className
      )}
      {...props}
    />
  )
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        "flex h-14 items-center border-b px-4",
        className
      )}
      {...props}
    />
  )
}

interface SidebarInsetProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarInset({ className, children, ...props }: SidebarInsetProps) {
  return (
    <div
      className={cn(
        "flex-1 overflow-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("h-9 w-9", className)}
      onClick={() => setCollapsed(!collapsed)}
      {...props}
    >
      {collapsed ? (
        <ChevronRight className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      className={cn("flex-1 overflow-auto", className)}
      {...props}
    />
  )
}

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      className={cn("mt-auto border-t", className)}
      {...props}
    />
  )
}

interface SidebarGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return <div className={cn("", className)} {...props} />
}

interface SidebarGroupLabelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function SidebarGroupLabel({
  className,
  children,
  ...props
}: SidebarGroupLabelProps) {
  const { collapsed } = useSidebar()

  if (collapsed) {
    return null
  }

  return (
    <div
      className={cn(
        "mb-2 px-4 text-xs font-semibold text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface SidebarGroupContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function SidebarGroupContent({
  className,
  ...props
}: SidebarGroupContentProps) {
  return <div className={cn("space-y-1", className)} {...props} />
}

interface SidebarMenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return <div className={cn("px-2", className)} {...props} />
}

interface SidebarMenuItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  disabled?: boolean
}

export function SidebarMenuItem({
  className,
  disabled,
  ...props
}: SidebarMenuItemProps) {
  return (
    <div
      className={cn("mb-1", disabled && "pointer-events-none opacity-50", className)}
      {...props}
    />
  )
}

const buttonWithIconVariants = cva(
  "group relative flex h-9 w-full items-center justify-start gap-2 rounded-md bg-transparent px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "group relative flex h-9 w-full items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent/50 disabled:pointer-events-none disabled:opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarMenuButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "prefix" | "suffix"
  >,
    VariantProps<typeof buttonWithIconVariants> {
  icon?: React.ReactNode
  suffix?: React.ReactNode
  tooltip?: string
  asChild?: boolean
}

export function SidebarMenuButton({
  className,
  children,
  variant,
  disabled,
  tooltip,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) {
  const { collapsed } = useSidebar()
  const Comp = asChild ? React.Fragment : "button"
  const buttonProps = asChild ? {} : props

  if (!tooltip || !collapsed) {
    return (
      <Comp
        className={cn(buttonWithIconVariants({ variant }), className)}
        disabled={disabled}
        {...buttonProps}
      >
        {children}
      </Comp>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Comp
            className={cn(
              buttonWithIconVariants({ variant }),
              "justify-center",
              className
            )}
            disabled={disabled}
            {...buttonProps}
          >
            {children}
          </Comp>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="flex items-center gap-4"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

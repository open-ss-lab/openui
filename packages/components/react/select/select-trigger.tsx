import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn, selectTrigger } from '@openui-org/theme'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Trigger> {}

const SelectTrigger = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      selectTrigger(),
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = 'SelectTrigger'

export default SelectTrigger
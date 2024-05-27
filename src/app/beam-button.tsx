import { BorderBeam } from "@/components/border-beam";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const BeamButton = ({className, children,...props}:ComponentProps<'button'>) =>{
  return <Button className={twMerge('relative transition-colors', className)} {...props}>
    {children}
    <BorderBeam borderWidth={2} duration={12} delay={9} colorFrom='#FFE604' colorTo='#FF00A8'/>
  </Button>
}
import { BorderBeam } from "@/components/border-beam";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface BeamButtonProps extends ComponentProps<'button'>{
  beam?: boolean
}


export const BeamButton = ({beam = true,className, children,...props}:BeamButtonProps) =>{
  return <Button className={twMerge('relative font-light hover:scale-95 transition-all', className)} {...props}>
    {children}
    {beam && <BorderBeam borderWidth={2} duration={12} delay={9} colorFrom='#FFE604' colorTo='#FF00A8'/>}
  </Button>
}
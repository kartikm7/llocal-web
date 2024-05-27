import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { HiOutlineExternalLink } from "react-icons/hi";

interface NavbarItemsProps extends ComponentProps<'div'>{
  isIcon?: boolean
  isLink?: boolean
}

export const NavbarItem = ({isIcon=false,isLink=false,className,children, ...props}:NavbarItemsProps) => {
  return <div className={twMerge(`${isIcon ? 'opacity-100' : 'opacity-75 hover:scale-95'} flex justify-center items-center gap-2 cursor-pointer hover:opacity-100 transition-all`, className)} {...props}>
    {children}
    {isLink && < HiOutlineExternalLink />}
  </div>
}

export const NavbarLayout = ({className,children ,...props }:ComponentProps<'div'>)=>{
  return <div className={twMerge('fixed z-50 w-full top-0 p-5 backdrop-blur-lg flex justify-between', className)} {...props}>
    {children}
  </div>
}
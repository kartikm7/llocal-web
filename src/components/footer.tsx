import { ComponentProps } from "react";

export  const FooterLayout = ({className, children,...props}:ComponentProps<'footer'>) => {
  return <footer>
    {children}
  </footer>
}
import { ComponentProps } from "react";
import { Separator } from "./ui/separator";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

export const FooterLayout = ({
  className,
  children,
  ...props
}: ComponentProps<"footer">) => {
  return (
    <footer className={twMerge("w-screen", className)} {...props}>
      {children}
    </footer>
  );
};

export const Footer = () => {
  return (
    <FooterLayout className="flex flex-col w-full px-10">
      <div className="flex border-t p-5 justify-between items-center">
        <div className="text-xs">
          <h1 className="font-semibold md:text-xl opacity-75 hover:opacity-100 transition-all cursor-pointer">llocal.in</h1>
          <h1>brought you by <Link href={'https://twitter.com/codewithkt'} target="_parent"><span className="font-semibold underline">Kartikeya Mishra.</span></Link></h1>
        </div>
        <div className="flex gap-2 text-2xl">
          <Link href={"https://github.com/kartikm7/llocal"}><FaGithub className="opacity-50 hover:opacity-100 hover:scale-95 transition-all" /></Link>
          <Link href={`${process.env.NEXT_PUBLIC_DISCORD}`} target="_blank"><FaDiscord className="opacity-50 hover:opacity-100 hover:scale-95 transition-all" /></Link>
        </div>
      </div>
    </FooterLayout>
  );
};

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { DownloadDropdown } from "./download-dropdown";
import { ModeToggle } from "./dark-mode-toggle";
import { Button } from "./ui/button";
import Logo from "../../public/llocal.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarItemsProps extends ComponentProps<"div"> {
  isIcon?: boolean;
  isLink?: boolean;
}

export const NavbarItem = ({
  isIcon = false,
  isLink = false,
  className,
  children,
  ...props
}: NavbarItemsProps) => {
  return (
    <div
      className={twMerge(
        `${isIcon ? "opacity-100" : "opacity-75 hover:scale-95"
        } flex justify-center items-center gap-2 cursor-pointer hover:opacity-100 transition-all`,
        className
      )}
      {...props}
    >
      {children}
      {isLink && <HiOutlineExternalLink />}
    </div>
  );
};

export const NavbarLayout = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "fixed z-50 w-full top-0 p-5 backdrop-blur-lg flex justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Navbar = () => {
  return (
    <NavbarLayout className="font-poppins">
      <Link href={"/"}>
        <NavbarItem isIcon={true} className="flex gap-3 justify-center">
          <Image
            src={Logo}
            alt="LLocal-Logo"
            className="size-10 dark:invert cursor-pointer"
          />
          <h1 className="text-xl font-light">llocal</h1>
        </NavbarItem>
      </Link>
      <div className="hidden md:flex justify-center items-center  gap-5">
        <Link href={"/releaselog"}>
          <NavbarItem>
            <h1 className="font-light">Release log</h1>
          </NavbarItem>
        </Link>
        <Link href={"/guide"}>
          <NavbarItem>
            <h1 className="font-light">Guide</h1>
          </NavbarItem>
        </Link>
        <Link href={"/philosophy"}>
          <NavbarItem>
            <h1 className="font-light">Philosophy</h1>
          </NavbarItem>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_DISCORD}`} target="_blank">
          <NavbarItem isLink>
            <h1 className="font-light">Request a feature</h1>
          </NavbarItem>
        </Link>
        <Link href={"https://github.com/kartikm7/llocal"} target="_blank">
          <NavbarItem isLink>
            <h1 className="font-light">GitHub</h1>
          </NavbarItem>
        </Link>
        <NavbarItem className="">
          <DownloadDropdown>
            <div className="font-light border border-opacity-20 rounded-sm p-2 border-foreground">
              Download
            </div>
          </DownloadDropdown>
        </NavbarItem>
        <NavbarItem className="opacity-100">
          <ModeToggle />
        </NavbarItem>
      </div>
      <div className="md:hidden flex gap-2 justify-center">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GiHamburgerMenu className="text-2xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={"https://github.com/kartikm7/llocal"} target="_blank">
              <DropdownMenuItem>
                GitHub <HiOutlineExternalLink className="ml-2" />
              </DropdownMenuItem>
            </Link>
            <Link href="/philosophy">
              <DropdownMenuItem>Philosophy</DropdownMenuItem>
            </Link>
            <Link href="/guide">
              <DropdownMenuItem>Guide</DropdownMenuItem>
            </Link>
            <Link href="/releaselog">
              <DropdownMenuItem>Release log</DropdownMenuItem>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_DISCORD}`} target="_blank">
              <DropdownMenuItem>
                Request a Feature <HiOutlineExternalLink className="ml-2" />
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </NavbarLayout>
  );
};

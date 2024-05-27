"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { FaApple, FaLinux, FaMicrosoft } from "react-icons/fa";

export const DownloadDropdown = ({
  children,
  ...props
}: ComponentProps<"div">) => {
  const router = useRouter();
  function handleClick() {
    window.location.href =
      "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.1/LLocal-1.0.0-beta.1-setup.exe";
    router.push("/guide");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Versions:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleClick} className="flex gap-2">
          <FaMicrosoft /> Windows
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" disabled>
          <FaApple /> Mac
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" disabled>
          <FaLinux /> Linux
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

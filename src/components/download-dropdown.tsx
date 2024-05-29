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
import { SiIntel } from "react-icons/si";

export const DownloadDropdown = ({
  children,
  ...props
}: ComponentProps<"div">) => {
  const links = [
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.4/LLocal-1.0.0-beta.4-setup.exe",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.4/LLocal-1.0.0-beta.4-arm64.dmg",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.4/LLocal-1.0.0-beta.4-x64.dmg"
  ];
  const router = useRouter();
  function handleClick(platform: string) {
    switch (platform) {
      case "win":
        window.location.href = links[0]
        router.push("/guide");
        break;
      case "mac:arm":
        window.location.href = links[1]
        router.push("/guide");
        break;
      case "mac:intel":
        window.location.href = links[2]
        router.push("/guide");
        break;
      default:
        break;
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Versions:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=> handleClick('win')} className="flex gap-2">
          <FaMicrosoft /> Windows
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=> handleClick('mac:arm')}  className="flex gap-2">
          <FaApple /> Mac (M Series)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=> handleClick('mac:intel')} className="flex gap-2">
          <SiIntel /> Mac (Intel)
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" disabled>
          <FaLinux /> Linux
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

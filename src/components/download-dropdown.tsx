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
import { TbWorld } from "react-icons/tb";

export const DownloadDropdown = ({
  children,
  ...props
}: ComponentProps<"div">) => {
  const links = [
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal-1.0.0-beta.7-setup.exe",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal-1.0.0-beta.7-arm64.dmg",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal-1.0.0-beta.7-x64.dmg",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal-1.0.0-beta.7-mac.zip",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal_1.0.0-beta.7_amd64.deb",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal-1.0.0-beta.7.AppImage",
    "https://github.com/kartikm7/llocal/releases/download/v1.0.0-beta.7/LLocal_1.0.0-beta.7_amd64.snap",
  ];
  const router = useRouter();
  function handleClick(platform: string) {
    switch (platform) {
      case "win":
        window.location.href = links[0];
        router.push("/guide");
        break;
      case "mac:arm":
        window.location.href = links[1];
        router.push("/guide");
        break;
      case "mac:intel":
        window.location.href = links[2];
        router.push("/guide");
        break;
      case "mac:uni":
        window.location.href = links[3];
        router.push("/guide");
        break;
      case "linux:deb":
        window.location.href = links[4];
        router.push("/guide");
        break;
      case "linux:app":
        window.location.href = links[5];
        router.push("/guide");
        break;
      case "linux:snap":
        window.location.href = links[6];
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
        <DropdownMenuItem
          onClick={() => handleClick("win")}
          className="flex gap-2"
        >
          <FaMicrosoft /> Windows
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleClick("mac:arm")}
          className="flex gap-2"
        >
          <FaApple /> Mac (M Series)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleClick("mac:intel")}
          className="flex gap-2"
        >
          <SiIntel /> Mac (Intel)
        </DropdownMenuItem>
        {/* <DropdownMenuItem
          onClick={() => handleClick("mac:uni")}
          className="flex gap-2"
        >
          <TbWorld /> Mac (Universal supports both arm & intel)
        </DropdownMenuItem> */}
        <DropdownMenuItem
          onClick={() => handleClick("linux:deb")}
          className="flex gap-2"
        >
          <FaLinux /> Linux (Debian)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleClick("linux:app")}
          className="flex gap-2"
        >
          <FaLinux /> Linux (App Image)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleClick("linux:snap")}
          className="flex gap-2"
        >
          <FaLinux /> Linux (Snap)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

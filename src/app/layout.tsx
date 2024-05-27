import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "../../public/llocal.svg";
import { NavbarItem, NavbarLayout } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FooterLayout } from "@/components/footer";
import { ModeToggle } from "@/components/dark-mode-toggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LLocal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarLayout>
            <NavbarItem isIcon={true}>
              <Image
                src={Logo}
                alt="LLocal-Logo"
                className="size-10 dark:invert cursor-pointer"
              />
            </NavbarItem>
            <div className="flex justify-center items-center  gap-5">
              <NavbarItem isLink>
                <h1 className="font-light">GitHub</h1>
              </NavbarItem>
              <NavbarItem className="opacity-100">
                <Button className="font-light" variant={"outline"}>
                  Download
                </Button>
              </NavbarItem>
              <NavbarItem className="opacity-100">
                <ModeToggle />
              </NavbarItem>
            </div>
          </NavbarLayout>
          {children}
          <FooterLayout>
          </FooterLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

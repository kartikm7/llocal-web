import type { Metadata } from "next";
import { Libre_Baskerville, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer, FooterLayout } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "LLocal",
  description: "An application to utilize locally hosted LLM's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${libre.variable} ${poppins.variable}`}>
      <body className={`font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

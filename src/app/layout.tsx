import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";

const museoModerno = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoga with Zahra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          museoModerno.className,
          "bg-white text-black antialiased"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

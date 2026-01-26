import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Load Manrope font with variable support
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",  // Creates a CSS variable for easy use
  display: "swap",  // Prevents flash of unstyled text
});

export const metadata: Metadata = {
  title: "Rigged",
  description: "Modern overland community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${manrope.variable}
          font-sans
          bg-background
          text-foreground
          min-h-screen
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
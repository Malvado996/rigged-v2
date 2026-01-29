import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { supabaseServer } from "../lib/supabase/server";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rigged",
  description: "Modern overland community",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    const supabase = supabaseServer();
    const { data: { user } } = await supabase.auth.getUser();
    console.log("Test user from server client:", user ? user.email : "No user");
  } catch (err) {
    console.error("Supabase client test error:", err);
  }

  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-sans bg-background text-foreground min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
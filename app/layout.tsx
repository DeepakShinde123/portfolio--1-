import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SparklesCore } from "../components/sparkles-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak Shinde - Portfolio",
  description: "Full Stack Developer specializing in MERN stack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <SparklesCore
              particleCount={100}
              particleSize={1}
              particleSpeed={0.3}
              particleColor="rgba(255,255,255,0.3)"
            />
            <SiteHeader />
            <main className="flex-1 relative z-10">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

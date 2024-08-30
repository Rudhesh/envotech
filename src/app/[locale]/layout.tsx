import { Inter as FontSans } from "next/font/google";
import { getServerSession } from "next-auth";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SessionProvider from "@/utils/SessionProvider";
import { ThemeProvider } from "@/components/Theme-provider";
import Navigation from "@/components/ui/Navigation";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: ReactNode;
};

export interface RootLayoutProps {
  children: React.ReactNode;
  
}
export default async function LocaleLayout({ children }: Props) {
  // Validate that the incoming `locale` parameter is valid

  // Enable static rendering

  const session = await getServerSession();

  return (
    <html>
      <SessionProvider session={session}>
        <body
          className={cn(
            "min-h-screen bg-white dark:bg-slate-900 font-sans antialiased",
            fontSans.variable
          )}
        >
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                         <Navigation />

          {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}

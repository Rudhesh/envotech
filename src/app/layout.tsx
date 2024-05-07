import { Inter as FontSans } from "next/font/google";
import { getServerSession } from "next-auth";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SessionProvider from "@/utils/SessionProvider";

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
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtag";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Track the current path
  const pathname = usePathname();

  // Fire GA page_view on every route change
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      pageview(pathname);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D7CH7KET6G"
          strategy="afterInteractive"
        />

        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D7CH7KET6G');
          `}
        </Script>
      </head>

      <body className="font-sans bg-black md:p-6">
        <div className="grid lg:grid-cols-[95%_5%]">
          <main className="relative">
            <div className="fixed top-1 lg:top-4 lg:right-10 right-2 z-10">
              <Theme />
            </div>

            {children}
          </main>

          <header className="lg:fixed lg:right-10">
            <Navbar />
          </header>
        </div>
      </body>
    </html>
  );
}

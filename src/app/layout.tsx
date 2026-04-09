import Analytics from "@/components/Analytics";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
        <Analytics /> {/* ✅ moved here */}

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
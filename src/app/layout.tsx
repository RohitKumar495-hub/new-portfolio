import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>

) 
{

  return (
    <html lang="en">
      <body
        className={'font-sans bg-black md:p-6'}
      >
        <div className="grid lg:grid-cols-[95%_5%]">
          <main className="relative">
            <div className="fixed top-1 lg:top-4 lg:right-10 right-2 z-10">
              <Theme />
            </div>
            <div>
              {children}
            </div>
          </main>
          <header className="lg:fixed lg:right-10">
            <Navbar />
          </header>
        </div>
      </body>
    </html>
  );
}

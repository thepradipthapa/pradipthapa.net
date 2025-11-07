import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { headingFont, bodyFont } from "../fonts";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
      <body
        className="bg-[--color-bg-light] text-[--color-text-light] dark:bg-[--color-bg-dark] dark:text-[--color-text-dark] min-h-screen"
      >
        <div className="mx-auto max-w-3xl px-4">
          <Navbar />
          <main className="py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

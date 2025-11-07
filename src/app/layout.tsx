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
        className="bg-[--color-bg-dark] text-[--color-text-light] min-h-screen"
      >
        <div className="max-w-2xl mx-auto mt-1">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

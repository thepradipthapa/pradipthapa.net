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
        className=" min-h-screen bg-background-light dark:bg-background-dark"
      >
        <div className="max-w-3xl mx-auto px-2">
          <Navbar />
          <main className="my-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

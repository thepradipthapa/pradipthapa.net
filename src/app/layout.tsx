import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { headingFont, bodyFont } from "../fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pradipthapa.net"),
  title: {
    default: "Pradip Thapa",
    template: "%s | Pradip Thapa",
  },
  description: "Pradip Thapa – Backend Developer specializing in Python, Django, FastAPI, and Databases. Explore my portfolio, projects, and experience in building scalable web applications and RESTful APIs.",
 icons: {
    icon: [
      { url: "images/favicon.ico", type: "image/x-icon" },
      { url: "images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "images/android-favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "images/android-favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "images/apple-touch-icon.png",
  },
  keywords: [
  "Pradip Thapa",
  "Backend Developer",
  "Python Developer",
  "Django Developer",
  "Backend Developer from Nepal",
  "FastAPI",
  "REST API Developer",
  "Software Engineer from Nepal"
  ],
  authors: [{ name: "Pradip Thapa", url: "https://pradipthapa.net" }],
  creator: "Pradip Thapa",
  publisher: "Pradip Thapa",
  openGraph: {
    type: "website",
    siteName: "Pradip Thapa",
    images: ["https://pradipthapa.net/default-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@thepradipthapa",
  }
};



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

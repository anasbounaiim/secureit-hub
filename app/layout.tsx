import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen"; // ⬅️ add this

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.secureit-hub.com"),
  title: "SecureIT Hub – Network Security Consultant",
  description: "Clean, security-driven network & systems engineering.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://www.secureit-hub.com",
    title: "SecureIT Hub – Network Security Consultant",
    description:
      "Secure connectivity, VPN, firewalls and remote-friendly infrastructure.",
    images: [
      {
        url: "/og-secureit-hub.png",
        width: 1200,
        height: 630,
        alt: "SecureIT Hub – Terminal-style homepage preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SecureIT Hub – Network Security Consultant",
    description: "Secure networking & system engineering expertise.",
    images: ["/og-secureit-hub.png"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-gray-200 antialiased flex ">
        {/* Full-screen loading overlay */}
        <LoadingScreen />

        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 px-4 py-8 sm:px-8 md:ml-24 md:px-10 lg:ml-32 lg:px-12 lg:py-10 xl:ml-44 xl:pr-24 xl:pl-28 2xl:pr-72 2xl:pl-40">
          {/* Logo Header */}
          <Header />

          {children}

          {/* Footer */}
          <Footer />
        </main>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen"; // ⬅️ add this

export const metadata: Metadata = {
  title: "SecureIT-Hub – Network & Security Engineer",
  description:
    "Portfolio of a remote Network & Security Engineer specializing in Cisco, Fortinet, Zscaler, Linux, VPN and Automation.",
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
        <main className="flex-1 px-12 py-10 md:ml-56 lg:ml-44 lg:pr-72 lg:pl-40 lg:py-10">
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

import { Inter } from "next/font/google";
import "./globals.css";
// import { ToasterProvider } from "@/components/providers/toast-provider";
// import { ToasterProvider } from "@/components/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ToasterProvider /> */}
        {children}
      </body>
    </html>
  );
}

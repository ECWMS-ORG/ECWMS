
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ECWMS",
  description: "Employee and Contract Worker Management System",
};

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

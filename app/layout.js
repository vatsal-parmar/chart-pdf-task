import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export const metadata = {
  title: "PDF Report Generator",
  description: "Generates line chart report in pdf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

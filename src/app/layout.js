import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], // Specify the necessary subsets (e.g., 'latin' for English characters)
  display: "swap", // Recommended for preventing layout shifts
});

export const metadata = {
  title: "Ariston Publications",
  description: "Book publications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const font = Rubik({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://zect.vercel.app"),
  keyword: ["Zect", "Portfolio", "Website Developer"],
  title: {
    default: "Zect - Portfolio",
    template: `%s | Zect - Portfolio`
  },
  description: "Portfolio website owned by Al Sakha F.A.",
  authors: [
    {
      name: "Al Sakha F.A.",
      url: "https://github.com/IRTIDEATH",
    },
  ],
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

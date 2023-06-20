import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Solar System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${openSans.className} mx-28 my-10 text-white bg-[url('/images/background.png')] max-md:mx-5`}
      >
        {children}
      </body>
    </html>
  );
}

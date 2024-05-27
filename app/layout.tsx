import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "huzzy's brain dump",
  description: "everything I learned and some more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-6xl min-h-screen gap-4 p-4">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}

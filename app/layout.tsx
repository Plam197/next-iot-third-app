import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});


export const metadata: Metadata = {
  title: "Calculator Varity",
  description: "เครื่องคำนวณหลากหลายแบบ",
  keywords:["คำนวณ","BMI","BMR","Car Installment"],
  icons: {
    icon:"/next.svg",
  },
  authors: [{
    name: "May SAU",
    url: "https//github.com/MetapornAnan"
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}

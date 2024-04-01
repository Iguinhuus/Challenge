import type { Metadata } from "next";
import Header from "./Header/page";
import Footer from "./Footer/page";





export const metadata: Metadata = {
  title: "Sales Force",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        
      
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono,Roboto_Mono,Roboto } from "next/font/google";
import CustomThemer from "./Themer";          
import Frame from "./frame";

const geistSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineer",
  description: "my portfolio throught out the year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {

 
  return (

    
    <html lang="en">
     <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <CustomThemer>
          <Frame>
            {children}
          </Frame>
          </CustomThemer>
      
      

    </body>
    </html>
  );
}

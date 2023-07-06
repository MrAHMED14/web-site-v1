import "react-toastify/dist/ReactToastify.css";
import Provider from "./components/context/Provider";
import Footer from "./components/global/Footer";
import NavBar from "./components/global/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col text-gray-950 bg-base-200/50 dark:text-slate-200 dark:bg-gray-950/90">
        <Provider>
          <NavBar />
          <main className="container mx-auto grow my-6">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

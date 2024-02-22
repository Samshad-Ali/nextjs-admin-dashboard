import "./globals.css";
import Storeprovider from "@/lib/utils/Storeprovider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Authprovider from "@/auth-provider/Authprovider";
import { Toaster } from "react-hot-toast";
import Wrapper from "../utils/Wrapper";
export const metadata = {
  title: "Next Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Authprovider>
      <Storeprovider>
        <html lang="en">
          <body className=" bg-primaryClr">
            <Toaster />
            <Header />
            <main className="flex">
              <Sidebar />
              <div className="flex-1 overflow-hidden">
                <Wrapper>{children}</Wrapper>
              </div>
            </main>
            <Footer />
          </body>
        </html>
      </Storeprovider>
    </Authprovider>
  );
}

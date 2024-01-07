import BackgroundBubble from "./components/backgroundBubble";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F4FDFF]">
        <Header />
        {children}
        <BackgroundBubble />
        <Footer />
      </body>
    </html>
  );
}

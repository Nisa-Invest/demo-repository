import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  );
}

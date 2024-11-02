import { Button } from "../Button/Button";
//import { NisaLogo } from "../../assets/Nisa_Logo";
export default function Navbar() {
  return (
    <header className="w-full bg-accent-light-purple">
      <nav className="flex flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-4">
        {/* Optional: Add logo/brand here */}
        <div className="flex items-center gap-4 md:gap-7 md:pl-20">

          <Button label="Our Mission" />
          <Button label="Book a Demo" />
        </div>

        <Button label="Login" />
      </nav>
    </header>
  );
}

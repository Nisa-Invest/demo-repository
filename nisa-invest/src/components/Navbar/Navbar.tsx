
import { Button } from "../Button/Button";

export default function Navbar() {
  return (
    <header className="w-full bg-primary-purple px-4 py-2">
      <nav className="flex flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Optional: Add logo/brand here */}
        <div className="flex items-center gap-4 md:gap-7 md:pl-20">
          <Button label="Our Mission" />
          <Button label="Contact us" />
        </div>

        <Button label="Login" />
      </nav>
    </header>
  );
}

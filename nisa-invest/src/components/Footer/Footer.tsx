

export function Footer() {
  return (
    <footer className="bg-primary-purple text-white flex min-w-min">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center">
        {/* <Image
            src="/placeholder.svg"
            alt="Nisa Invest Logo"
            width={100}
            height={40}
            className="mb-4 md:mb-0"
          /> */}
        <nav className="flex flex-col-2">
          <ul className="flex flex-wrap gap-4 mx-4 justify-start">
            <li> About Us</li>
            <li> Contact</li>
            <li> Privacy Policy</li>
          </ul>
          <ul className="flex flex-col justify-end">
            <li>legal stuff 1</li>
            <li>legal stuff 2</li>
            <li>legal stuff 3</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

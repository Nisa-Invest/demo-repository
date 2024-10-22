import { Tabs, TabList, Tab } from "react-aria-components";



export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-primary-purple text-accent-light-purple">
      <Tabs>
        <TabList
          aria-label="Nisa Invest Landing Page"
          className="flex flex-row gap-4"
        >
          <Tab
            id="Mission"
            className="cursor-pointer px-2 md:px-8 md:h-24 hover:bg-accent-light-purple hover:text-primary-purple rounded-full active:bg-accent-light-green content-center "
          >
            Our Mission
          </Tab>
          <Tab
            id="Contact"
            className="cursor-pointer px-2 md:px-8 md:h-24 w-32 hover:bg-accent-light-purple hover:text-primary-purple rounded-full active:bg-accent-light-green content-center"
          >
            Contact Us
          </Tab>
          <Tab
            id="Login"
            className="cursor-pointer px-2 md:px-8 md:h-24 hover:bg-accent-light-purple hover:text-primary-purple rounded-full active:bg-accent-light-green content-center"
          >
            Log in
          </Tab>
        </TabList>
      </Tabs>
    </nav>
  );
}

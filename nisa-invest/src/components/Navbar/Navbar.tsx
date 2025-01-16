import styles from "./NavBar.module.css";
// import { NisaLogo } from "../../assets/Nisa_Logo";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <CustomLink to="/home"> Home </CustomLink>
        <CustomLink to="/"> Our Mission </CustomLink>
        <CustomLink to="/dashboard"> Dashboard </CustomLink>
      </ul>
      <ul className={styles.navList}>
        <CustomLink to="/construction"> Login </CustomLink>
        <CustomLink to="/construction"> Sign Up </CustomLink>
        <CustomLink to="/"> Book a Demo </CustomLink>
      </ul>
    </nav>
  );
}

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}
function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <Link to={to} className={styles.navLink} {...props}>
        {children}
      </Link>
    </li>
  );
}

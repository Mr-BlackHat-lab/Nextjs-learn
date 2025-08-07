"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-brand">WireFrame</div>
      <ul className="navbar-links">
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={pathname === "/profile" ? "active" : ""}>
          <Link href="/profile">Profile</Link>
        </li>
        <li className={pathname === "/projects" ? "active" : ""}>
          <Link href="/projects">Project</Link>
        </li>
      </ul>
    </nav>
  );
}

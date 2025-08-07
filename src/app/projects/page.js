"use client";
import "@/styles/projects.css";
import Link from "next/link";

export default function page() {
  return (
    <main className="project-container">
      <h1 className="page-title">This is Projects Link page</h1>
      <ul className="project-holder">
        <li className="project">
          <p className="project-title">
            Posts page is a simple page that fetches posts from an API and
            displays them.
          </p>


          <section className="about-section">
            <p>
              This page is designed to demonstrate how to fetch data from an API
              and display it in a React component. It uses the `useEffect` hook
              to fetch posts from the JSONPlaceholder API and displays them in a
              list format.
            </p>
            <Link href="/projects/posts">Go to Posts Page</Link>
          </section>
        </li>
      </ul>
    </main>
  );
}

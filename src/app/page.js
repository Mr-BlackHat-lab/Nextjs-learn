import"@/styles/home.css";

export default function Home() {
  return (
    <main className="page-container">
      <h1 className="page-title">Welcome to the Project</h1>
      <p className="page-description">
        This project is designed to help you learn how to fetch APIs, manually build wireframes,
        and toggle between light and dark themes using Next.js 15+ with App Router.
      </p>

      <section className="home-section">
        <h2>What You’ll Learn</h2>
        <ul>
          <li>✅ Fetch APIs using `fetch` or `axios`</li>
          <li>✅ Build layouts with external CSS and flexbox/grid</li>
          <li>✅ Create custom dark/light themes</li>
          <li>✅ Use App Router (`src/app`) structure</li>
        </ul>
      </section>
    </main>
  );
}

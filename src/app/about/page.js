import "@/styles/about.css";

export default function About() {
  return (
    <main className="page-container">
      <h1 className="page-title">About This Project</h1>
      <p className="page-description">
        This section gives insight into the purpose of this learning project and how it’s structured.
      </p>

      <section className="about-section">
        <p>
          We are using Next.js App Router, external CSS, and JavaScript logic to explore real-world skills
          like API integration, layout building, and theme toggling — all manually, without UI libraries.
        </p>
      </section>
    </main>
  );
}

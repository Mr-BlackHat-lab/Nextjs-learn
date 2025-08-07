import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ThemeToggle />
        {children}
        

      </body>
    </html>
  );
}

import { useEffect, useState } from "react";
import { Navbar, Hero, Business, Pricing, FeaturedReels, Testimonials, FAQ, CTA, Footer } from "./components";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="w-full overflow-hidden bg-page">
      {/* Fixed Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Business />
        <Pricing />
        <Testimonials />
        <FeaturedReels />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default App;

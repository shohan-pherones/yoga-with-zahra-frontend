import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div className="relative mt-[calc(100vh-5rem)]">
        <About />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;

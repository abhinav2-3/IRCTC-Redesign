import Assistance from "@/components/Assistance";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Holiday from "@/components/Holiday";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Assistance />
      <Holiday />
      <Footer />
    </main>
  );
}

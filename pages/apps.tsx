import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer-normal";
import Apps from "@/components/Apps";

export default function orbit() {
  return (
    <div className="relative">
      <Navbar />
      <Apps />
      <Footer />
    </div>
  );
}

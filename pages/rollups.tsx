import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer-normal";
import Rollups from "@/components/Rollups";

export default function orbit() {
  return (
    <div className="relative">
      <Navbar />
      <Rollups />
      <Footer />
    </div>
  );
}

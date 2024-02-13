import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer-normal";
import Orbit_details from "@/components/Rollups";

export default function orbit() {
  return (
    <div className="relative">
      <Navbar />
      <Orbit_details />
      <Footer />
    </div>
  );
}

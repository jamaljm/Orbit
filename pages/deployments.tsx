import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer-normal";
import Deployments from "@/components/Deployments";

export default function orbit() {
  return (
    <div className="relative">
      <Navbar />
      <Deployments />
      <Footer />
    </div>
  );
}

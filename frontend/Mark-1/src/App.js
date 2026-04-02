import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import DashboardSection from "./components/sections/Dashboard";
import TrustedSection from "./components/sections/TrustedSection";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      <Navbar />
      <Hero />
      <DashboardSection />
      <TrustedSection />
      <Testimonials />
    </div>
  );
}

export default App;

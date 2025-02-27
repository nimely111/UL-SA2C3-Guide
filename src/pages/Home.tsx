import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="text-center p-10">
        <h1 className="text-3xl font-bold">Welcome to SA2C3</h1>
        <p className="mt-2 text-gray-600">Explore our services to support your academic and career journey.</p>
      </header>
      <ServicesSection />
    </div>
  );
};

export default Home;

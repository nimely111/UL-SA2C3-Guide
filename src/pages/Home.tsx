import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="text-center p-10">
        <h1 className="text-3xl font-bold">Welcome to the University of Liberia Student Academic Advisory and Career Counseling Center (UL-SA <sup>2</sup>C<sup>3</sup>)</h1>
        <p className="mt-2 text-gray-600">Explore our services to support your academic and career journey.</p>
      </header>
      <ServicesSection />
    </div>
  );
};

export default Home;

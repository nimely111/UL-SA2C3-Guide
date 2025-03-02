import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import ulLogo from '../assets/logo.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="text-center p-10">
        <h1 className="text-3xl font-bold">Welcome to UL Student Academic Advisory and Career Counseling Center</h1>
        <h2 className="text-2xl font-bold">(UL-SA <sup>2</sup>C<sup>3</sup>)</h2>
        <p className="mt-2 text-gray-600">Explore our services to support your academic and career journey.</p>
      <img className="h-30 rounded-4xl object-center" src={ulLogo} alt="university of liberia logo" />
      </header>
      <ServicesSection />
    </div>
  );
};

export default Home;

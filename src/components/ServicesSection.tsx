import { useState } from "react"

const services = [
    "Academic Advisement",
    "Career Counseling",
    "Assessment Reporting",
    "Personal Counseling",
    "Therapeutic Services",
    "Training",
    "Outreach",
    "Consultation",
    "Crisis Intervention",
    "Referral",
];

const ServicesSection = () => {
const [seletedService, setSeletedservice] = useState<string | null>(null);

  return (
    <div className="container max-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Our services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
                <button
                key={index}
                className="p-4 bg-white shadow-md rounded-lg text-center hover:bg-blue-900 hover:text-white transition"
                onClick={() => setSeletedservice(service)}
                >
                    {service}
                </button>
            ))}
        </div>
        {seletedService && (
            <div className="mt-6 p-4 bg-gray-200 texxt-center rounded-lg">
                <h3 className="text-xl font-bold">{seletedService}</h3>
                <p className="text-gray-700">More details about {seletedService}will be available soon.</p>
            </div>
        )}
    </div>
  );
};

export default ServicesSection

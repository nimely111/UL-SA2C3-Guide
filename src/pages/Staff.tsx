import Navbar from "../components/Navbar"
import StaffCard from "../components/StaffCard";
const Staff = () => {
    return (
        <div>
            <Navbar />
            <h1  className="mt-20 text-2xl font-bold text-center">Meet Our Staff</h1>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
            </div>
        </div>
    )
}

export default Staff;
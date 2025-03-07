import Navbar from "../components/Navbar"
import StaffCard from "../components/StaffCard";
import profile1 from "../assets/profile1.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"
const Staff = () => {
    return (
        <div>
            <Navbar />
            <h1  className="mt-20 text-2xl font-bold text-center">Meet Our Staff</h1>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                <StaffCard
                     img={profile1}
                     name="John Doe"
                     phone="(+231) 555-1234"
                     email="mr.whiskaz@catnap.meow"
                 />
                <StaffCard
                     img={profile2}
                     name="Peter Paul"
                     phone="(+231) 555-1234"
                     email="mr.whiskaz@catnap.meow"
                 />
                <StaffCard
                     img={profile3}
                     name="Morris Johnson"
                     phone="(+231) 555-1234"
                     email="mr.whiskaz@catnap.meow"
                />
                <StaffCard
                     img={profile1}
                     name="Ms. Neresa ATolbert"
                     phone="(+231) 555-1234"
                     email="mr.whiskaz@catnap.meow"
                />
            </div>
        </div>
    )
}

export default Staff;
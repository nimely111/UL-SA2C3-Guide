import profile1 from "../assets/profile1.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"
const StaffCard = () => {
        return (
            <article className="contact-card">
                <img
                    src={profile1}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img
                        src="./images/phone-icon.png"
                        alt="phone icon"
                    /> 
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img
                        src="./images/mail-icon.png"
                        alt="mail icon"
                    />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </article>
        )
    }
export default StaffCard;
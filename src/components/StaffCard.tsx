import mail_logo from "../assets/mail.jpg"
import phone_logo from "../assets/phone.jpg"

 interface StaffCardProps {
    name: string;
    email: string;
    img: string;
    phone?: string;
}
const StaffCard:React.FC<StaffCardProps> = ({name, email, img, phone}) => {
        return (
            <article className="contact-card">
                <img
                    src={img}
                    alt={name}
                />
                <h3>{name}</h3>
                <div className="info-group">
                    <img
                        src={phone_logo}
                        alt="phone icon"
                    /> 
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img
                        src={mail_logo}
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
        )
    }
export default StaffCard;
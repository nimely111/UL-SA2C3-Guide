const StaffCard = (props) => {
        return (
            <article className="contact-card">
                <img
                    src={props.img}
                    alt={props.name}
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img
                        src="phone"
                        alt="phone icon"
                    /> 
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img
                        src="email"
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
        )
    }
export default StaffCard;
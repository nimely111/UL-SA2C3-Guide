const StaffCard = () => {
        return (
            <article className="contact-card">
                <img
                    src="../assets/logo.PNG"
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
import './ContactMe.css'

function ContactMe() {
    return (
        <>
            <section className="contactPageSection">
                <div className="contactContainer">
                    <form action="https://api.web3forms.com/submit" method="POST" className="contactLeft">
                        <div className="contactLeftTitle">
                            <h2>Contact Me!</h2>
                            <hr />
                        </div>
                        <input type="hidden" name="access_key" value="c233cd65-581e-43fa-ae63-b61ebd43b260"/>
                        <input type="text" name="name" placeholder="Your Name" className="contactInputs" required/>
                        <input type="email" name="email" placeholder="Your Email" className="contactInputs" required/>
                        <textarea name="message" placeholder="Your Message" className="contactInputs" required></textarea>
                        <button type="submit">
                            Submit
                            <img src="/Images/arrow-right.png" alt="Arrow right" />
                        </button>
                    </form>
                    <div className="contactRight">
                        <img src="/Images/mail.png" alt="Mail icon" />
                    </div>
                </div>
            </section>

            <section className="attributionSection">
                <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">
                    Arrows icons created by BizzBox - Flaticon
                </a>
                <br />
                <a href="https://www.flaticon.com/free-icons/contact-us" title="contact us icons">
                    Contact us icons created by Freepik - Flaticon
                </a>
            </section>
        </>
    )
}

export default ContactMe
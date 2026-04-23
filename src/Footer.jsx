import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p>CopyRight &copy; 2026 Sebastian Ha. All Rights Reserved.</p>
            <p>Contact Me: <a href="mailto:sebastianha175@gmail.com" className="footerLink">
                sebastianha175@gmail.com
            </a></p>
            <p className="followMeText">Follow me : 
                <a href="https://github.com/sebha01">
                    <img src="./Images/github-mark-white.png" alt="GitHub" className="footerImages"/>
                </a> | 
                <a href="https://www.linkedin.com/in/sebastian-ha-3b4602251/">
                    <img src="./Images/LI-Logo.png" alt="LinkedIn" className="footerImages"/>
                </a> |
                <a href="https://sebastianha01.itch.io/">
                    <img src="./Images/itchio-logo-white.png" alt="Itch.io" className="footerImages"/>
                </a>
            </p>
        </footer>
    )
}

export default Footer
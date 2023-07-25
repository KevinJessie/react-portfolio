import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <a href="https://github.com/KevinJessie" target="blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kevin-jessie-2a1b1b1b1/" target="blank">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
                
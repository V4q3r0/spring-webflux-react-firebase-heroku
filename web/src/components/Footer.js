import React from "react"

export const Footer = () => (
    <footer style={{color: 'white', fontSize: '1.2em'}}>
        <section>
            <section>
                <h4>Follow us on our social networks!!</h4>
            </section>
            <section className="icon-redSocial">
                <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/whatsapp--v4.png"/>
                <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                <img src="https://img.icons8.com/fluency/48/000000/twitter.png"/>
                <img src="https://img.icons8.com/color/48/000000/tiktok--v2.png"/>
            </section>
            <section>
                <p>EsteCorreo@NoExiste.com - <a className="legal">Legal warning</a></p>
            </section>
        </section>
        <section>
            <p>This page is made for entertainment purposes, it does not contain exclusive content and any reference can be found on the web.</p>
            <span>&copy; Made by FACJ</span>
        </section>
    </footer>
)
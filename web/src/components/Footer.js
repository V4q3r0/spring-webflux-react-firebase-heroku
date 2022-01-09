import React from "react"

export const Footer = () => (
    <footer style={{color: 'white', fontSize: '1.2em'}}>
        <section>
            <section>
                <h4>Siguenos en nuestras redes sociales!!</h4>
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
                <p>EsteCorreo@NoExiste.com - <a className="legal">Aviso legal</a></p>
            </section>
        </section>
        <section>
            <p>Está página se realizó con fines de entrenimiento, no contiene contenido exclusivo y cualquier referencia puede ser encontrada en la web.</p>
            <span>&copy; Realizado por FACJ</span>
        </section>
    </footer>
)
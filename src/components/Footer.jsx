import "../styles/footer.css"




const Footer = () => {
    return (
        <div id='footer' >
            <div className=" footer-content">
                <h5>Equipo de Trabajo</h5>
                <h6><i class="i bi bi-person-fill"></i>Kevin Sebastian Ortiz Sarmiento</h6>
                <h6><i class="i bi bi-person-fill"></i>Josmar Alejandra Mejia Lizcano</h6>
                <h6><i class="i bi bi-person-fill"></i>Hugo Arles Torres Franco</h6>
                <h6><i class="i bi bi-person-fill"></i>Yonatan Nieto Herrera</h6>
            </div>
            <div className=" footer-content">
                <h5>Contacto</h5>
                <h6><i class="i bi bi-telephone-fill"></i>322 9278936</h6>
                <h6><i class="i bi bi-envelope-fill"></i>academica.application@gmail.com</h6>
                <h6><i class="i bi bi-envelope-fill"></i>academica.reciclaje@gmail.com</h6>
                <h5>Contacto Desarrollador</h5>
                <h6><i class="i bi bi-envelope-fill"></i>kevinsebastianortizsarmiento@gmail.com</h6>
            </div>
            <div className=" footer-content">
                <h5>Aplicaciones Web Desarrolladas</h5>
                <h6><i class="i bi bi-globe"></i>https://red-social-mision-tic.herokuapp.com</h6>
                <h6><i class="i bi bi-globe"></i>https://red-academica.herokuapp.com</h6>
                <h6><i class="i bi bi-globe"></i>https://academica-clima.herokuapp.com</h6>
                <h6><i class="i bi bi-globe"></i>https://academica-reciclaje-2022.herokuapp.com/</h6>
            </div>
        </div>
    )
}

export default Footer
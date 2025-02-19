import { faArrowRight, faEnvelope, IconDefinition,  } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono específico de GitHub
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const BotonContacto=({titulo,icono,redireccion}:{titulo:string,icono: IconDefinition,redireccion:string})=>{
    return(<>
        <button onClick={()=>{window.location.href=redireccion}} className="botonGeneral4">
            <div className="botonGeneral4__div-titulo">
                <FontAwesomeIcon icon={icono} />
                <div className="botonGeneral4__titulo">{titulo}</div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </>)
}

export const Contacto=()=>{
    return(<>
        <h3>Contacto</h3>
        <p className="contacto__p">Si te ha interesado mi trabajo y te gustaría ponerte en contacto conmigo, puedes hacerlo a través de las siguientes opciones</p>
        <BotonContacto titulo="Email"     icono={faEnvelope}   redireccion="mailto:diegoiocco13@gmail.com"/>
        <BotonContacto titulo="Linkedin"  icono={faLinkedin}   redireccion="https://www.linkedin.com/in/diego-nicolas-iocco-12189a219/"/>
        <BotonContacto titulo="GitHub"    icono={faGithub}     redireccion="https://github.com/Diocco"/>
        <BotonContacto titulo="Instagram" icono={faInstagram}  redireccion="https://www.instagram.com/diocco01/"/>
    </>)
}
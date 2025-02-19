import { Tecnologia } from "../components/tsx/tecnologia"

export const Sobremi =()=>{
    return (<>
        <div className="sobremi__titulo">
            <h2>Sobre mi</h2>
            <p>Soy estudiante de Ingeniería en Sistemas, con un trasfondo en Ingeniería Electrónica. Fue en el tercer año de mi carrera anterior cuando descubrí mi pasión por la programación, especialmente trabajando con C y C++. Me apasiona todo lo relacionado con la creación, ya sea en el mundo físico o digital. La programación se convirtió en mi verdadera afición porque me permite construir, experimentar y ver resultados de forma inmediata, con la libertad de equivocarme y aprender sin limitaciones en el proceso.
            <p>Además del mundo digital, me encanta la vida en el campo y las sierras, ya que pasé la mayor parte de mi vida en Córdoba, Argentina. Disfruto hacer ejercicio al aire libre y en el gimnasio, así como leer y dibujar en mi tiempo libre.</p>
            <p>Otro de mis hobbies es la impresión 3D, donde he sido capaz de diseñar y crear herramientas que optimizan la producción en mi trabajo actual.</p></p>
        </div>
        <div className="sobremi__informacion">
            <h3>Informacion personal</h3>
            <div className="sobremi__informacion-div">
                <div className="sobremi__informacion-nombre" >Fecha de nacimiento</div><div>18-05-2001</div>
                <div className="sobremi__informacion-nombre" >Telefono</div><div>3546 430779</div>
                <div className="sobremi__informacion-nombre" >Email</div><div>diegoiocco13@gmail.com</div>
                <div className="sobremi__informacion-nombre" >Direccion</div><div>La Plata, Buenos Aires, Argentina</div>
                <div className="sobremi__informacion-nombre" >Idioma</div><div>Ingles intermedio - Español nativo</div>
            </div>
        </div>
        <div>
            <h3 >Habilidades tecnicas</h3>
            <p className="sobremi__informacion__p">Tecnologias utilizadas en mis proyectos recientes.</p>
            <Tecnologia index={0}/>
            <Tecnologia index={1}/>
            <Tecnologia index={2}/>
            <Tecnologia index={3}/>
            <Tecnologia index={4}/>
            <Tecnologia index={5}/>
            <Tecnologia index={6}/>
        </div>
        <a className="sobremi__informacion-descargar botonGeneral2" href="public/assets/CV_Diego_Iocco.pdf" download="CV_Diego_Iocco.pdf">Descargar CV</a>
    </>)
}

import { faCartShopping, faDesktop, faGlobe, faMobile, faServer, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { TablaProyectos } from './tablaProyectos';
import { TablaProyectosMobile } from './tablaProyectosMobile';
import CartaAplicacion from '../components/tsx/cartaAplicacion';
import { Chip, Modal } from '@mui/material';


const Orbita=({index,verProyecto,setVerProyecto,fontIcon,nombre,setProyectoActivo}:{index:number,verProyecto:string|undefined,setVerProyecto: React.Dispatch<React.SetStateAction<string | undefined>>,fontIcon: IconDefinition,nombre:string,setProyectoActivo: React.Dispatch<React.SetStateAction<string>>})=>{
    return(
        <div className={`orbita orbita${index} ${verProyecto? "stopOrbitar": ""}`} >
            <div    className={`planeta planeta${index} ${verProyecto? "stopOrbitar": ""}`} 
                    onClick={()=>{
                        setProyectoActivo(nombre);
                        window.location.hash=""
                        window.location.hash="tablaProyectos"
                    
                    }} 
                    onMouseEnter={()=>setVerProyecto(nombre)} 
                    onMouseLeave={()=>setVerProyecto(undefined)}>
                <FontAwesomeIcon icon={fontIcon} />
            </div>
        </div>)
}


export const Proyectos =()=>{

    const [verVivorita, setVerVivorita] = useState<boolean>(false)
    const [verProyecto, setVerProyecto] = useState<string|undefined>(undefined)
    const [proyectoActivo, setProyectoActivo ] = useState("servidor")
    const [esMobile, setEsMobil] = useState(document.documentElement.clientWidth>500)

    useEffect(()=>{
        window.addEventListener('resize',()=>setEsMobil((document.documentElement.clientWidth)>500))
        return () => {
            window.removeEventListener("resize", ()=>setEsMobil((document.documentElement.clientWidth)>500));
        };
    },[])
    
    const irProyecto=(nombre:string)=>{
        setProyectoActivo(nombre);
        window.location.hash=""
        window.location.hash="tablaProyectos"
    }

    return (
    <>
        <div id="proyectos__titulo">
            <h3 id="proyectos__h3">Proyectos</h3>
            <h2 id="proyectos__h2">Entorno Registener</h2>
            <p id="proyectos__p">Registener es un entorno de aplicaciones interconectadas que responden a las necesidades de gestión, ventas y ecommerce de manera integral. Cada componente del sistema está diseñado para trabajar en sinergia, utilizando una API Rest como columna vertebral que asegura autenticación, permisos y comunicación fluida con la base de datos.</p>
        </div>
        <div id="lineaTiempo">
            <div></div>
            <div className='lineaTiempo__evento'>
                <CartaAplicacion titulo={'Ingenieria Electronica - UNLP'} descripcion={'Ingresé a la carrera y forjé una base sólida en ciencias básicas.'} />
                <div></div>
                <Chip label={"2021"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
            </div>
            <div className='lineaTiempo__evento'>
                <Chip label={"2022"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
                <div></div>
                <CartaAplicacion titulo={'Ingenieria Electronica - 2° año'} descripcion={'Refiné mi capacidad analítica y de resolución de problemas al llevar conceptos teóricos a proyectos prácticos de ingeniería.'} />
            </div>
            <div className='lineaTiempo__evento'>
                <CartaAplicacion titulo={'Ingenieria Electronica - 3° año'} descripcion={'Aprendí las bases de la programación y el análisis numérico, desarrollando soluciones en C y C++ y aplicando metodologías para optimizar procesos y algoritmos.'} />
                <div></div>
                <Chip label={"2023"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
            </div>
            <div className='lineaTiempo__evento lineaTiempo__evento-a' onClick={()=>setVerVivorita(true)}>
                <Chip label={"Diciembre 2023"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
                <div></div>
                <CartaAplicacion titulo={'Juego "Vivorita"'} URLImagen={"/images/vivorita.png"} tecnologias={[8]} descripcion={'Clasico juego de la vivorita, tiene tabla de puntajes maximos, tienda, mapas aleatorios y entidades dinamicas.'} />
            </div>
            <div className='lineaTiempo__evento lineaTiempo__evento-a'  onClick={()=>irProyecto("pagina")}>
                <CartaAplicacion titulo={'Página Web'}     tecnologias={[0,1,3]}   URLImagen={"/images/inicioPagina.png"} enDesarrollo={true} descripcion={'Plataforma de ecommerce orientada a la venta de productos en línea, integrando todas las funcionalidades del entorno para ofrecer una experiencia de compra completa y segura.'} />
                <div></div>
                <Chip label={"Febrero 2024"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
            </div>
            <div className='lineaTiempo__evento lineaTiempo__evento-a' onClick={()=>irProyecto("escritorio")}>
                <Chip label={"Diciembre 2024"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
                <div></div>
                <CartaAplicacion titulo={'App Escritorio'} tecnologias={[0,1,3]}   URLImagen={'/images/AplicacionEscritorio/inicioSesion.png'}  descripcion={'Aplicación de escritorio destinada a administradores y empleados, que facilita la creación y modificación de productos, ventas presenciales, arqueos de caja, control de ingresos, egresos y estadísticas de ventas.'} />
            </div>
            <div className='lineaTiempo__evento lineaTiempo__evento-a' onClick={()=>irProyecto("servidor")}>
                <CartaAplicacion titulo={'API REST'}       tecnologias={[3,4,6]}  descripcion={'Servicio backend central que maneja autenticación, permisos, y gestiona usuarios, productos, categorías y registros. Es el intermediario esencial que conecta y da soporte a todas las demás aplicaciones.'} />
                <div></div>
                <Chip label={"Enero 2025"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
            </div>
            <div className='lineaTiempo__evento lineaTiempo__evento-a' onClick={()=>irProyecto("mobile")}>
                <Chip label={"Marzo 2025"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
                <div></div>
                <CartaAplicacion titulo={'App Mobile'}     tecnologias={[3,5]}   URLImagen={'/images/AplicacionMovil/productos.jpg'}  enDesarrollo={true} descripcion={'Aplicación móvil orientada a administradores, diseñada para el control de registros y la gestión de productos, permitiendo agregar o modificar información de manera ágil.'} />
            </div>
            <div className='lineaTiempo__evento lineaTiempo__evento-a'  onClick={()=>irProyecto("empleados")}>
                <CartaAplicacion titulo={'Control de empleados'}   URLImagen={'/images/AplicacionEmpleados/inicio.png'}  tecnologias={[3,5,7]}  enDesarrollo={true} descripcion={'Control de empleados'} />
                <div></div>
                <Chip label={"Abril 2025"} sx={{color: "#fff" }} className='lineaTiempo__chip'/>
            </div>
            
        </div>
        <div className="sistemaOrbita">
            <Orbita index={0} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faServer}        nombre="servidor"    setProyectoActivo={setProyectoActivo}  />
            <Orbita index={1} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faMobile}        nombre="mobile"      setProyectoActivo={setProyectoActivo}  />
            <Orbita index={2} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faDesktop}       nombre="escritorio"  setProyectoActivo={setProyectoActivo}  />
            <Orbita index={3} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faCartShopping}  nombre="empleados"     setProyectoActivo={setProyectoActivo}  />
            <Orbita index={4} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faGlobe}         nombre="pagina"      setProyectoActivo={setProyectoActivo}  />
        </div>
        <div id="proyectos__descripciones">
            <CartaAplicacion titulo={'API REST'}       tecnologias={[3,4,6]}  descripcion={'Servicio backend central que maneja autenticación, permisos, y gestiona usuarios, productos, categorías y registros. Es el intermediario esencial que conecta y da soporte a todas las demás aplicaciones.'} />
            <CartaAplicacion titulo={'App Mobile'}     tecnologias={[1,3,5]}   URLImagen={'/images/productosMobile.png'}  enDesarrollo={true} descripcion={'Aplicación móvil orientada a administradores, diseñada para el control de registros y la gestión de productos, permitiendo agregar o modificar información de manera ágil.'} />
            <CartaAplicacion titulo={'App Escritorio'} tecnologias={[0,1,3]}   URLImagen={'/images/AplicacionEscritorio/inicioSesion.png'}  descripcion={'Aplicación de escritorio destinada a administradores y empleados, que facilita la creación y modificación de productos, ventas presenciales, arqueos de caja, control de ingresos, egresos y estadísticas de ventas.'} />
            <CartaAplicacion titulo={'Página Web'}     tecnologias={[0,1,3]}   URLImagen={"/images/inicioPagina.png"} enDesarrollo={true} descripcion={'Plataforma de ecommerce orientada a la venta de productos en línea, integrando todas las funcionalidades del entorno para ofrecer una experiencia de compra completa y segura.'} />
        </div>
        {esMobile
                ?<TablaProyectos proyectoActivo={proyectoActivo} setProyectoActivo={setProyectoActivo} />
                :<TablaProyectosMobile/>
        }

        <Modal
            open={verVivorita}
            onClose={()=>setVerVivorita(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="tablaProyectos__modal"
            >
            <div id="modalVivorita">
                <iframe  width="560" height="315" 
                    src="https://www.youtube.com/embed/xjkAXir0J7I"
                    title="Video de YouTube" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </Modal>
    </>)   
}
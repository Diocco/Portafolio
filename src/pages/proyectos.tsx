
import { faCartShopping, faDesktop, faGlobe, faMobile, faServer, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { TablaProyectos } from './tablaProyectos';
import { TablaProyectosMobile } from './tablaProyectosMobile';


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

    const [verProyecto, setVerProyecto] = useState<string|undefined>(undefined)
    const [proyectoActivo, setProyectoActivo ] = useState("servidor")
    const [esMobil, setEsMobil] = useState(document.documentElement.clientWidth>500)

    useEffect(()=>{
        window.addEventListener('resize',()=>setEsMobil((document.documentElement.clientWidth)>500))
        return () => {
            window.removeEventListener("resize", ()=>setEsMobil((document.documentElement.clientWidth)>500));
        };
    },[])
    
    

    return (
    <>
        <div id="proyectos__titulo">
            <h3 id="proyectos__h3">Proyectos</h3>
            <h2 id="proyectos__h2">Ecosistema Registener</h2>
            <p id="proyectos__p">Registener es un ecosistema de aplicaciones interconectadas que responden a las necesidades de gestión, ventas y ecommerce de manera integral. Cada componente del sistema está diseñado para trabajar en sinergia, utilizando una API Rest como columna vertebral que asegura autenticación, permisos y comunicación fluida con la base de datos.</p>
        </div>
        <div className="sistemaOrbita">
            <Orbita index={0} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faServer}        nombre="servidor"    setProyectoActivo={setProyectoActivo}  />
            <Orbita index={1} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faMobile}        nombre="mobile"      setProyectoActivo={setProyectoActivo}  />
            <Orbita index={2} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faDesktop}       nombre="escritorio"  setProyectoActivo={setProyectoActivo}  />
            <Orbita index={3} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faCartShopping}  nombre="pedidos"     setProyectoActivo={setProyectoActivo}  />
            <Orbita index={4} verProyecto={verProyecto} setVerProyecto={setVerProyecto} fontIcon={faGlobe}         nombre="pagina"      setProyectoActivo={setProyectoActivo}  />
        </div>
        <div id="proyectos__descripciones">
            <div className={`proyecto-div ${verProyecto ? (verProyecto!=="servidor" ? "proyecto-div-inactivo" : ""):""}`}>
                <div className="proyectos__proyecto-titulo">
                    <h3>API Rest</h3>
                </div>
                <p>Servicio backend central que maneja autenticación, permisos, y gestiona usuarios, productos, categorías y registros. Es el intermediario esencial que conecta y da soporte a todas las demás aplicaciones.</p>
            </div>
            <div className={`proyecto-div ${verProyecto ? (verProyecto!=="mobile" ? "proyecto-div-inactivo" : ""):""}`}>
                <div className="proyectos__proyecto-titulo">
                    <h3>Registener - App Mobile</h3>
                    <span className="proyectos__proyecto-span">{"(En desarrollo)"}</span>
                </div>
                <p>Aplicación móvil orientada a administradores, diseñada para el control de registros y la gestión de productos, permitiendo agregar o modificar información de manera ágil.</p>
            </div>
            <div className={`proyecto-div ${verProyecto ? (verProyecto!=="escritorio" ? "proyecto-div-inactivo" : ""):""}`}>
                <div className="proyectos__proyecto-titulo">
                    <h3>Registener - App Escritorio</h3>
                </div>
                <p>Aplicación de escritorio destinada a administradores y empleados, que facilita la creación y modificación de productos, ventas presenciales, arqueos de caja, control de ingresos/egresos y estadísticas de ventas.</p>
            </div>
            <div className={`proyecto-div ${verProyecto ? (verProyecto!=="pedidos" ? "proyecto-div-inactivo" : ""):""}`}>
                <div className="proyectos__proyecto-titulo">
                    <h3>App Mobile de Pedidos</h3>
                    <span className="proyectos__proyecto-span">{"(Próximamente)"}</span>
                </div>
                <p>Aplicación móvil enfocada al cliente, que permite realizar pedidos de productos para su posterior retiro presencial, brindando una experiencia de compra cómoda y rápida.</p>
            </div>
            <div className={`proyecto-div ${verProyecto ? (verProyecto!=="pagina" ? "proyecto-div-inactivo" : ""):""}`}>
                <div className="proyectos__proyecto-titulo">
                    <h3>Página Web</h3>
                    <span className="proyectos__proyecto-span">{"(En desarrollo)"}</span>
                </div>
                <p>Plataforma de ecommerce orientada a la venta de productos en línea, integrando todas las funcionalidades del ecosistema para ofrecer una experiencia de compra completa y segura.</p>
            </div>
        </div>
        {esMobil
                ?<TablaProyectos proyectoActivo={proyectoActivo} setProyectoActivo={setProyectoActivo} />
                :<TablaProyectosMobile/>
        }
    </>)   
}
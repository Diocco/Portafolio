import { faArrowRight, faCartShopping, faDesktop, faGlobe, faMobile, faServer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from 'react';
import { Escritorio, Mobile, Pagina, Pedidos, Servidor } from "./tablaProyectos"



const VentanaEmergenteProyecto=({proyectoActivo,setProyectoActivo}:{proyectoActivo:string,setProyectoActivo: React.Dispatch<React.SetStateAction<string>>})=>{

    useEffect(()=>{
        document.documentElement.classList.add('scrollDesactivado')
        document.getElementById("root")!.classList.add('scrollDesactivado')

        return ()=> {
            document.documentElement.classList.remove('scrollDesactivado')
            document.getElementById("root")!.classList.remove('scrollDesactivado')
        }
    },[])

    return (<div id="ventanaEmergenteProyecto" className="ventanaEmergenteProyecto-activo">
            <FontAwesomeIcon onClick={()=>{setProyectoActivo("")}} className="tablaProyectosMobile__flecha-volver" icon={faArrowRight} />
            {proyectoActivo==="servidor" && <Servidor />}
            {proyectoActivo==="mobile" && <Mobile />}
            {proyectoActivo==="escritorio" && <Escritorio />}
            {proyectoActivo==="pedidos" && <Pedidos />}
            {proyectoActivo==="pagina" && <Pagina />}
    </div>)
}

export const TablaProyectosMobile =()=>{
    const [proyectoActivo,setProyectoActivo] = useState<string>("")



    return (
    <>
        {proyectoActivo && <VentanaEmergenteProyecto proyectoActivo={proyectoActivo} setProyectoActivo={setProyectoActivo}/>}
            <div id="TablaProyectosMobile">
                <div onClick={()=>setProyectoActivo("servidor")} className="tablaProyectosMobile__tarjeta">
                    <FontAwesomeIcon className="tablaProyectosMobile__icono" icon={faServer} />
                    <FontAwesomeIcon className="tablaProyectosMobile__flecha" icon={faArrowRight} />
                    <h3 className="tablaProyectosMobile__h3">API Rest</h3>
                    <p>Gestiona autenticación, permisos, usuarios, productos, categorías y registros, conectando todas las aplicaciones.</p>
                </div>
                <div onClick={()=>setProyectoActivo("mobile")} className="tablaProyectosMobile__tarjeta">
                    <FontAwesomeIcon className="tablaProyectosMobile__icono" icon={faMobile} />
                    <FontAwesomeIcon className="tablaProyectosMobile__flecha" icon={faArrowRight} />
                    <h3 className="tablaProyectosMobile__h3">App Mobile</h3>
                    <p>Permite gestionar registros y productos de forma ágil.</p>
                </div>
                <div onClick={()=>setProyectoActivo("escritorio")} className="tablaProyectosMobile__tarjeta">
                    <FontAwesomeIcon className="tablaProyectosMobile__icono" icon={faDesktop} />
                                <FontAwesomeIcon className="tablaProyectosMobile__flecha" icon={faArrowRight} />
                    <h3 className="tablaProyectosMobile__h3">App Escritorio</h3>
                    <p>Facilita la gestión de productos, ventas presenciales, arqueos de caja, ingresos/egresos y estadísticas.</p>
                </div>
                <div onClick={()=>setProyectoActivo("pedidos")} className="tablaProyectosMobile__tarjeta">
                    <FontAwesomeIcon className="tablaProyectosMobile__icono" icon={faCartShopping} />
                                <FontAwesomeIcon className="tablaProyectosMobile__flecha" icon={faArrowRight} />
                    <h3 className="tablaProyectosMobile__h3">App Mobile de Pedidos</h3>
                    <p> Permite realizar pedidos para retiro presencial.</p>
                </div>
                <div onClick={()=>setProyectoActivo("pagina")} className="tablaProyectosMobile__tarjeta">
                    <FontAwesomeIcon className="tablaProyectosMobile__icono" icon={faGlobe} />
                                <FontAwesomeIcon className="tablaProyectosMobile__flecha" icon={faArrowRight} />
                    <h3 className="tablaProyectosMobile__h3">Página Web</h3>
                    <p> Venta en línea con integración total del ecosistema.</p>
                </div>
            </div>
    </>
        
    )
}

import { faBars, faBasketShopping, faBolt, faCaretUp, faCircleInfo, faGear, faGem, faHeart, faHouse, faPencil, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Tecnologia } from "../components/tsx/tecnologia"





export const Servidor =()=>{

    return (
    <>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Api Rest</h2>
                <p>La API REST es el núcleo del ecosistema Registener, funcionando como el backend central que interconecta todas las aplicaciones del sistema. Su principal objetivo es gestionar los datos y operaciones de los usuarios, productos, ventas y registros de arqueos de caja, proporcionando una infraestructura segura y escalable para los distintos clientes que la utilizan.</p>
            </div>
            <div className="tablaProyectos__tecnologias">
                <Tecnologia index={3}/>
                <Tecnologia index={4}/>
                <Tecnologia index={6}/>
            </div>
            <div className="tablaProyectos__contenedor-div">
                <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                    <FontAwesomeIcon icon={faGem} className="tablaProyectos__contenedor__contenido-icon"/>
                    <h2 className="tablaProyectos__contenedor__contenido-h2">Funcionalidades principales</h2>
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                    <p><strong>Usuarios:</strong> Registro, autenticación, modificación, eliminación y gestión de permisos.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                    <p><strong>Productos:</strong> Creación, edición y eliminación de productos.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                    <p><strong>Categorías:</strong> Organización clara y eficiente de los productos.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                    <p><strong>Variantes:</strong> Control detallado de stock para productos con múltiples características. Cada variante cuenta con atributos específicos, código y stock independiente.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                    <p><strong>Registros de ventas:</strong> Gestión de transacciones y seguimiento del historial de compras. Permite modificaciones con un registro detallado de cambios.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                    <p><strong>Registros de arqueos de caja:</strong> Monitoreo del flujo de dinero en diferentes medios de pago.</p> 
                </div>
            </div>
            <div className="tablaProyectos__contenedor-div">
                <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                    <FontAwesomeIcon icon={faGear} className="tablaProyectos__contenedor__contenido-icon"/>
                    <h2 className="tablaProyectos__contenedor__contenido-h2">Tecnologías utilizadas</h2>
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon" icon={faBolt} />   
                    <p><strong>Node.js con Express:</strong> Framework para gestionar las solicitudes HTTP de manera eficiente.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon" icon={faBolt} />   
                    <p><strong>MongoDB con Mongoose:</strong> Base de datos NoSQL con un ODM para facilitar la manipulación de datos.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon" icon={faBolt} />   
                    <p><strong>JSON Web Tokens (JWT):</strong> Implementación de autenticación segura basada en tokens.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon" icon={faBolt} />   
                    <p><strong>bcryptjs:</strong> Para el hash de contraseñas y seguridad de los usuarios.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon" icon={faBolt} />   
                    <p><strong>Express Validator:</strong> Validación de datos en las solicitudes.</p> 
                </div>
                <div className="tablaProyectos__contenedor__parrafo">
                    <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon" icon={faBolt} />   
                    <p><strong>UUID:</strong> Generación de identificadores únicos para los recursos.</p> 
                </div> 
            </div>
        </div>
    
    </>
    )
}
export const Mobile=()=>{
    return(<>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h5 className="tablaProyectos__contenedor__contenido-h5">En desarrollo</h5>
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Registener - App Mobile</h2>
                <p>La aplicación móvil de Registener está diseñada para brindar a los administradores una gestión rápida y eficiente de los productos y registros desde cualquier lugar. Con una interfaz intuitiva y organizada, permite modificar productos, actualizar imágenes y administrar variantes fácilmente.</p>
            </div>
            <div className="tablaProyectos__tecnologias">
                <Tecnologia index={0}/>
                <Tecnologia index={1}/>
                <Tecnologia index={3}/>
                <Tecnologia index={5}/>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faRightToBracket} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2"> Inicio de sesión</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Registro y autenticación:</strong> Los usuarios deben registrarse o iniciar sesión para acceder a la aplicación.</p> 
                    </div>
                </div>
                <div>
                    <img className="tablaProyectos__img" src='../src/images/inicioSesionMobile.png'></img>
                    <img className="tablaProyectos__img" src='../src/images/inicioSesionMobile2.png'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <img className="tablaProyectos__img" src='../src/images/productosMobile.png'></img>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Sección de productos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Vista general:</strong> Muestra una lista de productos organizados por categorías.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Búsqueda :</strong> Permite buscar productos por nombre para una rápida localización.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Gestión :</strong>  Desde esta sección se accede a la información de cada producto y sus variantes.</p> 
                    </div>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBasketShopping} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Modificación de productos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong>  Edición de información:</strong> Posibilidad de modificar el nombre, precio, categoría y descripción del producto.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Gestión de imágenes:</strong> Permite añadir, eliminar o cambiar imágenes del producto.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faPencil} />   
                        <p><strong> Control de variantes y especificaciones:</strong> Se pueden agregar, modificar o eliminar especificaciones o variantes con sus respectivas características .</p> 
                    </div>
                </div>
                <div>
                    <img className="tablaProyectos__img" src='../src/images/productoMobile.png'></img>
                    <img className="tablaProyectos__img" src='../src/images/productoMobile2.png'></img>
                    <img className="tablaProyectos__img" src='../src/images/productoMobile3.png'></img>
                </div>
            </div>
        </div>
    </>)
}
export const Escritorio=()=>{
    return(<>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Aplicación de escritorio - Registener</h2>
                <p>La aplicación de escritorio está diseñada para la gestión integral de productos, ventas y control de caja en un entorno presencial. Permite a administradores y empleados manejar eficientemente el flujo de trabajo, desde la gestión de inventario hasta el registro de transacciones y arqueo de caja.</p>
            </div>
            <div className="tablaProyectos__tecnologias">
                <Tecnologia index={0}/>
                <Tecnologia index={1}/>
                <Tecnologia index={3}/>
            </div>
            <iframe className="tablaProyectos__contenedor-iframe" width="560" height="315" 
                src="https://www.youtube.com/embed/RBZgYx_RsMU" 
                title="Video de YouTube" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>   
        </div>
    </>)
}
export const Pedidos=()=>{
    return(<>
    <div className="tablaProyectos__proximamente">Proximamente</div>
    </>)
}
export const Pagina=()=>{
    return(<>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h5 className="tablaProyectos__contenedor__contenido-h5">En desarrollo</h5>
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Página Web - Ecommerce Registener</h2>
                <p>La página web ecommerce está diseñada para ofrecer a los usuarios una experiencia de compra fácil e intuitiva, permitiéndoles explorar productos, filtrarlos según sus preferencias y realizar compras de manera segura. </p>
            </div>
            <div className="tablaProyectos__tecnologias">
                <Tecnologia index={0}/>
                <Tecnologia index={1}/>
                <Tecnologia index={3}/>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faHouse} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Sección de Inicio</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Categorías destacadas:</strong> En esta sección, se presentan distintas categorías de productos, facilitando el acceso inicial a las opciones más populares.</p> 
                    </div>
                </div>
                <img className="tablaProyectos__img" src='../src/images/inicioPagina.png'></img>
            </div>
            <div className="tablaProyectos__captura">
                <img className="tablaProyectos__img" src='../src/images/inicioSesion.png'></img>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faRightToBracket} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Iniciar sesión</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Registro y autenticación:</strong> Los usuarios pueden crear una cuenta o iniciar sesión para realizar compras.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Guardado de preferencias:</strong> Al estar registrados, los usuarios pueden guardar sus productos favoritos y ver su historial de compras.</p> 
                    </div>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBasketShopping} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Catálogo de productos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong>  Filtros de búsqueda:</strong> Los productos se pueden filtrar por nombre, categoría, precio o características específicas, brindando al usuario una manera fácil de encontrar lo que busca.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Visualización de productos:</strong> Cada producto se presenta con imágenes, nombre, precio y otras características relevantes.</p> 
                    </div>
                </div>
                <img className="tablaProyectos__img" src='../src/images/catalogo.png'></img>
            </div>
            <div className="tablaProyectos__captura">
                <img className="tablaProyectos__img" src='../src/images/producto.png'></img>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faCircleInfo} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Página de producto</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong>  Detalles completos:</strong> Al hacer clic en un producto, el usuario puede ver información detallada, como descripciones, imágenes ampliadas, especificaciones y más.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Opciones de acción:</strong> Los usuarios pueden agregar productos al carrito, guardarlos en la lista de deseos o directamente realizar la compra.</p> 
                    </div>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faHeart} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Lista de deseados</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong>  Guardar para más tarde:</strong> Los usuarios pueden agregar productos a su lista de deseos para acceder a ellos fácilmente en otra ocasión, sin necesidad de buscarlos nuevamente.</p> 
                    </div>
                </div>
                <img className="tablaProyectos__img" src='../src/images/deseados.png'></img>
            </div>
        </div>
    </>)
}

export const TablaProyectos =({proyectoActivo,setProyectoActivo}:{proyectoActivo:string,setProyectoActivo: React.Dispatch<React.SetStateAction<string>>})=>{

    return(
        <>
            <div id="tablaProyectos">
                <div onClick={()=>setProyectoActivo("servidor")}    className={`tablaProyectos__titulo ${proyectoActivo==="servidor"?"tablaProyectos__proyectoActivo":""}`}>API Rest</div>
                <div onClick={()=>setProyectoActivo("mobile")}      className={`tablaProyectos__titulo ${proyectoActivo==="mobile"?"tablaProyectos__proyectoActivo":""}`}>App Mobile</div>
                <div onClick={()=>setProyectoActivo("escritorio")}  className={`tablaProyectos__titulo ${proyectoActivo==="escritorio"?"tablaProyectos__proyectoActivo":""}`}>App Escritorio</div>
                <div onClick={()=>setProyectoActivo("pedidos")}     className={`tablaProyectos__titulo ${proyectoActivo==="pedidos"?"tablaProyectos__proyectoActivo":""}`}>App Mobile Pedidos</div>
                <div onClick={()=>setProyectoActivo("pagina")}      className={`tablaProyectos__titulo ${proyectoActivo==="pagina"?"tablaProyectos__proyectoActivo":""}`}>Pagina WEB</div>

                <div className="tablaProyectos__proyectos">
                    {proyectoActivo==="servidor" && <Servidor />}
                    {proyectoActivo==="mobile" && <Mobile />}
                    {proyectoActivo==="escritorio" && <Escritorio />}
                    {proyectoActivo==="pedidos" && <Pedidos />}
                    {proyectoActivo==="pagina" && <Pagina />}
                </div>
            </div>

        </>
    )
}

import { faBars, faBasketShopping, faBolt, faCaretUp, faCartShopping, faChartSimple, faCircleInfo, faGear, faGem, faHeart, faHouse, faPencil, faPlus, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tecnologia } from "../components/tsx/tecnologia"

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



export const Servidor =()=>{

    return (
    <>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Api Rest</h2>
                <p>La API REST es el núcleo del entorno Registener, funcionando como el backend central que interconecta todas las aplicaciones del sistema. Su principal objetivo es gestionar los datos y operaciones de los usuarios, productos, ventas y registros de arqueos de caja, proporcionando una infraestructura segura y escalable para los distintos clientes que la utilizan.</p>
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
export const Mobile=({setURLImagen}:{setURLImagen: React.Dispatch<React.SetStateAction<string>>})=>{
    return(<>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h5 className="tablaProyectos__contenedor__contenido-h5">En desarrollo</h5>
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Registener - App Mobile</h2>
                <p>La aplicación móvil de Registener está diseñada para brindar a los administradores una gestión rápida y eficiente de los productos y registros desde cualquier lugar. Con una interfaz intuitiva y organizada, permite modificar productos, actualizar imágenes y administrar variantes fácilmente.</p>
            </div>
            <div className="tablaProyectos__tecnologias">
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
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/iniciarSesion.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/iniciarSesion.jpg'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/iniciarSesion2.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/iniciarSesion2.jpg'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/productos2.jpg")} className="tablaProyectos__img" src="/images/AplicacionMovil/productos2.jpg"></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/productosFiltro.jpg")} className="tablaProyectos__img" src="/images/AplicacionMovil/productosFiltro.jpg"></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/productos.jpg")} className="tablaProyectos__img" src="/images/AplicacionMovil/productos.jpg"></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Sección de productos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Vista general:</strong> Muestra una lista de productos, su precio y visibilidad</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Búsqueda :</strong> Permite buscar productos por nombre para una rápida localización.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Agrupacion :</strong> Se pueden agrupar los productos por categorias o desagruparlos en sus variantes</p> 
                    </div>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faPencil} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Modificación de productos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Edición de información:</strong> Posibilidad de modificar el nombre, precio, categoría y descripción del producto.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Gestión de imágenes:</strong> Permite eliminar, cambiar o añadir imagenes desde la galeria.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Control de variantes y especificaciones:</strong> Se pueden agregar, modificar o eliminar especificaciones o variantes con sus respectivas características.</p> 
                    </div>
                </div>
                <div>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/modificar.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/modificar.jpg'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/modificar2.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/modificar2.jpg'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/modificar3.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/modificar3.jpg'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/modificar4.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/modificar4.jpg'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/productos2.jpg")} className="tablaProyectos__img" src="/images/AplicacionMovil/productos2.jpg"></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/productosFiltro.jpg")} className="tablaProyectos__img" src="/images/AplicacionMovil/productosFiltro.jpg"></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/productos.jpg")} className="tablaProyectos__img" src="/images/AplicacionMovil/productos.jpg"></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faChartSimple} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Estadisticas</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Vista general:</strong> Muestra los ultimos registros de ventas con su estado, hora y monto</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Grafico :</strong> Muestra un grafico que representa el monto de ventas por dias de la semana actual y la anterior.</p> 
                    </div>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Registros</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Vista general:</strong> Muestra los ultimos 50 registros, con sus detalles.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Filtros:</strong> Permite filtrar por fecha y estado de los registros.</p> 
                    </div>
                </div>
                <div>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/registros.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/registros.jpg'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionMovil/registrosFiltros.jpg")} className="tablaProyectos__img" src='/images/AplicacionMovil/registrosFiltros.jpg'></img>
                </div>
            </div>
        </div>
    </>)
}
export const Escritorio=({setURLImagen}:{setURLImagen: React.Dispatch<React.SetStateAction<string>>})=>{
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
                src="https://www.youtube.com/embed/wBeoJPw4Qzk"
                title="Video de YouTube" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>   
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
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/inicioSesion.png")} src='/images/AplicacionEscritorio/inicioSesion.png'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/inicioSesion2.png")} src='/images/AplicacionEscritorio/inicioSesion2.png'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/modificar.png")} src='/images/AplicacionEscritorio/modificar.png'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/modificar2.png")} src='/images/AplicacionEscritorio/modificar2.png'></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faPencil} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Productos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Crear productos: </strong> Creacion de nuevos productos, eliminacion y visibilidad.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Edición de información: </strong> Posibilidad de modificar el nombre, precio, categoría, marca, modelo y descripción del producto.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Gestión de imágenes: </strong> Permite añadir, eliminar o cambiar las imágenes del producto.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Control de variantes y especificaciones:</strong> Se pueden agregar, modificar o eliminar especificaciones o variantes con sus respectivas características.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Filtros:</strong> Permite filtrar los productos por categorias.</p> 
                    </div>
                </div>
                
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faCartShopping} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Venta al publico</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Vista general :</strong> Muestra una lista de productos junto a la sus caracteristicas, precio y stock.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Agrupacion :</strong> Los productos se pueden mostrar agrupandos por categorías o subdividirlos por sus variantes.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Búsqueda :</strong> Permite buscar productos por nombre o por SKU.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Favoritos :</strong> Permite agregar productos a una lista de productos favoritos.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Resumen :</strong>  Muestra el resumen de productos seleccionados de la venta actual</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Metodos de pago y modificaciones :</strong>  Permite seleccionar metodos de pago y modificaciones personalizadas</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Finalizar :</strong>  Permite agregar el monto con el que paga el cliente para calcular el vuelto, ademas de la posibilidad de colocar una observacion sobre la compra</p> 
                    </div>
                </div>
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/productos.png")} src='/images/AplicacionEscritorio/productos.png'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/productos2.png")} src='/images/AplicacionEscritorio/productos2.png'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/caja.png")} src='/images/AplicacionEscritorio/caja.png'></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Arqueo de caja</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Funcionamiento :</strong> Se colocan los precios iniciales y se da en iniciar caja, al final de turno se colocan los montos observador y se compara con los precios esperados, luego se cierra la caja.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Movimientos de caja :</strong> En caso de incongruencias entre montos observados y los esperados es posible acceder a los movimientos de caja para observar las ventas correspondientes al turno, con la posibilidad de realizar modificaciones o anulaciones.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Cambios de caja :</strong> Permite agregar cambios manuales al flujo de dinero de determinado medio de pago.</p> 
                    </div>
                </div>
                
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Registro de arqueos</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Funcionalidad :</strong> Muestra todos los registros de los arqueos realizados, lo cuales no son modificables.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Filtros :</strong> Los registros se pueden filtrar por fecha y cantidad.</p> 
                    </div>
                </div>
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/registroCaja.png")} src='/images/AplicacionEscritorio/registroCaja.png'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/registroVenta.png")} src='/images/AplicacionEscritorio/registroVenta.png'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionEscritorio/registroVenta2.png")} src='/images/AplicacionEscritorio/registroVenta2.png'></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Registro de ventas</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Funcionamiento :</strong> Se muestran las ultimas ventas realizadas con las caracteristicas mas relevantes.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Filtros :</strong> Los registros se pueden filtrar por fecha, cantidad y estado. Ademas se pueden hacer busquedas particulares a partir del id o realizar busquedas en la observaciones.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Funciones :</strong> Los registros son modificables o anulables segun se requiera.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Ventana de modificacion :</strong> Se puede cambiar la informacion general del registro selecionado. Todos los cambios de registran dentro del mismo registro para mas transparencia.</p> 
                    </div>
                </div>
                
            </div>
            
        </div>
    </>)
}
export const Empleados=({setURLImagen}:{setURLImagen: React.Dispatch<React.SetStateAction<string>>})=>{
    return(<>
        <div className="tablaProyectos__contenedor">
            <div className="tablaProyectos__contenedor-div">
                <h4 className="tablaProyectos__contenedor__contenido-h4">Descripcion</h4>
                <h2 className="tablaProyectos__contenedor__contenido-h2">Aplicación de escritorio - Control de empleados</h2>
                <p>Aplicacion offline pensada con el objetivo de un correcto control de las entradas y salidas de los empleados, registrando los movimientos de los mismos y verificando su puntualidad y horas adeudadas.</p>
            </div>
            <div className="tablaProyectos__tecnologias">
                <Tecnologia index={3}/>
                <Tecnologia index={5}/>
                <Tecnologia index={7}/>
            </div>  
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faHouse} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2"> Inicio</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Entrada y salida:</strong> Los usuarios presionan en la entrada o salida correspondiente.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Balance de horas:</strong> Es el resultado entre las horas trabajadas y las esperadas del usuario.</p>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Puntualidad:</strong> Se calcula la puntualidad del usuario en relacion a la hora de entrada esperada y la observada.</p>
                    </div>
                </div>
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEmpleados/inicio.png")} src='/images/AplicacionEmpleados/inicio.png'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEmpleados/crear.png")} src='/images/AplicacionEmpleados/crear.png'></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faPlus} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Creacion</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Crear usuario: </strong> Se puede crear un usuario simplemente introduciendo un nombre.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Controles: </strong> Se pueden activar o desactivar los controles de horas trabajas o de puntualidad segun se requiera.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Turnos: </strong> Se deben introducir los turnos de trabajo del usuario para un correcto funcionamiento de los controles de horas y puntualidad.</p> 
                    </div>
                </div>
                
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faPencil} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Modificar</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Modificaciones :</strong> Se puede modificar el nombre, los controles y los turnos del usuario.</p> 
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Eliminar :</strong> Se puede eliminar de forma definitiva un usuario.</p> 
                    </div>
                </div>
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEmpleados/modificar.png")} src='/images/AplicacionEmpleados/modificar.png'></img>
                    <img onClick={()=>setURLImagen("/images/AplicacionEmpleados/modificar2.png")} src='/images/AplicacionEmpleados/modificar2.png'></img>
                </div>
            </div>
            <div className="tablaProyectos__captura">
                <div className="tablaProyectos__capturasEscritorio">
                    <img onClick={()=>setURLImagen("/images/AplicacionEmpleados/registros.png")} src='/images/AplicacionEmpleados/registros.png'></img>
                </div>
                <div className="tablaProyectos__contenedor-div">
                    <div className="tablaProyectos__contenedor__contenido-tituloIcono">
                        <FontAwesomeIcon icon={faBars} className="tablaProyectos__contenedor__contenido-icon"/>
                        <h2 className="tablaProyectos__contenedor__contenido-h2">Registros</h2>
                    </div>
                    <div className="tablaProyectos__contenedor__parrafo">
                        <FontAwesomeIcon className="tablaProyectos__contenedor__parrafo-icon2" icon={faCaretUp} />   
                        <p><strong> Ver registros :</strong> Se pueden ver todos los registros historicos de los usuarios.</p> 
                    </div>
                </div>
                
            </div>

            
        </div>
    </>)
}
export const Pagina=({setURLImagen}:{setURLImagen: React.Dispatch<React.SetStateAction<string>>})=>{
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
                <img onClick={()=>setURLImagen("/images/inicioPagina.png")} className="tablaProyectos__img" src='/images/inicioPagina.png'></img>
            </div>
            <div className="tablaProyectos__captura">
                <img onClick={()=>setURLImagen("/images/inicioSesion.png")} className="tablaProyectos__img" src='/images/inicioSesion.png'></img>
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
                <img onClick={()=>setURLImagen("/images/catalogo.png")} className="tablaProyectos__img" src='/images/catalogo.png'></img>
            </div>
            <div className="tablaProyectos__captura">
                <img onClick={()=>setURLImagen("/images/producto.png")} className="tablaProyectos__img" src='/images/producto.png'></img>
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
                <img onClick={()=>setURLImagen("/images/deseados.png")} className="tablaProyectos__img" src='/images/deseados.png'></img>
            </div>
        </div>
    </>)
}

export const TablaProyectos =({proyectoActivo,setProyectoActivo}:{proyectoActivo:string,setProyectoActivo: React.Dispatch<React.SetStateAction<string>>})=>{
    const [URLImagen, setURLImagen ] = React.useState("")

    return(
        <>
            <div id="tablaProyectos">
                <div onClick={()=>setProyectoActivo("servidor")}    className={`tablaProyectos__titulo ${proyectoActivo==="servidor"?"tablaProyectos__proyectoActivo":""}`}>API Rest</div>
                <div onClick={()=>setProyectoActivo("mobile")}      className={`tablaProyectos__titulo ${proyectoActivo==="mobile"?"tablaProyectos__proyectoActivo":""}`}>App Mobile</div>
                <div onClick={()=>setProyectoActivo("escritorio")}  className={`tablaProyectos__titulo ${proyectoActivo==="escritorio"?"tablaProyectos__proyectoActivo":""}`}>Registener</div>
                <div onClick={()=>setProyectoActivo("empleados")}     className={`tablaProyectos__titulo ${proyectoActivo==="empleados"?"tablaProyectos__proyectoActivo":""}`}>Control de empleados</div>
                <div onClick={()=>setProyectoActivo("pagina")}      className={`tablaProyectos__titulo ${proyectoActivo==="pagina"?"tablaProyectos__proyectoActivo":""}`}>Pagina WEB</div>

                <div className="tablaProyectos__proyectos">
                    {proyectoActivo==="servidor" && <Servidor />}
                    {proyectoActivo==="mobile" && <Mobile setURLImagen={setURLImagen}/>}
                    {proyectoActivo==="escritorio" && <Escritorio setURLImagen={setURLImagen}/>}
                    {proyectoActivo==="empleados" && <Empleados setURLImagen={setURLImagen}/>}
                    {proyectoActivo==="pagina" && <Pagina setURLImagen={setURLImagen}/>}
                </div>
            </div>
            <Modal
            open={URLImagen===""?false:true}
            onClose={()=>setURLImagen("")}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="tablaProyectos__modal"
            >
            <Box>
                <img id="tablaProyectos__modalImagen" src={URLImagen}></img>
            </Box>
            </Modal>
        </>
    )
}
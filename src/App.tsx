import { useState } from 'react'
import '../src/css/index.css'
import { Proyectos } from './pages/proyectos'
import { Sobremi } from './pages/sobremi'
import { Contacto } from './pages/contacto'






export const App =()=>{

  const [seccionActual,setSeccionActual] = useState<string>("")

  return (
    <>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
      </head>
      <div id="encabezado" >
        <a onClick={()=>setSeccionActual("inicio")} className={`botonGeneral ${(seccionActual==="inicio")? "botonGeneral-activo":""}`} href="#inicio">Inicio</a>
        <a onClick={()=>setSeccionActual("proyectos")} className={`botonGeneral ${(seccionActual==="proyectos")? "botonGeneral-activo":""}`} href='#proyectos'>Proyectos</a>
        <a onClick={()=>setSeccionActual("sobremi")} className={`botonGeneral ${(seccionActual==="sobremi")? "botonGeneral-activo":""}`} href="#sobremi">Sobre Mi</a>
        <a onClick={()=>setSeccionActual("contacto")} className={`botonGeneral2 ${(seccionActual==="contacto")? "botonGeneral-activo":""}`} href="#contacto">Contacto</a>

      </div>
      <div id="inicio" onMouseEnter={()=>setSeccionActual("inicio")}>
        <img id="inicio__img" src="/assets/fotoperfil.jpg"></img>
        <div id="inicio__titulo">
          <h4>¡Hola!</h4>
          <h2 id="inicio__h2">Mi nombre es Diego N. Iocco</h2>
          <h4 id="inicio__h3">Soy desarollador Fullstack Jr y Estudiante de Ingeniería en Sistemas de la informacion</h4>
          <a href='#proyectos' className='botonGeneral3'>Mis proyectos</a>
        </div>
      </div>
      <div id="proyectos" onMouseEnter={()=>setSeccionActual("proyectos")}>
        <Proyectos/>
      </div>
      <div id="sobremi" onMouseEnter={()=>setSeccionActual("sobremi")}>
        <Sobremi/>
      </div>
      <div id="contacto" onMouseEnter={()=>setSeccionActual("contacto")}>
        <Contacto/>
      </div>

    </>
  )
}



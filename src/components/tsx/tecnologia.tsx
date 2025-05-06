import "../css/tecnologia.css"
import Chip from '@mui/material/Chip';

export const Tecnologia =({index,soloTexto=false}:{index:number,soloTexto?:boolean})=>{
    
    const nombres = [
        "HTML",
        "CSS",
        "JS",
        "TS",
        "NODE",
        "REACT",
        "MONGODB",
        "SQL",
        "C++",
      ];
      
      const colorTecnologia = [
        { backgroundColor: "#a33b1a", color: "#fff", margin: "2px", fontWeight: 'bold' }, // HTML
        { backgroundColor: "#0f4c81", color: "#fff", margin: "2px", fontWeight: 'bold' }, // CSS
        { backgroundColor: "#bfae2e", color: "#000", margin: "2px", fontWeight: 'bold' }, // JS
        { backgroundColor: "#245487", color: "#fff", margin: "2px", fontWeight: 'bold' }, // TS
        { backgroundColor: "#236723", color: "#fff", margin: "2px", fontWeight: 'bold' }, // Node
        { backgroundColor: "#439bb1", color: "#000", margin: "2px", fontWeight: 'bold' }, // React
        { backgroundColor: "#357c2b", color: "#fff", margin: "2px", fontWeight: 'bold' }, // MongoDB
        { backgroundColor: "#003A6F", color: "#fff", margin: "2px", fontWeight: 'bold' }, // SQL (placeholder)
        { backgroundColor: "#00599C", color: "#fff", margin: "2px", fontWeight: 'bold' }, // C++ (placeholder)
      ];
      
      const imagenes = [
        "assets/htmlIcono.png",
        "assets/cssIcono.png",
        "assets/jsIcono.png",
        "assets/tsicono.png",
        "assets/nodeIcono.png",
        "assets/reactIcono.png",
        "assets/mongodbIcono.webp",
        "assets/sqlIcono.png",  
        "assets/c++Icono.png",
      ];

    return(
        <>
            {soloTexto?
                <Chip label={nombres[index]} sx={colorTecnologia[index]} />:
                <img className="iconoTecnologia" src={imagenes[index]}></img>
            }
        </>
    )
}
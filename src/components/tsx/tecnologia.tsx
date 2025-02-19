import "../css/tecnologia.css"

export const Tecnologia =({index}:{index:number})=>{

    const imagenes=[
        "src/assets/htmlIcono.png",
        "src/assets/cssIcono.png",
        "src/assets/jsIcono.png",
        "src/assets/tsicono.png",
        "src/assets/nodeIcono.png",
        "src/assets/reactIcono.png",
        "src/assets/mongodbIcono.webp",
    ]

    return(
        <>
            <img className="iconoTecnologia" src={imagenes[index]}></img>
        </>
    )
}
import "../css/tecnologia.css"

export const Tecnologia =({index}:{index:number})=>{

    const imagenes=[
        "assets/htmlIcono.png",
        "assets/cssIcono.png",
        "assets/jsIcono.png",
        "assets/tsicono.png",
        "assets/nodeIcono.png",
        "assets/reactIcono.png",
        "assets/mongodbIcono.webp",
    ]

    return(
        <>
            <img className="iconoTecnologia" src={imagenes[index]}></img>
        </>
    )
}
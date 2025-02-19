import "../css/tecnologia.css"

export const Tecnologia =({index}:{index:number})=>{

    const imagenes=[
        "public/assets/htmlIcono.png",
        "public/assets/cssIcono.png",
        "public/assets/jsIcono.png",
        "public/assets/tsicono.png",
        "public/assets/nodeIcono.png",
        "public/assets/reactIcono.png",
        "public/assets/mongodbIcono.webp",
    ]

    return(
        <>
            <img className="iconoTecnologia" src={imagenes[index]}></img>
        </>
    )
}
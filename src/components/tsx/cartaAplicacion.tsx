

import CardMedia from '@mui/material/CardMedia';


import Typography from '@mui/material/Typography';

import { Tecnologia } from './tecnologia';
import { Chip } from '@mui/material';
import "../css/cartaAplicacion.css"

export default function CartaAplicacion({titulo,URLImagen,tecnologias,enDesarrollo=false,descripcion}:{titulo:string,URLImagen?:string,tecnologias?:number[],enDesarrollo?:boolean,descripcion:string}) {




  const ChipEstilo = {
      color: "#ffeb3b",
      borderColor: "#ffeb3b",
      borderWidth: "3px",
      margin: "5px",
    }
  
  
  return (
    <div className='cartaAplicacion'>
      <div className="cartaAplicacion__encabezado">
        <Typography variant="h6" component="div">
          {titulo}
        </Typography>
        {enDesarrollo &&<Chip label="En desarrollo" sx={ChipEstilo} variant="outlined" />}
      </div>
      {URLImagen &&
        <CardMedia
          component="img"
          height="194"
          image={URLImagen}
        />
      }
      <div className="cartaAplicacion__descripcion">
        <Typography variant="body2">
          {descripcion}
        </Typography>
        <div>
          {tecnologias && tecnologias.map((TecnologiaIndex)=><Tecnologia index={TecnologiaIndex} soloTexto={true} />)}
        </div>
      </div>
    </div>
  );
}

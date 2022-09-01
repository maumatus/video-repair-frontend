import '../App.css';
import React,{useState,useEffect} from "react";
import Slider from './RangeSlider';

//Creamos componente funcional para mostrar interface
export default function Atadenoise() {

  const [value,onChange]=useState(0);


  return (
      <form action="/atadenoise" method="post" class="form">
          <section class="celdas">
            <fieldset>  
              <ul>
              <section id="titulo">    
                  <h2 class="nombre">Atadenoise</h2>
                  <img src="/public/img/robot.svg" id="logo" alt="logo"></img>
              </section>  
              <li>
                  <input type="text" name="entrada" id="dir-inicio"  placeholder="directorio a copiar" value="/Volumes/Disco_02/import_AppEscalarImagenes"/>
              </li>
              <li>
                  <input type="text" name="salida" id="dir-renombrado" required pattern="[a-zA-z0-9-/]+" placeholder="directorio y nombre envío" value="/Volumes/Disco_02/export_AppEscalarImagenes"/>
              </li>
              <li>
                <div className="slider-parent">
                  <p className='titulo-control'>Límite A plano 1</p>
                  < Slider />
                </div>
              </li>
              <li>
                <p className='titulo-control'>Límite B plano 1</p>
                < Slider />
              </li>
              <li>
                <p className='titulo-control'>Límite A plano 2</p>
                < Slider />
              </li>
              <li>
                <p className='titulo-control'>Límite B plano 2:</p>
                < Slider />
              </li>
              <li>
                <p className='titulo-control'>Límite A plano 3</p>
                < Slider />
              </li>
              <li>
                <p className='titulo-control'>Límite B plano 3</p>
                < Slider />
              </li>
              <li>
                <p className='titulo-control'>Cantidad planos promedio</p>
                <input type="range" name="ancho-px" id="ancho-pixeles" class="slider" placeholder="ancho salida en px"/>
              </li>
              <li>
                <li>
                  <select name="formato" id="formato-img">
                    <option value="jpg">jpg</option>
                    <option value="png">png</option>
                    <option value="webp">webP</option>
                    <option value="tiff">tiff</option>
                  </select>
                </li>
              </li>
              <p class="cont-btn"> <button type="submit" id="btn-procesar">P</button></p>
              </ul>
            </fieldset>         
          </section>
      </form>
    )
};







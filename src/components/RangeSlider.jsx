import React,{useState,useEffect} from "react";
import "../index.css";

export default function Slider(min, max) {
  const [value,onChange]=useState(1);

  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value)}px`;
    }
  })

  return (
    <div className="slider-parent">
      <input type="range" step="0.01" min="0" max="3" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <div className="buble"> 
      {value}
      </div>
    </div>
  );
}
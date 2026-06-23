import React from "react";
import { GlassesItem } from "./GlassesItem";

export const GlassesList = (props) => {
    const {dataGlasses, handleSelectedGlass} = props
  return (
    <div className="max-w-[25rem] grid grid-cols-3 gap-2">
      {dataGlasses.map((glass) => (
        <GlassesItem key = {glass.id} item = {glass} handleSelectedGlass={handleSelectedGlass}/>
      ))}
    </div>
  );
};

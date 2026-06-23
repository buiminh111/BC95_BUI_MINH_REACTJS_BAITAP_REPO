import React, { useState } from "react";
import dataGlasses from "./data.json";
import { GlassesList } from "./GlassesList";

export const BTGlasses = () => {
  const [selectedGlass, setSelectedGlass] = useState(dataGlasses[0]);

  //handle SelectedGlass Func
  const handleSelectedGlass = (newItem) => {
    setSelectedGlass(newItem);
  };

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-bold mb-5">Bai Tap Glasses</h1>

      <div className="flex justify-center">
        {/*Model selection */}
        <div className="relative flex items-end justify-around w-[500px] my-5">
          {/* Model */}
          <img src="glassesImage/model.jpg" alt="model" className="w-full" />
          {/* Overlay Glasses */}
          <img
            src={selectedGlass.url}
            alt={selectedGlass.name}
            className="absolute top-35 left-27 w-70 opacity-[0.5]"
          />
          <div className="absolute w-full px-14 h-[50%] flex flex-col justify-end items-center mx-16 bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="font-bold text-white">{selectedGlass.name}</h2>
            <h1 className="my-2 text-5xl text-white">${selectedGlass.price}</h1>
            <p className="my-5 text-gray-100 text-xs w-[20rem] text-center">{selectedGlass.desc}</p>
          </div>
        </div>

        {/* glasses List */}
        <GlassesList
          dataGlasses={dataGlasses}
          handleSelectedGlass={handleSelectedGlass}
        />
      </div>
    </div>
  );
};

import React from "react";

export const GlassesItem = (props) => {
    const {item, handleSelectedGlass} = props


  return (
    <div key={item.id} className="flex flex-col justify-center gap-6 p-4 border rounded-md">
      <img src={item.url} alt={item.name} />
      <button onClick={() => {
        handleSelectedGlass(item)
      }}
      className="px-3 py-2 bg-black text-white rounded-md">
        select 
      </button>
    </div>
  );
};

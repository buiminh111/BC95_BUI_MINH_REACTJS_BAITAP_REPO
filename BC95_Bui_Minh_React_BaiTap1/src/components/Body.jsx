import React from "react";
import Card from "./Card";

const Content = () => {
  // Render multiple card => .map() for UI rendering

  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
  ];

  // Luu y: Dựa vào data de render số lượng card tương ứng

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          { /* code JS dc de trong dau {} */ }
          {
              cards.map((card) => (
                <Card key={card.id} title={card.title} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Content;

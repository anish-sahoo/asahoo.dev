import React from "react";
import { Button } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

const BadgeCards = ({ cards }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {cards.map((card) => (
        <div className="flex flex-row flex-wrap">
          <Button
            key={card.name}
            className="m-2 flex flex-row items-center bg-gray-800 h-10"
            onClick={() => console.log(card.name)}
          >
            <img
              src={card.image}
              alt={card.name}
              className="object-scale-down h-10 w-auto py-2 px-1"
            />
            <p className="font-mono text-10 text-white py-2 px-1">
              {card.name}
            </p>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BadgeCards;

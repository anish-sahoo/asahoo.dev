import React from "react";
import { Button } from "@heroui/react";

const BadgeCards = ({ cards }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {cards.map((card) => (
        <div className="flex flex-row flex-wrap" key={card.name}>
          <Button className="m-2 flex flex-row items-center bg-gray-800 h-8">
            {/* {card.image !== "" ? (
              <img
                src={card.image}
                alt={card.name}
                className="object-scale-down h-9 w-auto py-2 px-1"
              />
            ) : (
              <div></div>
            )} */}
            <p className="font-mono text-12 text-white py-2 px-1">
              {card.name}
            </p>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BadgeCards;

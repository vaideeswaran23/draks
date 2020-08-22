import React from "react";
import Tile from "./Tile";
import { Droppable } from "react-beautiful-dnd";

const Board = (props) => {
  console.log("this.props", props);
  return (
    <div className="tile is-ancestor">
      <Droppable droppableId={props.boards.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.tiles.map((tile, index) => (
              <Tile key={tile.id} tile={tile} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;

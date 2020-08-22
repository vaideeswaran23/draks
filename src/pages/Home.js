import React, { useState } from "react";
import Board from "../components/Board";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./../data/data";

function Home(props) {
  const [isSearch, setIsSearch] = useState(false);
  const [data, setData] = useState(initialData);

  const handleSearch = () => {
    setIsSearch(true);
    setTimeout(() => setIsSearch(false), 1000);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const board = data.boards[source.droppableId];
    const newTileIds = Array.from(board.tileIds);
    newTileIds.splice(source.index, 1);
    newTileIds.splice(destination.index, 0, draggableId);

    const newBoard = {
      ...board,
      tileIds: newTileIds,
    };

    const newState = {
      ...data,
      boards: {
        ...data.boards,
        [newBoard.id]: newBoard,
      },
    };
    setData(newState);
  };

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">DRAKS</h1>
            <div
              className={`control is-medium ${isSearch ? "is-loading" : ""}`}>
              <input
                className="input is-medium"
                type="text"
                placeholder="Search your draks"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container is-fullhd mt-5">
        <DragDropContext onDragEnd={onDragEnd}>
          <Board
            boards={data.boards["board-1"]}
            tiles={data.boards["board-1"].tileIds.map(
              (boardId) => data.tiles[boardId]
            )}
          />
        </DragDropContext>
      </div>
    </>
  );
}

export default Home;

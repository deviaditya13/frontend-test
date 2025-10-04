import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardTask from '../../molecules/card/CardTask';
import './BoardColumn.css';

const BoardColumn = ({ columnId, title, tasks }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="cards"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardTask task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default BoardColumn;

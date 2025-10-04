import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import BoardColumn from './BoardColumn';
import './LayoutBoard.css';
import dataTask from './dataTask.json'

const initialData = dataTask 

const KanbanBoard = () => {
    const [columns, setColumns] = useState(initialData.columns);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId) {
            const column = columns[source.droppableId];
            const newTasks = Array.from(column.tasks);
            const [moved] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, moved);

            setColumns({
                ...columns,
                [source.droppableId]: { ...column, tasks: newTasks },
            });
        } else {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceTasks = Array.from(sourceColumn.tasks);
            const destTasks = Array.from(destColumn.tasks);
            const [moved] = sourceTasks.splice(source.index, 1);
            destTasks.splice(destination.index, 0, moved);

            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
                [destination.droppableId]: { ...destColumn, tasks: destTasks },
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">
                {Object.entries(columns).map(([id, column]) => (
                    <BoardColumn
                        key={id}
                        columnId={id}
                        title={column.title}
                        tasks={column.tasks}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;

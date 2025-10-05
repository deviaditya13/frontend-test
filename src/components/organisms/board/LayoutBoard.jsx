import React, { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import BoardColumn from './BoardColumn';
import '../../../assets/css/LayoutBoard.css';
import dataTask from './dataTask.json';

const LayoutBoard = () => {
    const initialData = localStorage.getItem('dataCard') 
        ? JSON.parse(localStorage.getItem('dataCard'))
        : dataTask;

    const [columns, setColumns] = useState(initialData.columns);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const newColumns = { ...columns };
        if (source.droppableId === destination.droppableId) {
            const column = newColumns[source.droppableId];
            const newTasks = Array.from(column.tasks);
            const [moved] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, moved);
            column.tasks = newTasks;
        } else {
            const sourceColumn = newColumns[source.droppableId];
            const destColumn = newColumns[destination.droppableId];
            const sourceTasks = Array.from(sourceColumn.tasks);
            const destTasks = Array.from(destColumn.tasks);
            const [moved] = sourceTasks.splice(source.index, 1);
            destTasks.splice(destination.index, 0, moved);
            sourceColumn.tasks = sourceTasks;
            destColumn.tasks = destTasks;
        }

        setColumns(newColumns);
        localStorage.setItem('dataCard', JSON.stringify({ columns: newColumns }));
    };

    const updateColumnTasks = (columnId, tasks) => {
        const newColumns = { ...columns, [columnId]: { ...columns[columnId], tasks } };
        setColumns(newColumns);
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
                        updateColumnTasks={updateColumnTasks}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};

export default LayoutBoard;

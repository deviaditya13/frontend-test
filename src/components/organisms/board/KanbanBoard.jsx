import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import BoardColumn from './BoardColumn';
import './KanbanBoard.css';

const initialData = {
    columns: {
        todo: {
        title: 'To Do',
        tasks: [
            { id: 'task-1', title: 'Design UI', users: ['Alice', 'Bob'] },
            { id: 'task-2', title: 'Setup Project', users: ['Charlie'] },
        ],
        },
        'in-progress': {
        title: 'In Progress',
        tasks: [
            { id: 'task-3', title: 'Develop Login', users: ['Alice'] },
        ],
        },
        done: {
        title: 'Done',
        tasks: [
            { id: 'task-4', title: 'Project Plan', users: ['Bob'] },
        ],
        },
    },
};

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

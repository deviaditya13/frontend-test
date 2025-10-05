import { Droppable, Draggable } from '@hello-pangea/dnd';
import CardTask from '../../molecules/card/CardTask';
import './BoardColumn.css';
import Button from '../../atoms/button/button';
import { add, ellipsisVertical, chevronExpand } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import PopupAddCard from '../../molecules/popup/PopupAddCard';
import { useState, useEffect } from 'react';

const BoardColumn = ({ columnId, title, tasks, updateColumnTasks }) => {
    const [openPopup, setOpenPopup] = useState(false);
    const [columnTasks, setColumnTasks] = useState(tasks);

    useEffect(() => {
        setColumnTasks(tasks);
    }, [tasks]);

    const handleAddCard = () => setOpenPopup(true);

    const handleSaveCard = () => {
        const newCard = {
            id: Date.now().toString(),
            title: '',
            type: 'feature',
            description: 'Ini card task baru',
            users: [{ name: "User D", avatar: "https://i.pravatar.cc/40?img=4" }],
            image: 'https://t3.ftcdn.net/jpg/03/99/32/60/360_F_399326002_eSSjVeK5yxITN0fe8cWJ842HX1DNqj0K.jpg',
            value: 0.0,
            date: "2 Aug"
        };

        const updatedTasks = [...columnTasks, newCard];
        setColumnTasks(updatedTasks);

        const data = localStorage.getItem('dataCard');
        const parsedData = data ? JSON.parse(data) : { columns: {} };
        if (!parsedData.columns[columnId]) {
            parsedData.columns[columnId] = { title: title, tasks: [] };
        }
        parsedData.columns[columnId].tasks = [...parsedData.columns[columnId].tasks, newCard];
        localStorage.setItem('dataCard', JSON.stringify(parsedData));

        if(updateColumnTasks) updateColumnTasks(columnId, updatedTasks);

        setOpenPopup(false);
    };

    return (
        <div className="column">
            <PopupAddCard 
                openPopup={openPopup} 
                onClose={() => setOpenPopup(false)} 
                onSave={handleSaveCard} 
            />

            <div className='flex items-center h-[55px] px-4'>
                <div className="text-2xl font-bold mr-4">{title}</div>
                <Button
                    icon={add} 
                    iconColor='#6784ba'
                    iconSize='24px'
                    style={{
                        '--background': '#e0ecf9',
                        '--color': '#000',
                        height: '32px',
                        width: '32px',
                        '--border-radius': '8px',
                        marginRight: '12px'
                    }}
                    onClick={handleAddCard}
                />
                <IonIcon icon={ellipsisVertical} className='text-xl cursor-pointer'/>
                <IonIcon icon={chevronExpand} className='ml-auto cursor-pointer'/>
            </div>

            <Droppable droppableId={columnId}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="cards"
                    >
                        {columnTasks.map((task, index) => (
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

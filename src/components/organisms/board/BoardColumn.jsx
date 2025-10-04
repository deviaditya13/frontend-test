import { Droppable, Draggable } from '@hello-pangea/dnd';
import CardTask from '../../molecules/card/CardTask';
import './BoardColumn.css';
import Button from '../../atoms/button/button';
import { add, ellipsisVertical, chevronExpand} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';


const BoardColumn = ({ columnId, title, tasks }) => {
return (
    <div className="column">
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
)};

export default BoardColumn;

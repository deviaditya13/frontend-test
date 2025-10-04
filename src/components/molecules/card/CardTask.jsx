import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import Avatar from '../../atoms/user/Avatar';
import './CardTask.css';

const CardTask = ({ task }) => {
    return (
        <IonCard className="card-task">
            <IonCardHeader>
                <IonCardTitle>{task.title}</IonCardTitle>
                <div className="card-users">
                    {task.users.map((user, idx) => (
                        <Avatar key={idx} name={user} />
                    ))}
                </div>
            </IonCardHeader>
        </IonCard>
    );
};

export default CardTask;

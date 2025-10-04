import { IonCard, IonCardContent, IonImg, IonRow } from '@ionic/react';
import AvatarGroup from '../../molecules/user/AvatarGroup';
import './CardTask.css';
import Chip from '../../atoms/chip/Chip';
import ProgressBar from '../../atoms/loader/ProgressBar';

const CardTask = ({ task }) => {
    return (
    <IonCard className="card-task">
        <IonCardContent key={task.id}>
            {task.image && (
                <IonImg src={task.image} alt="Ini Gambar" style={{ marginBottom: '24px' }} />
            )}
            <Chip label={task.type} style={{ marginBottom: "16px" }}/>
            <ProgressBar value={task.value} style={{ marginBottom: "16px" }}/>
            <p className='!text-[16px]'>{task.description}</p>
            <IonRow style={{ marginTop: "16px" }}>
                <Chip label={task.date} isDate/>
                <AvatarGroup users={task.users} style={{ marginLeft: 'auto' }} />
            </IonRow>
        </IonCardContent>
    </IonCard>
    );
};

export default CardTask;

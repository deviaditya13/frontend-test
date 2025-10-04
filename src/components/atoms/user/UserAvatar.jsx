import { IonAvatar } from '@ionic/react';
import './UserAvatar.css';

const users = [
    { id: 1, name: 'User 1', avatar: 'https://i.pravatar.cc/40?img=1' },
    { id: 2, name: 'User 2', avatar: 'https://i.pravatar.cc/40?img=2' },
    { id: 3, name: 'User 3', avatar: 'https://i.pravatar.cc/40?img=3' },
];

const UserAvatars = () => {
    return (
        <div className="avatar-group">
        {users.map((user) => (
            <IonAvatar key={user.id} className="avatar">
            <img src={user.avatar} alt={user.name} title={user.name} />
            </IonAvatar>
        ))}
        </div>
    );
};

export default UserAvatars;

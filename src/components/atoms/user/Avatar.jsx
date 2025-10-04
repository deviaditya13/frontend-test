import { IonAvatar } from '@ionic/react';

const Avatar = ({ name, avatar, size = 36 }) => {
  return (
    <IonAvatar style={{ width: size, height: size }}>
      <img src={avatar} alt={name} />
    </IonAvatar>
  );
};

export default Avatar;

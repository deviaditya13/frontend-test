import Avatar from '../../atoms/user/Avatar';
import '../../../assets/css/AvatarGroup.css';

const UserAvatars = ({ users, style = {} }) => {
  const maxVisible = 5; 
  const extraCount = users.length - maxVisible;

  return (
    <div className="avatar-group" style={style}>
      {users.slice(0, maxVisible).map((user, idx) => (
        <Avatar key={user.id} name={user.name} avatar={user.avatar} />
      ))}

      {extraCount > 0 && (
        <div className="avatar-extra">+{extraCount}</div>
      )}
    </div>
  );
};

export default UserAvatars;

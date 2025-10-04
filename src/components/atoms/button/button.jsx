import { IonButton, IonIcon, IonSpinner } from '@ionic/react';
import PropTypes from 'prop-types';

const Button = ({
    label = '',
    onClick = () => console.log('Clicked'),
    disabled = false,
    loading = false,
    icon = null,
}) => {
  return (
    <IonButton
        onClick={onClick}
        disabled={disabled}
        style={{ 
            '--background': '#ebf2f4',
            '--color': '#000',
        }}
    >
        {icon && <IonIcon slot="start" icon={icon} style={{ marginRight: '4px' }} />}
        <p>{label}</p>
    </IonButton>
  );
};

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    icon: PropTypes.object,
};

export default Button;

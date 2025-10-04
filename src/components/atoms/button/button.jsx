import { IonButton, IonIcon, IonSpinner } from '@ionic/react';
import PropTypes from 'prop-types';

const Button = ({
    label = '',
    onClick = () => console.log('Klik'),
    disabled = false,
    icon = null,
    style = {},
    iconColor = '#000',
    iconSize = '16px', 
}) => {
    const defaultStyle = { 
        '--background': '#ebf2f4',
        '--color': '#000',
        '--box-shadow': 'none'
    }

    return (
        <IonButton
            onClick={onClick}
            disabled={disabled}
            style={{
                ...defaultStyle,
                ...style
            }}
        >
            {icon && (
                <IonIcon slot="start" icon={icon} style={{ fontSize: iconSize, color: iconColor }}  />
            )}
            <p className={icon && label ? 'ml-2' : ''}>{label}</p>

        </IonButton>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    icon: PropTypes.object,
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    style: PropTypes.object,
};

export default Button;

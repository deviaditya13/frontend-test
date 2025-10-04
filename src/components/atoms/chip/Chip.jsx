import { IonChip, IonLabel, IonIcon } from "@ionic/react";
import { timeOutline } from "ionicons/icons";

const Chip = ({ label, isDate = false, style = {} }) => { 
    let chipStyle = {};

    switch (label?.toLowerCase()) { 
        case 'feature':
            chipStyle = { 
                '--background': '#D4E1F4',
                '--color': '#6780BD',
                border: '1px solid #6780BD',
                minHeight: 'auto',
                width: 'min-content',
            };
            break;
        case 'issue':
            chipStyle = {
                '--background': '#EBDFCC',
                '--color': '#9E8874',
                border: '1px solid #9E8874',
                minHeight: 'auto',
                width: 'min-content'
            };
            break;
        case 'bug':
            chipStyle = {
                '--background': '#F1CDD5',
                '--color': '#B67080',
                border: '1px solid #B67080',
                minHeight: 'auto',
                maxWidth: 'min-content'
            };
            break;
        case 'undefined':
            chipStyle = {
                '--background': 'transparent',
                '--color': '#000',
                border: '1px solid #cfd5d8ff',
                minHeight: 'auto',
                maxWidth: 'min-content'
            };
            break;
        default:
            chipStyle = {
                '--background': '#ADD1E0',
                '--color': '#74A2AD',
                border: '1px solid #74A2AD',
                minHeight: 'auto',
                minWidth: 'min-content'
            };
    }
    const mergedStyle = { ...chipStyle, ...style };

    return ( 
        <IonChip style={mergedStyle}>
            {isDate ? ( 
                <IonLabel className="flex px-2 items-center">
                    <IonIcon icon={timeOutline} />
                    <p className="text-sm opacity-70 !ml-1">{label}</p>
                </IonLabel>
            ) : ( 
                <IonLabel className="px-4">{label}</IonLabel>
            )}
        </IonChip>
    );
};

export default Chip;

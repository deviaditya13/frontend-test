import { IonSelect, IonSelectOption, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import { useState } from 'react';

const Dropdown = () => {
    const [value, setValue] = useState('');

    return (
        <IonItem style={{
            '--background': '#ebf2f4',
            '--border-radius': '0.5rem',
            '--padding-start': '1rem',
            '--padding-end': '1rem',
            '--color': '#000',
            '--placeholder-color': '#888',
            height: '2.5rem', 
        }}>
            <IonIcon slot="start" icon={personOutline} />
            <IonLabel>Pilih User</IonLabel>

            <IonSelect
                value={value}
                placeholder="Pilih..."
                onIonChange={e => setValue(e.detail.value)}
            >
                <IonSelectOption value="user1">User 1</IonSelectOption>
                <IonSelectOption value="user2">User 2</IonSelectOption>
                <IonSelectOption value="user3">User 3</IonSelectOption>
            </IonSelect>
        </IonItem>
    );
};

export default Dropdown;

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonLabel, IonCol, IonGrid, IonIcon } from '@ionic/react';
import Button from '../../atoms/button/button';
import SearchBar from '../../atoms/input/searchBar';
import { personAddOutline } from 'ionicons/icons';
import UserAvatars from '../../atoms/user/UserAvatar';
import { lockClosed, chevronDown, filter, globeOutline } from 'ionicons/icons';

const Header = () =>  { 

    return ( 
        <IonPage>
            <IonContent>
                <IonToolbar className='h-18 border-b py-2'>
                    <IonGrid>
                        <IonRow class='justify-between'>
                            <div className='flex items-center'>
                                <div>
                                    <IonIcon icon={lockClosed} />
                                    <span className="text-lg px-2">Adhivasindo</span>
                                    <IonIcon icon={chevronDown} />
                                </div>
                                <div className="px-4">
                                    <UserAvatars />
                                </div>
                                <Button label="Invite" icon={personAddOutline} />
                            </div>
                            <div className="flex items-center justify-end gap-4 text-lg">
                                <div className='flex items-center mr-4 cursor-pointer'>
                                    <IonIcon icon={filter} />
                                    <span className="ml-2">Filter</span>
                                </div>
                                <div className='flex items-center mr-2 cursor-pointer'>
                                    <IonIcon icon={globeOutline} />
                                    <span className="ml-1">Export/Import</span>
                                </div>
                                <SearchBar />
                            </div>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonContent>
        </IonPage>
    )
}

export default Header
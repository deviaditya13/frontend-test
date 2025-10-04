import { IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import Button from '../../atoms/button/button';
import SearchBar from '../../atoms/input/searchBar';
import AvatarGroup from '../../molecules/user/AvatarGroup';
import { lockClosed, chevronDown, filter, globeOutline, personAddOutline } from 'ionicons/icons';

const Header = () => { 
    const users = [
        { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/40?img=1' },
        { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=2' },
        { id: 3, name: 'Alice', avatar: 'https://i.pravatar.cc/40?img=1' },
        { id: 4, name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=2' },
        { id: 5, name: 'Alice', avatar: 'https://i.pravatar.cc/40?img=1' },
        { id: 6, name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=2' },
        { id: 7, name: 'Alice', avatar: 'https://i.pravatar.cc/40?img=1' },
        { id: 8, name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=2' },
    ];

    return ( 
        <IonToolbar className='h-18 border-b py-2 px-8'>
            <IonGrid>
                <IonRow className='justify-between items-center'>
                    <IonCol size="auto">
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <IonIcon icon={lockClosed} />
                                <p className="text-lg">Adhivasindo</p>
                                <IonIcon icon={chevronDown} />
                            </div>
                            <AvatarGroup users={users} />
                            <Button 
                                label="Invite" 
                                icon={personAddOutline} 
                                onClick={() => console.log('Klik')} 
                                style={{ '--background': '#e0ecf9', '--color': '#000', '--border-radius': '8px', height: '36px', padding: '0 12px' }}
                            />
                        </div>
                    </IonCol>

                    <IonCol size="auto">
                        <div className="flex text-[18px] items-center gap-8">
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <IonIcon icon={filter} />
                                <span>Filter</span>
                            </div>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <IonIcon icon={globeOutline} />
                                <span>Export/Import</span>
                            </div>
                            <SearchBar />
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
}

export default Header;

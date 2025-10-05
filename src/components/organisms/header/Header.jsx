import { useState } from "react";
import { createPortal } from "react-dom";
import { IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import Button from '../../atoms/button/button';
import SearchBar from '../../atoms/input/SearchBar';
import AvatarGroup from '../../molecules/user/AvatarGroup';
import { lockClosed, chevronDown, filter, globeOutline, personAddOutline } from 'ionicons/icons';

const Header = () => { 
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

    const users = [
        { id: 1, name: 'User A', avatar: 'https://i.pravatar.cc/40?img=1' },
        { id: 2, name: 'User B', avatar: 'https://i.pravatar.cc/40?img=2' },
        { id: 3, name: 'User C', avatar: 'https://i.pravatar.cc/40?img=3' },
        { id: 4, name: 'User D', avatar: 'https://i.pravatar.cc/40?img=4' },
        { id: 5, name: 'User E', avatar: 'https://i.pravatar.cc/40?img=5' },
        { id: 6, name: 'User F', avatar: 'https://i.pravatar.cc/40?img=6' },
        { id: 7, name: 'User G', avatar: 'https://i.pravatar.cc/40?img=7' },
        { id: 8, name: 'User H', avatar: 'https://i.pravatar.cc/40?img=8' },
    ];

    const handleDropdownClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setDropdownPos({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        setDropdownOpen(!dropdownOpen);
    };

    return ( 
        <IonToolbar className='h-18 border-b py-2 px-8'>
        <IonGrid>
            <IonRow className='justify-between items-center'>
            <IonCol size="auto">
                <div className='flex items-center gap-4'>
                <div 
                    className='flex items-center gap-1 cursor-pointer'
                    onClick={handleDropdownClick}
                >
                    <IonIcon icon={lockClosed} />
                    <p className="text-lg">Adhivasindo</p>
                    <IonIcon icon={chevronDown} />
                </div>

                {dropdownOpen && createPortal(
                    <div 
                    className="bg-white border rounded shadow-lg z-50"
                    style={{
                        position: "absolute",
                        top: dropdownPos.top,
                        left: dropdownPos.left,
                        width: 160,
                    }}
                    >
                    <ul className="text-black">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                    </ul>
                    </div>,
                    document.body
                )}

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

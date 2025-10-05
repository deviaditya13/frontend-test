import React from 'react';
import { IonModal, IonIcon } from '@ionic/react';
import Dropdown from '../../atoms/input/Dropdown';
import Input from '../../atoms/input/Input';
import AvatarGroup from '../user/AvatarGroup';
import { close } from 'ionicons/icons';
import Button from '../../atoms/button/button';

const PopupAddCard = ({ openPopup, onClose, onSave }) => {
    const handleSelect = () => {};

    const users = [
        { id: 1, name: 'User A', avatar: 'https://i.pravatar.cc/40?img=1' },
        { id: 2, name: 'User B', avatar: 'https://i.pravatar.cc/40?img=2' },
        { id: 3, name: 'User C', avatar: 'https://i.pravatar.cc/40?img=3' },
        { id: 4, name: 'User D', avatar: 'https://i.pravatar.cc/40?img=4' },
    ];

    return (
        <IonModal isOpen={openPopup} onDidDismiss={onClose}>
            <div className='px-8 py-4'>
                <div className='flex justify-between mb-4'>
                    <div className='bg-[#EBF2F5] py-1 px-2'>✔ Mark Complete</div>
                    <div className='bg-[#EBF2F5] px-2 cursor-pointer' onClick={onClose}>
                        <IonIcon icon={close} className='mt-2'/>
                    </div>
                </div>
                <p className="!text-2xl font-bold">CRUD Employee</p>
                <div className='flex w-full gap-4 mb-4'>
                    <div className='flex flex-col gap-4 w-full'>
                        <div>
                            <p className='text-[16px] font-semibold mb-1'>Assignee</p>
                            <AvatarGroup users={users} />
                        </div>
                        <div>
                            <Dropdown
                                label="Board"
                                options={['Board A', 'Board B', 'Board C']}
                                onSelect={handleSelect}
                            />
                        </div>
                        <div>
                            <Dropdown
                                label="Column"
                                options={['Column 1', 'Column 2', 'Column 3']}
                                onSelect={handleSelect}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div>
                            <Dropdown
                                label="Due Date"
                                options={['Today', 'Tomorrow', 'Next Week']}
                                onSelect={handleSelect}
                            />
                        </div>
                        <div>
                            <Dropdown
                                label="To Do"
                                options={['Task 1', 'Task 2', 'Task 3']}
                                onSelect={handleSelect}
                            />
                        </div>
                        <div>
                            <Dropdown
                                label="Priority"
                                options={['High', 'Medium', 'Low']}
                                onSelect={handleSelect}
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <Input label="Deskripsi" type='text' />
                </div>
                <div>
                    <Input label="Attachments" type='file' />
                </div>
                <div className='flex justify-end mt-4 gap-4'>
                    <Button label="Discard" onClick={onClose} />
                    <Button 
                        label="Save" 
                        style={{ '--background': "#4E7EE4", "--font": "bold" }} 
                        onClick={() => {
                            if(onSave) onSave();
                        }}
                    />
                </div>
            </div>
        </IonModal>
    );
};

export default PopupAddCard;

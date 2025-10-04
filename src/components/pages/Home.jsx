import { IonPage, IonContent } from '@ionic/react';
import Header from '../organisms/header/Header';
import LayoutBoard from '../organisms/board/LayoutBoard';

export default function Home() {
  return (
    <IonPage style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <IonContent className="ion-padding">
        <LayoutBoard />
      </IonContent>
    </IonPage>
  );
}

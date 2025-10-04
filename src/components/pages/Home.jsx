import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import Header from '../organisms/header/Header';
import KanbanBoard from '../organisms/board/KanbanBoard';

export default function Home() {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Halaman Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <Header />
      <IonContent className="ion-padding">
        <h2>Selamat datang di Ionic React 🚀</h2>
        <IonContent>
          <KanbanBoard />
        </IonContent>
      </IonContent>
    </IonPage>
  );
}

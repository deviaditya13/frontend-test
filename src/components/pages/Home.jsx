import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

export default function Home() {
  console.log("Hohohoho")
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Halaman Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
        <h2>Selamat datang di Ionic React 🚀</h2>
      </IonContent>
    </IonPage>
  );
}

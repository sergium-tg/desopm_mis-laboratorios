import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const List: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('logged');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista Protegida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Contenido secreto solo para usuarios autenticados</h2>
        <IonButton expand="block" color="danger" onClick={handleLogout}>Cerrar Sesión</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default List;
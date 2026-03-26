import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
       <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>
    </div>
  );
};

export default ExploreContainer;

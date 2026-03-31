import { useState } from 'react';
import { IonItem, IonInput, IonButton } from '@ionic/react';

interface Props {
  onAddTask: (taskName: string) => void;
}

const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAdd = () => {
    if (taskName.trim() === '') return;
    onAddTask(taskName.trim());
    setTaskName('');
  };

  return (
    <IonItem>
      <IonInput
        placeholder="Escribe una nueva tarea"
        value={taskName}
        onIonChange={(e) => setTaskName(e.detail.value!)}
      />
      <IonButton onClick={handleAdd}>Agregar</IonButton>
    </IonItem>
  );
};

export default AddTask;
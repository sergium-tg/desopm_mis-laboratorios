import { IonItem, IonLabel, IonButton } from '@ionic/react';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <IonItem>
      <IonLabel style={{textDecoration: task.completed ? 'line-through' : 'none'}}> {task.name} </IonLabel>
      <IonButton color={task.completed ? 'warning' : 'success'} onClick={() => onToggle(task.id)} >
        {task.completed ? 'Desmarcar' : 'Completar'}
      </IonButton>
      <IonButton color="danger" onClick={() => onDelete(task.id)}> Eliminar </IonButton>
    </IonItem>
  );
};

export default TaskItem;
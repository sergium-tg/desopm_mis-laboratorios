import { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { Task } from '../components/TaskItem';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    const newTask: Task = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks( tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task ) );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestor de Tareas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        {tasks.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            No hay tareas. ¡Agrega una!
          </p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TaskManager;
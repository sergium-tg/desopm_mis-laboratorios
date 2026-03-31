import ArrayDisplay from "./components/ArrayDisplay";
import ArrayState from "./components/ArrayState";
import CleanupExample from "./components/CleanupExample";
import Counter from "./components/Counter";
import EventsExample from "./components/EventsExample";
import HelloWorld from "./components/HelloWorld";
import PrintMessage from "./components/PrintMessage";
//import EjemploDependencia from "./components/EjemploDependencia"
import type { Contact } from "./types/Contact";

const initialContacts: Contact[] = [
  { id: 1, name: 'Ana García', phone: '123-456-789' },
  { id: 2, name: 'Luis Pérez', phone: '987-654-321' },
];

function App(){

    return(<>
      <HelloWorld />
      <p>..................................................</p>
      <PrintMessage message="Solo un mensajito de pruebas" />
      <p>..................................................</p>
      <Counter />
      <p>..................................................</p>
      <ArrayDisplay />
      <p>..................................................</p>
      <ArrayState />
      <p>..................................................</p>
      <EventsExample />
      <p>..................................................</p>
      <CleanupExample />
      <p>..................................................</p>

    </>)
}

export default App;
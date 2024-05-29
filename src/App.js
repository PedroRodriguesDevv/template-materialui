import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Drawer from "./pages/Drawer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Drawer/>

    </div>
  );
}

export default App; 

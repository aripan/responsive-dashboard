import "./App.css";
import MainAreaScreen from "./components/MainArea/MainAreaScreen/MainAreaScreen";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <section className="side-bar">
        <SideBar />
      </section>
      <section className="main-area">
        <MainAreaScreen />
      </section>
    </div>
  );
}

export default App;

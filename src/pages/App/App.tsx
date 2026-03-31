import "./App.css";
import Settings from "../../components/Settings";

function App() {
  return (
    <section className="app night-theme">
      <div className="app__header ">
        <div className="about">
          <Settings />
        </div>
      </div>
    </section>
  );
}

export default App;

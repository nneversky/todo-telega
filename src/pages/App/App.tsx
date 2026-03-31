import "./App.css";
import Settings from "../../components/Settings";

function App() {
  return (
    <section className="app night-theme">
      <div className="app__header">
        <p className="p">
          <Settings />
        </p>
      </div>
    </section>
  );
}

export default App;

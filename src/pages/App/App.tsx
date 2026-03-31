import "./App.css";
import Settings from "../../components/Settings";
import Profile from "../../components/Profile";

function App() {
  return (
    <section className="app night-theme">
      <div className="app__header ">
        <div className="about">
          <Settings />
          <Profile />
        </div>
      </div>
    </section>
  );
}

export default App;

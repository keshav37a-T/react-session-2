import "./App.css";
import Composition from "./components/Composition";
import LiftingStateUp from "./components/LiftingStateUp";
import UserContext from "./components/Context/UserContext";
import LoginHelper from "./components/Context/LoginHelper";
import UserConsumer from "./components/Context/UserConsumer";

function App() {
  return (
    <UserContext>
      <div>
        <UserConsumer />
        <div>Topics</div>
        <Composition />
        <LiftingStateUp />
        <LoginHelper />
      </div>
    </UserContext>
  );
}

export default App;

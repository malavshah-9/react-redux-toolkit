import React from "react";
import CounterScreen from "./screens/Counter/Counter.screen";
import "./app.scss";

function App() {
  return (
    <div className="is-flex hero is-primary is-fullheight">
      <CounterScreen />
    </div>
  );
}

export default App;

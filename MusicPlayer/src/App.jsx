import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import PlayerSettings from "./Components/PlayerSettings/PlayerSettings";
import PlayerTable from "./Components/PlayerTable/PlayerTable";

function App() {
  return (
    <main>
      <div className="headerContainerApp">
        <Header></Header>
      </div>
      <div className="playerContainerApp">
        <PlayerSettings></PlayerSettings>
        <PlayerTable></PlayerTable>
      </div>
    </main>
  );
}

export default App;

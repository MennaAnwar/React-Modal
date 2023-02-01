import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/modal";

function App() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="App">
      <button className="clickMe" onClick={() => Toggle()}>
        Click Me !
      </button>
      <Modal show={modal} title="My Modal" close={Toggle}>
        This is Modal content
      </Modal>
    </div>
  );
}

export default App;

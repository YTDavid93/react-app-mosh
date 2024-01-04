
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// the function name follows pascal casing
function App() {

  const [showVisible, setShowVisibility] = useState(false)
  return (
    <div>
      { showVisible && <Alert onClose={() => setShowVisibility(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => setShowVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;


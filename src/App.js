import { useState } from "react";
import StoreFront from "./components/StoreFront";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) {
    return (
      <>
        <h1>Admin Panel</h1>
        <StoreFront />
        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Please login</h2>
        <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
          Login
        </button>
      </>
    );
  }
}

export default App;

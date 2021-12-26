import Body from "./components/body";
import Header from "./components/header";
import firebaseConfig from "./firebase/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Body />
    </div>
  );
}

export default App;

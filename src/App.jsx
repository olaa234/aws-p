import "./App.css";
import Bio from "./components/Bio";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Múýiwá</title>
      </Helmet>
      <Bio />
    </>
  );
}

export default App;

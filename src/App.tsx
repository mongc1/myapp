import { Route, Routes } from "react-router-dom";
import Rainbow from "./pages/Rainbow";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Layouts from "./pages/Layouts";
import Study from "./pages/Study";

function App( ) {
  return (
    <Routes>
      <Route element={<Layouts />} >
        <Route path="/" element={<Home />} />
        <Route path="/rainbow" element={<Rainbow />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/study" element={<Study />} />
      </Route>
    </Routes>
  )
}


export default App;
import PreReact from "./PreReact";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Project from "./Project";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
   return (
      <HashRouter>
            <Routes>
               <Route path="/" element={<Navigate to="/Labs" />} />
               <Route path="/PreReact/*" element={<PreReact />} />
               <Route path="/Labs/*" element={<Labs />} />
               <Route path="/hello" element={<HelloWorld />} />
               <Route path="/project/*" element={<Project />} />
               <Route path="/kanbas/*" element={<Kanbas />} />
            </Routes>
      </HashRouter>
   );
}
export default App;
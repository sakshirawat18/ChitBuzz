import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";





function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element= {<Home/>} /> */}
      <Route path="/" element= {<Register/>} />
      {/* <Route path="login" element= {<Login/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

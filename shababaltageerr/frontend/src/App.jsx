import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Volunters from "./pages/Volunters";
import Layout from "./componnet/Layout";
import MyEvent from "./pages/MyEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myEvent" element={<MyEvent/>}/>

        <Route path="/events" element={<Layout/>}>
          <Route index element={<Events/>} />
          <Route path=":eventId/Volunters" element={<Volunters/>} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;

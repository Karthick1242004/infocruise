import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route, HashRouter} from 'react-router-dom'
import Main from "./components/Pages/Main";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import ProductPage from "./components/Pages/ProductPage";
function App() {
  return <div>
      <HashRouter>
          <Routes>
                  <Route path='training-shop' index element={<Main/>} />
                  <Route path="/Main" element={<Main/> }/>
                  <Route path="/Men" element={<Men/>}/>
                  <Route path="/Women" element={<Women/>} />
              <Route path="/ProductPage" element={<ProductPage/>} />
          </Routes>
      </HashRouter>,
  </div>
}

export default App;

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Layout from "./layouts/Layout";
import Component from "./useEffectTest/Component";

const App = () => {
  return (
    
    <div>
      {/* <Layout/> */}
      {/* <Routes>
        <Route
          path="/login"
          element={
            <Layout>
            
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
      </Routes> */}


      {/* learning useEffect */}
        <Component/>

    </div>
  );
};

export default App;

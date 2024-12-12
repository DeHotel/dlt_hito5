import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes/routes";
import { Routes, Route } from "react-router-dom";

function App() {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      {/* <Navbar carrito={carrito} total={total} />
      <main className="flex-grow"> */}
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      {/* <Home
      // carrito={carrito}
      // setCarrito={setCarrito}
      // setTotal={setTotal}
      // total={total}
      /> */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

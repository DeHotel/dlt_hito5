import React from "react";
import { formatNumber } from "../utils/formatNumber";
import "../assets/css/styleNavbar.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = ({ carrito, total }) => {
  // const total = 25000;
  // console.log("----- Inicio Navbar  --------------");
  // carrito.length > 0 && console.log(carrito);
  // console.log(total);
  // console.log("----- Fin Navbar  --------------");
  const token = true;
  return (
    <div className="navbar flex justify-between pl-10 pr-10">
      <div>
        Pizzería Mamma Mía!{"     "}
        <Link
          to="/"
          className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4"
        >
          🍕 Home
        </Link>
        {/* {token ? (
          <> */}
        <Link
          to="/profile"
          className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4"
        >
          🔓 Profile
        </Link>
        <Link className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4">
          🔓 Logout
        </Link>
        {/* </>
        ) : (
          <> */}
        <Link
          to="/login"
          className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4"
        >
          🔐 Login
        </Link>
        <Link
          to="/register"
          className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4"
        >
          🔐 Register
        </Link>
        {/* </>
        )} */}
      </div>
      <div>
        <Link
          to="/cart"
          className="ml-5 font-light rounded border-white border-solid border pt-1 pb-1 pl-4 pr-4"
        >
          🛒 Total: <b>${formatNumber(25000)}</b>
        </Link>
        {/* <Button className="boton-precio">
          {carrito.length === 1
            ? "1 Producto"
            : carrito.length > 0 && `${carrito.length} Productos`}{" "}
          🛒 Total: <b>${formatNumber(total)}</b>
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;

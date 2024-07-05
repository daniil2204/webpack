"use client";
import { useState } from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import room from "@/assets/room.jpg";
import paper from "@/assets/paper.png";
import BannerBurger from "@/assets/BannerBurgerTest.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  const changeCOunt = (operation: "+" | "-") => {
    if (operation === "+") {
      setCount((count) => count + 1);
    } else {
      count === 0 || count < 0 ? null : setCount((count) => count - 1);
    }
  };

  return (
    <>
      <div style={{ color: "green", fontSize: 100 }}>Hello</div>
      <p>World</p>
      <p>PLATFORM={__PLATFORM__}</p>
      <div>
        <img style={{ width: 500, height: 450 }} alt="room" src={room} />
      </div>
      <div>
        <img style={{ width: 500, height: 450 }} alt="paper" src={paper} />
      </div>
      <div>
        <BannerBurger fill={"red"} />
      </div>
      <button className={styles.btn} onClick={() => changeCOunt("+")}>
        <span>+</span>
      </button>
      <p className={styles.value}>{count}</p>
      <button className={styles.btn} onClick={() => changeCOunt("-")}>
        -
      </button>
      <div>
        <Link to={"/about"}>about</Link>
        <br />
        <Link to={"/shop"}>shop</Link>
      </div>
      <Outlet />
    </>
  );
};

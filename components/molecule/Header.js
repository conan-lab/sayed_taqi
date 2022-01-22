import { styles } from "@/public/js/styles";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Hexagon from "@/public/img/Hexagon";

export default function Header({ active }) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setStarted(true);
  }, []);

  return (
    <>
      <div className="headerContainer">
        <div className="bground">
          <Hexagon />
        </div>
        <div className="gradiant"></div>
        <div className="imgSize">
          <img className="imgSize" src="/img/logo.png" alt="" />
        </div>
      </div>
      <NavBar active={active} />
      <style jsx>{`
        .headerContainer {
          padding: 1rem;
          min-height: 14rem;
          ${started ? "opacity: 1;" : "opacity: 0;"};
          ${styles.flex};
          ${styles.flexBothcenter};
          overflow: hidden;
          -webkit-transition: all 1s 0.5s ease-in-out;
          -o-transition: all 1s 0.5s ease-in-out;
          transition: all 1s 0.5s ease-in-out;
          ${started
            ? "transform: translateY(0);"
            : "transform: translateY(-10rem);"};
          position: relative;
        }
        .gradiant {
          position: absolute;
          min-height: 100%;
          min-width: 100%;
          z-index: -1;
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#ffffff10),
            color-stop(white),
            to(white)
          );
          background: -o-linear-gradient(#ffffff10, #ffffffd1, white);
          background: linear-gradient(#ffffff10, #ffffffd1, white);
        }
        .bground {
          position: absolute;
          z-index: -1;
          opacity: 0.08;
          width: 100%;
        }
        .imgSize {
          padding: 0.2rem;
          padding-top: 1.6rem;
          border-radius: 0.6rem;
          width: clamp(12rem, 40vw, 16rem);
          -webkit-transition: all 0.2s ease-in-out;
          -o-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          ${started
            ? "transform: translateY(0);"
            : "transform: translateY(-20rem);"};
        }
      `}</style>
    </>
  );
}

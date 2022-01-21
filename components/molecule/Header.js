import { styles } from "@/public/js/styles";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Hexagon from "@/public/img/Hexagon";

export default function Header() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setStarted(true);
  }, []);

  return (
    <>
      <div className="headerContainer">
        <div className="imgSize">
          <img className="imgSize" src="/img/logo.png" alt="" />
        </div>
        <div className="bground">
          <Hexagon />
        </div>
      </div>
      <NavBar />
      <style jsx>{`
        .headerContainer {
          padding: 1rem;
          ${started ? "min-height: 16rem;" : "min-height: 0rem;"};
          ${started ? "opacity: 1;" : "opacity: 0;"};
          border-bottom: 5px solid ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexBothcenter};
          overflow: hidden;
          transition: all 1s ease-in-out;
          ${started
            ? "transform: translateY(0);"
            : "transform: translateY(-10rem)"};
        }
        .bground {
          position: absolute;
          z-index: -1;
          opacity: 0.08;
          width: 100%;
        }
        .imgSize {
          background: white;
          padding: 0.2rem;
          border-radius: 0.6rem;
          width: clamp(12rem, 40vw, 16rem);
        }
      `}</style>
    </>
  );
}

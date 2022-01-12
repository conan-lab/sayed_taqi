import { styles } from "@/public/js/styles";
import { useEffect, useState } from "react";

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
      </div>
      <style jsx>{`
        .headerContainer {
          padding: 1rem;
          ${styles.flex};
          ${styles.flexBothcenter};
          overflow: hidden;
          transition: all 1s ease-in-out;
          ${started
            ? "transform: translateY(0)"
            : "transform: translateY(-10rem)"};
        }
        .imgSize {
          width: clamp(12rem, 40vw, 16rem);
        }
      `}</style>
    </>
  );
}

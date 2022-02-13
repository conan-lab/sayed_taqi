import { styles } from "@/public/js/styles";
import Link from "next/link";
export default function NavBar({ active }) {
  return (
    <>
      <div className="NavBar">
        <Link href="/">
          <div className={`NavItem ${active === "home" && "active"}`}>
            الصفحة الرئيسية
          </div>
        </Link>
        <Link href="/about">
          <div className={`NavItem ${active === "about" && "active"}`}>
            عن المؤلف
          </div>
        </Link>
        <Link href="/contact">
          <div className={`NavItem ${active === "contact" && "active"}`}>
            اتصل بنا
          </div>
        </Link>
      </div>
      <style jsx>{`
        .NavBar {
          border-bottom: 1px solid gray;
          border-top: 1px solid gray;
          ${styles.flex};
          ${styles.flexBothcenter};
          border-top: 5px solid ${styles.primaryColor};
          gap: 2rem;
          height: 3.8rem;
          font-size: clamp(1.2rem, 5vw, 1.6rem);
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          color: gray;
        }
        .NavItem:hover {
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          font-size: clamp(1.4rem, 5vw, 1.8rem);
          color: black;
        }
        .active {
          color: ${styles.primaryColor};
        }
      `}</style>
    </>
  );
}

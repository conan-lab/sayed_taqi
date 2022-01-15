import { styles } from "@/public/js/styles";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <div className="NavBar">
        <Link href="/">
          <div className="NavItem">الصفحة الرئيسية</div>
        </Link>
        <Link href="/about">
          <div className="NavItem">عن المؤلف</div>
        </Link>
        <Link href="/contact">
          <div className="NavItem">اتصل بنا</div>
        </Link>
      </div>
      <style jsx>{`
        .NavBar {
          border: solid gray;
          border-width: 1px 0px;
          ${styles.flex};
          ${styles.flexBothcenter};
          gap: 1rem;
          font-size: 1.1rem;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        .NavItem:hover {
          transition: all 0.3s ease-in-out;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}

import Header from "@/components/molecule/Header";
import { styles } from "@/public/js/styles";

export default function About() {
  return (
    <>
      <Header />
      <div className="contactContainer">
        <div className="line"></div>
        <h1>اتصل بنا</h1>
      </div>
      <style jsx>{`
        .line {
          border-top: 3px solid ${styles.primaryColor};
          width: 6rem;
          padding: 0.5rem;
        }
        .contactContainer {
          padding: 2rem 1.6rem;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}
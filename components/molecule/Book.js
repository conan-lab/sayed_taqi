import { styles } from "@/public/js/styles";
import List from "../atom/List";
import { asrar } from "@/public/js/data";

export default function Book() {
  return (
    <>
      <div className="bookPageContainer">
        <div className="bookParts">
          عدد الأجزاء <span>{asrar.length}</span>
        </div>
        <List />
      </div>
      <style jsx>{`
        .bookPageContainer {
          padding: 1rem 0rem;
          ${styles.flex};
          ${styles.flexColumn};
          ${styles.flexAligncenter};
        }
        .bookParts {
          padding: 2rem;
        }
      `}</style>
    </>
  );
}

import { parts } from "@/public/js/data";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { styles } from "@/public/js/styles";

export default function List({ bookLink, bookName }) {
  return (
    <>
      <div className="listContainer">
        {parts
          .filter((part) => part?.book === bookLink)
          .map((book, i) => (
            <div key={i} className="cardContainer">
              <div>
                <div>
                  <span>الجزء {book.part} : </span>
                  {book.name}
                </div>
                <div className="bookName">{bookName}</div>
              </div>
              <a href={book?.url || ""}>
                <div className="iconbtn">
                  <span className="icon">
                    <AiOutlineCloudDownload />{" "}
                  </span>
                  <span> حمل الکتاب</span>
                </div>
              </a>
            </div>
          ))}
      </div>
      <style jsx>{`
        .listContainer {
          direction: rtl;
          ${styles.flex};
          ${styles.flexColumn};
          ${styles.flexAligncenter};
          gap: 1rem;
        }
        .cardContainer {
          background: white;
          width: clamp(16rem, 80vw, 25rem);
          border: 1px solid gray;
          padding: 1rem;
          border-radius: 0.3rem;
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          font-size: 1.2rem;
          gap: 0.6rem;
          border-left: 3px solid ${styles.primaryColor};
        }
        .cardContainer:hover {
          ${styles.boxshadow}
        }
        .bookName {
          color: gray;
          font-size: 0.9rem;
        }
        .iconbtn {
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 0.2rem;
          font-size: 0.9rem;
          background: ${styles.primaryColor};
          color: white;
          border-radius: 0.2rem;
          padding: 0.3rem 0.5rem;
        }
        .iconbtn:hover {
          ${styles.boxshadow}
        }
        .icon {
          font-size: 1rem;
          cursor: pointer;
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          border-radius: 0.2rem;
          padding: 0.3rem;
        }
      `}</style>
    </>
  );
}

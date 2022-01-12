import Link from "next/link";
import { asrar } from "@/public/js/data";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { styles } from "@/public/js/styles";

export default function List() {
  return (
    <>
      <div className="listContainer">
        {asrar.map((book, i) => (
          <div key={i} className="cardContainer">
            <div>
              <div>
                <span>الجزء {book.part} : </span>
                {book.name}
              </div>
              <div className="bookName">كتاب اسرار النفس البشرية</div>
            </div>
            <Link
              href={`http://taqimusawi.com/books/asrar/Asrar_Alnafs_Albashariah%20part_${book.part}.pdf`}
            >
              <div className="icon">
                <AiOutlineCloudDownload />
              </div>
            </Link>
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
          width: 20rem;
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
        .icon {
          font-size: 1.2rem;
          cursor: pointer;
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          border-radius: 0.2rem;
          padding: 0.3rem;
        }
        .icon:hover {
          background: ${styles.primaryColor};
          color: white;
        }
      `}</style>
    </>
  );
}

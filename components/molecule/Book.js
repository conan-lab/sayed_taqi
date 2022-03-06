import { styles } from "@/public/js/styles";
import List from "../atom/List";
import { parts, books } from "@/public/js/data";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Book({ book }) {
  const [bookName, setBookName] = useState("");
  const [partsCount, setPartsCount] = useState(1);
  const [bookUrl, setBookUrl] = useState("");

  useEffect(() => {
    setBookName(books.filter((cbook) => cbook.link === book)[0]?.name);
    setBookUrl(books.filter((cbook) => cbook.link === book)[0]?.url);
    setPartsCount(parts.filter((part) => part.book === book).length || 1);
  }, [book]);

  return (
    <>
      <div className="bookPageContainer">
        <div className="bookContainer">
          <div className="bookTitle">كتاب : {bookName}</div>
          <div className="book">
            <div className="bookImg">
              <img src={`/img/books/${book}.png`} width="100%" alt="" />
            </div>
            <div>{bookName}</div>
          </div>
        </div>
        <div className="bookPartsContainer">
          <div className="bookParts">
            عدد الأجزاء <span>{partsCount}</span>
          </div>
          {partsCount === 1 ? (
            <a href={`${bookUrl}`}>
              <div className="downloadBook">
                <div>حمل الكتاب</div>
                <div className="icon">
                  <AiOutlineCloudDownload />
                </div>
              </div>
            </a>
          ) : (
            <div>
              <List bookLink={book} bookName={bookName} />
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .bookPageContainer {
          padding: 1rem;
          max-width: 60rem;
          ${styles.flex};
          gap: 2rem;
          min-height: 70vh;
          flex-wrap: wrap;
        }
        .bookContainer {
          flex: 1 1;
          ${styles.flex};
          ${styles.flexColumn}
          ${styles.flexAligncenter}
        }
        .bookTitle {
          font-size: 1.6rem;
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .book {
          background: white;
          flex: 0 1;
          border: 1px solid gray;
          border-bottom: 3px solid ${styles.primaryColor};
          border-left: 5px solid ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexBothcenter};
          padding: 0.6rem;
          gap: 1rem;
          height: clamp(11rem, 35vw, 14rem);
          min-height: clamp(11rem, 35vw, 14rem);
          width: clamp(8rem, 30vw, 10rem);
          border-radius: 0 0.6rem 0.6rem 0;
          font-size: clamp(1.2rem, 4vw, 1.6rem);
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }
        .book:hover {
          ${styles.boxshadow}
        }
        .bookImg {
          position: absolute;
          font-size: 0.8rem;
          top: 0;
          width: 100%;
          height: 100%;
          color: gray;
          direction: ltr;
          overflow: hidden;
        }
        .bookPartsContainer {
          flex: 1 1;
          ${styles.flex};
          ${styles.flexColumn}
          ${styles.flexAligncenter}
        }
        .bookParts {
          padding: 2rem;
        }
        .downloadBook {
          background: ${styles.primaryColor};
          width: clamp(10rem, 50vw, 16rem);
          padding: 0.3rem 1rem;
          border-radius: 0.3rem;
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          font-size: 1.2rem;
          gap: 0.6rem;
          color: white;
        }
        .icon {
          font-size: 1.2rem;
          cursor: pointer;
          ${styles.flex};
          ${styles.justifyBetween};
          ${styles.flexAligncenter};
          border-radius: 0.2rem;
          padding: 0.3rem;
          background: ${styles.primaryColor};
          border: 2px solid ${styles.primaryColor};
          color: white;
        }
        .icon:hover {
          color: ${styles.primaryColor};
          background: white;
        }
      `}</style>
    </>
  );
}

import { books } from "@/public/js/data";
import { styles } from "@/public/js/styles";
import Link from "next/link";
import { useState } from "react";

export default function BookShelf() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="shelfContainer">
        {/* <div className="shelfImg">
          <img src="/img/decoration.png" width="100%" alt="" />
        </div> */}
        <div className="inputContainer">
          <input
            className="searchInput"
            value={search}
            placeholder="ابحث عن الكتاب"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="bookShelf">
          {books
            .filter((book) => book.name.includes(search))
            .map((book, i) => (
              <div key={i} className="bookContainer">
                <Link href={"/" + book.link}>
                  <div className="book">
                    <>
                      <div>{book.name}</div>
                      <div className="date">{book.date}</div>
                    </>
                  </div>
                </Link>
                <div className="shelf"></div>
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .shelfContainer {
          padding: 2rem 1rem;
          max-width: 50rem;
          margin: auto;
        }
        .shelfImg {
          width: 80%;
          margin: auto;
          padding: 1rem;
        }
        .inputContainer {
          max-width: 80%;
          margin: auto;
          padding: 2rem 0rem;
        }
        .searchInput {
          min-width: 100%;
          max-width: 100%;
          font-size: 1.2rem;
          border-radius: 0.2rem;
          padding: 0.3rem 1rem;
          border: 1px solid gray;
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
        .shelf {
          width: 100%;
          padding: 0rem 1rem;
        }
        .searchInput:focus {
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          border-right: 12px solid ${styles.primaryColor};
          border-top: 1px solid ${styles.primaryColor};
          border-bottom: 1px solid ${styles.primaryColor};
        }
        .bookShelf {
          display: grid;
          grid-template-columns: repeat(auto-fit, clamp(10rem, 30vw, 14vw));
          justify-content: center;
          gap: 2.6rem 1rem;
          align-self: center;
          padding: 2rem 0rem;
        }
        .shelf {
          background: white;
          height: 1rem;
          padding: 0rem 2rem;
          box-shadow: 0px 6px 6px 2px gray;
          border-radius: 0.2rem;
          border: 1px solid lightgray;
        }
        .bookContainer {
          ${styles.flex};
          ${styles.flexColumn};
          ${styles.flexAligncenter};
        }

        .book {
          background: white;
          flex: 0 1;
          border: 1px solid gray;
          border-bottom: 3px solid ${styles.primaryColor};
          border-left: 5px solid ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexColumn};
          ${styles.flexAlignCenter};
          ${styles.justifyBetween};
          padding: 2rem 1rem;
          gap: 1rem;
          height: clamp(12rem, 35vw, 14rem);
          min-height: clamp(12rem, 35vw, 14rem);
          width: clamp(8rem, 30vw, 10rem);
          border-radius: 0 0.6rem 0.6rem 0;
          font-size: clamp(1.2rem, 4vw, 1.6rem);
          text-align: center;
          cursor: pointer;
          overflow: hidden;
        }
        .book:hover {
          ${styles.boxshadow}
        }
        .date {
          font-size: 0.8rem;
          color: gray;
          direction: ltr;
        }
      `}</style>
    </>
  );
}

import { books } from "@/public/js/data";
import { styles } from "@/public/js/styles";
import Link from "next/link";
import { useState } from "react";

export default function BookShelf() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="shelfContainer">
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
              <Link key={i} href={"/" + book.link}>
                <div className="cardContainer">
                  <>
                    <div>{book.name}</div>
                    <div className="date">{book.date}</div>
                  </>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <style jsx>{`
        .shelfContainer {
          padding: 2rem;
        }
        .inputContainer {
          width: 100%;
        }
        .searchInput {
          min-width: 100%;
          font-size: 1.2rem;
          border-radius: 0.3rem;
          padding: 0.3rem 1rem;
          border: 1px solid gray;
          border-left: 1rem solid ${styles.primaryColor};
        }
        .bookShelf {
          ${styles.flex};
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 2rem 1rem;
          padding: 2rem 0rem;
        }
        .cardContainer {
          flex: 0 1;
          border: 1px solid gray;
          border-bottom: 3px solid ${styles.primaryColor};
          border-left: 5px solid ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexColumn};
          ${styles.flexAlignCenter};
          ${styles.justifyBetween};
          padding: 3rem 1rem;
          gap: 1rem;
          height: 14rem;
          min-width: 10rem;
          width: 10rem;
          border-radius: 0 0.6rem 0.6rem 0;
          font-size: 1.2rem;
          text-align: center;
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

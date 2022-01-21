import Header from "@/components/molecule/Header";
import BookShelf from "@/components/molecule/BookShelf";
import Flower from "@/public/img/Flower";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>مكتبة السيد تقي الموسوي</title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header />
        <BookShelf />
        <div className="flower">
          <Flower />
        </div>
      </div>
      <style jsx>{`
        .flower {
          position: fixed;
          bottom: -6rem;
          left: -2rem;
          z-index: -1;
          opacity: 0.1;
          width: max(25vw, 14rem);
          -ms-scroll-chaining: auto;
          overscroll-behavior: auto;
        }
      `}</style>
    </>
  );
}

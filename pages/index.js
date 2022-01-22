import Header from "@/components/molecule/Header";
import BookShelf from "@/components/molecule/BookShelf";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>مكتبة السيد تقي الموسوي</title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header active={"home"} />
        <BookShelf />
      </div>
    </>
  );
}

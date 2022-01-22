import Book from "@/components/molecule/Book";
import Header from "@/components/molecule/Header";
import { books } from "@/public/js/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { book } = router.query;

  return (
    <>
      <Head>
        <title>{books.filter((cbook) => cbook.link === book)[0]?.name}</title>
      </Head>

      <Header />
      <Book book={book} />
    </>
  );
}

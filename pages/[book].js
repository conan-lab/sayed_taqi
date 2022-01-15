import Book from "@/components/molecule/Book";
import Header from "@/components/molecule/Header";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { book } = router.query;

  return (
    <>
      <Header />
      <Book book={book} />
    </>
  );
}

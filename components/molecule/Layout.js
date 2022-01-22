import Flower from "@/public/img/Flower";

export default function Layout({ children }) {
  return (
    <>
      <>
        {children}
        <div className="flower">
          <Flower />
        </div>
        <div className="copy">Copyright © 2022 مكتبة سيد تقي الموسوي</div>
      </>
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
        .copy {
          text-align: center;
          padding: 1rem;
          direction: ltr;
          color: gray;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          -ms-overflow-style: none;
          scrollbar-width: none;
          direction: rtl;
        }

        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

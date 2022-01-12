export default function Layout({ children }) {
  return (
    <>
      <>{children}</>
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

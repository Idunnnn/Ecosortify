export default function Article({ children }) {
  return (
    <main className="2xl:ml-[430px] 2xl:mr-[380px]  lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20">
      <article className="selection:bg-green-700 selection:text-white text-gray-700">{children}</article>
    </main>
  );
}

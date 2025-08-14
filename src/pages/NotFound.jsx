import useTitle from "@/hooks/useTitle";

const NotFound = () => {
  useTitle("Page not found!");

  return (
    <section className="mt-28 md:mt-40">
      <div className="max-w-screen-sm mx-auto">
        <div className="text-center">
          <h1 className="main-title text-6xl md:text-9xl font-semibold">404</h1>
          <p className="paragraph-text">
            The page you have been looking is not found!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

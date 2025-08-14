import loading from "@/assets/loading.svg";

const Loader = () => {
  return (
    <div className="bg-light-body dark:bg-dark fixed w-full h-screen top-0 left-0">
      <div className="size-full flex-center">
        <img
          className="max-w-48 sm:max-w-60 size-full"
          src={loading}
          alt="loading-icon"
        />
      </div>
    </div>
  );
};

export default Loader;

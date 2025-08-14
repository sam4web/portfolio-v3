import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { useEffect, useState } from "react";
import { Loader } from "@/components";

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  if (loader) return <Loader />;
  return <RouterProvider router={router} />;
};

export default App;

import { Header, Footer } from "@/components";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const BaseLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <main className="size-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BaseLayout;

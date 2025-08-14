import { About, Contact, Hero, Modal, Projects, Skills } from "@/components";
import { ModalProvider, useModal } from "@/context/ModalContext";
import useTitle from "@/hooks/useTitle";
import ScrollAnimation from "react-animate-on-scroll";

const HomeSections = () => {
  const { showModal } = useModal();

  return (
    <section className="h-full">
      {showModal && <Modal />}

      <Hero />

      <ScrollAnimation animateIn="fadeIn">
        <About />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Projects />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Skills />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Contact />
      </ScrollAnimation>
    </section>
  );
};

const Home = () => {
  useTitle("Sam4Web | Sijal Manandhar");

  return (
    <ModalProvider>
      <HomeSections />
    </ModalProvider>
  );
};

export default Home;

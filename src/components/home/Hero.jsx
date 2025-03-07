import { Emoji } from "@/components";
import useStore from "@/store";

const Hero = () => {
  const social = useStore((state) => state.social);

  return (
    <section>
      <div className="wrapper">
        <div className="h-screen">
          <div className="h-full flex items-center">
            <div className="space-y-7 lg:space-y-8 sm:max-w-xl lg:max-w-screen-md">
              <h1 className="main-title">
                I&#8217;m Sijal Manandhar, a developer who loves to innovate.{" "}
                <Emoji symbol="👋🏻" label="wave" />
              </h1>

              <div className="space-y-4 md:space-y-6">
                <p className="paragraph-text">
                  I specialize in building practical, data-driven solutions
                  tailored to each project&apos;s needs. From front-end design
                  to back-end development, I ensure seamless functionality,
                  efficiency, and logical execution. My goal is to create web
                  experiences that solve real problems, bring ideas to life, and
                  make a meaningful impact.
                </p>

                <p className="paragraph-text">
                  Beyond coding, I actively contribute to developer communities
                  on{" "}
                  <a href={social.github} target="_blank">
                    Github
                  </a>
                  , share workflow insights, and connect with like-minded
                  professionals on{" "}
                  <a href={social.linkedin} target="_blank">
                    LinkedIn
                  </a>
                  .
                </p>
              </div>

              <button
                className="btn"
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

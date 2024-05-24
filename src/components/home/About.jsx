const About = () => {
  return (
    <section className='section-bg'>
      <div className='wrapper'>
        <div className='section-spacing'>
          <div className='space-y-1.5'>
            <h2 className='section-title'>background</h2>
            <br />
            <p className='section-subtitle'>Get to know me</p>
          </div>

          <div className='space-y-4 sm:max-w-xl lg:max-w-screen-md'>
            <h3 className='text-xl text-responsive'>
              A <b className='font-semibold'>web developer</b> passionate about
              blending technical expertise with design principles to craft
              user-friendly websites for businesses and brands.
            </h3>

            <p className='paragraph-text'>
              As a developer, I love combining my technical skills with design
              principles to build scalable, efficient applications that deliver
              seamless and engaging user experiences. With 2 years of experience
              as a web developer, I have designed and developed numerous
              websites and web applications.
            </p>

            <p className='paragraph-text'>
              I&apos;m actively seeking a dynamic work environment to further
              refine my skills. My passion for continuous learning and
              innovation drives me to adapt quickly and solve problems
              proactively. When I&apos;m not coding, you can find me exploring
              new tech trends, hiking, or working on personal projects. I&apos;m
              eager to contribute my skills and enthusiasm to a forward-thinking
              team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

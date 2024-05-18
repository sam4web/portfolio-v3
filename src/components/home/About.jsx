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
              A <b className='font-semibold'>web developer</b>, specializing in
              creating websites for businesses and brands.
            </h3>

            <p className='about-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quod voluptates praesentium magnam molestias
              eligendi est temporibus. Est maxime labore nobis asperiores
              veritatis aspernatur sapiente ducimus laborum nostrum ratione.
              Mollitia!
            </p>

            <p className='about-text'>
              Lorem ipsum dolor sit amet consectetur <a href='#'>adipisicing</a>{' '}
              elit. Officiis, culpa facere! Magni fuga a nam ex expedita, autem
              ratione cumque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

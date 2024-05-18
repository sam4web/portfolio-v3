const Contact = () => {
  return (
    <section>
      <div className='wrapper'>
        <div className='section-spacing'>
          <div className='space-y-1.5 text-center'>
            <h2 className='section-title section-title-center'>Get In Touch</h2>
            <br />
            <p className='section-subtitle'>Contact</p>
          </div>

          <div className='sm:max-w-xl mx-auto'>
            <p className='about-text text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              eos error maiores qui magnam, itaque laudantium quae consequuntur
              dolores illo sint assumenda aut neque! In sapiente ullam hic
              repellat voluptatem.
            </p>
          </div>

          <a
            href='mailto:sijal.m06@gmail.com'
            target='_blank'
            className='block text-center'
          >
            <button className='btn'>Say Hello</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

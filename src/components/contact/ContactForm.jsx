const ContactForm = () => {
  return (
    <form className=''>
      <div className='bg-slate-200 dark:bg-slate-800 rounded-lg'>
        <div className='space-y-2 md:space-y-3.5 px-4 py-3 md:px-6 md:py-5 '>
          <h3 className='text-lg lg:text-xl font-montserrat font-semibold capitalize text-primary'>
            send message
          </h3>

          <div className='input-field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              name='name'
              id='name'
            />
          </div>

          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              id='email'
            />
          </div>

          <div className='input-field'>
            <label htmlFor='message'>Message</label>
            <textarea
              placeholder='Type your Message...'
              name='message'
              id='message'
            />
          </div>

          <button className='btn' type='submit'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

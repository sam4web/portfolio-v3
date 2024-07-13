import useStore from '@/store';

const Skills = () => {
  const skills = useStore((state) => state.skills);

  return (
    <section className='section-bg'>
      <div className='wrapper'>
        <div className='section-spacing'>
          <h2 className='section-title'>skills</h2>
          <br />
          <div className='space-y-4'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {skills.map((skill, idx) => (
                <div key={idx} className='space-y-3'>
                  <h3 className='text-lg lg:text-xl font-montserrat font-semibold capitalize text-primary'>
                    {skill.title}
                  </h3>
                  <ul className='flex flex-wrap gap-3'>
                    {skill.items.map((item, i) => (
                      <li
                        key={i}
                        className='shadow-sm p-2 rounded-md bg-slate-200 dark:bg-slate-800'
                      >
                        <span className='text-slate-700 font-montserrat dark:text-slate-300 font-medium'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { useProfileContext } from '@/context/ProfileContext';

const Skills = () => {
  const { skills } = useProfileContext();

  return (
    <section className='section-bg'>
      <div className='wrapper'>
        <div className='section-spacing'>
          <h2 className='section-title'>skills</h2>
          <br />
          <div className='space-y-4 sm:max-w-xl lg:max-w-screen-md'>
            <div className='flex justify-between gap-5 flex-wrap'>
              {skills.map((skill, idx) => (
                <div key={idx} className='space-y-2'>
                  <h3 className='text-lg lg:text-xl font-montserrat font-semibold capitalize text-primary'>
                    {skill.title}
                  </h3>
                  <ul>
                    {skill.items.map((item, i) => (
                      <li
                        key={i}
                        className='text-slate-600 font-montserrat dark:text-slate-400 font-medium'
                      >
                        {item}
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

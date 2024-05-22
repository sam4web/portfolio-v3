import { useProfileContext } from '@/context';
import { createReactIcon } from '@/utils';

const Archive = () => {
  const { projects } = useProfileContext();

  return (
    <section className='h-full'>
      <div className='wrapper'>
        <div className='section-spacing'>
          <div>
            <h1 className='main-title'>Archieve</h1>
            <p className='about-text'>
              A big list of things I&#8217;ve worked on
            </p>
          </div>

          <table className='w-full table-auto'>
            <thead>
              <tr className='text-left'>
                <th className='table-header'>Year</th>
                <th className='table-header'>Title</th>
                <th className='md:block hidden table-header'>Built with</th>
                <th className='table-header'>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((item) => (
                <tr key={item.id}>
                  <td className='table-item font-semibold text-primary'>
                    {item.year}
                  </td>
                  <td className='table-item font-medium capitalize text-responsive'>
                    {item.title}
                  </td>
                  <td className='md:block hidden table-item'>
                    <div className='flex items-center'>
                      {item.stacks.map((stack, _) => (
                        <div key={_}>
                          <span className='text-slate-700 font-montserrat dark:text-slate-300 text-base'>
                            {stack}
                          </span>
                          {_ !== item.stacks.length - 1 && (
                            <span className='mx-1.5 font-semibold text-responsive'>
                              &#183;
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className='table-item'>
                    <div className='flex items-center space-x-3'>
                      {item.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.ref}
                          title={link.title}
                          target='_blank'
                          className='text-xl text-responsive hover:text-primary'
                        >
                          {createReactIcon(link.icon)}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Archive;

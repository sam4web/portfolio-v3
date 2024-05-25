import { PageTitle } from '@/components';
import { useProfileContext } from '@/context/ProfileContext';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

const Archive = () => {
  const { projects } = useProfileContext();

  return (
    <>
      <PageTitle title={'Archieve'} />

      <section className='h-full'>
        <div className='wrapper'>
          <div className='section-spacing'>
            <div>
              <h1 className='main-title'>Archieve</h1>
              <p className='paragraph-text'>
                A big list of things I&#8217;ve worked on
              </p>
            </div>

            <table className='w-full table-auto'>
              <thead>
                <tr className='text-left'>
                  <th className='table-header'>Year</th>
                  <th className='table-header'>Title</th>
                  <th className='md:block hidden table-header'>Built with</th>
                  <th className='table-header'>Links</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item) => (
                  <tr key={item.id}>
                    <td className='table-item font-semibold text-primary'>
                      {item.year}
                    </td>
                    <td className='table-item font-medium capitalize text-responsive'>
                      <a
                        href={item.preview ? item.preview : item.source}
                        className='cursor-pointer hover:text-primary underline-text'
                        target='_blank'
                      >
                        {item.title}
                      </a>
                    </td>
                    <td className='md:block hidden table-item'>
                      <div className='flex items-center'>
                        {item.tools.map((tool, i) => (
                          <div key={i}>
                            <span className='text-slate-700 font-montserrat dark:text-slate-300 text-base'>
                              {tool}
                            </span>
                            {i !== item.tools.length - 1 && (
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
                        <a
                          href={item.source}
                          title='source'
                          target='_blank'
                          className='text-xl text-responsive hover:text-primary cursor-pointer'
                        >
                          <FiGithub />
                        </a>
                        {item.preview && (
                          <a
                            href={item.preview}
                            title='preview'
                            target='_blank'
                            className='text-xl text-responsive hover:text-primary cursor-pointer'
                          >
                            <GoLinkExternal />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Archive;

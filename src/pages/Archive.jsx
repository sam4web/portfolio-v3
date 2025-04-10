import { TableData } from '@/components';
import usePageTitle from '@/hooks/usePageTitle';
import useStore from '@/store';

const Archive = () => {
  usePageTitle('Archive | Sijal Manandhar');

  const projects = useStore((state) => state.projects);

  return (
    <section className='h-full'>
      <div className='wrapper mt-10'>
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
              {projects.map((project) => (
                <TableData project={project} key={project.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Archive;

import { Link } from 'react-router-dom';
import useStore from '@/store';
import { ProjectItem } from '@/components';

const Projects = () => {
  const featuredProjects = useStore((state) => state.featuredProjects);

  return (
    <section>
      <div className='wrapper'>
        <div className='section-spacing'>
          <div className='space-y-1.5 text-center'>
            <h2 className='section-title section-title-center'>
              featured projects
            </h2>
            <br />
            <p className='section-subtitle'>Portfolio</p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {featuredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>

          <div className='flex-center'>
            <Link to={'/archive'}>
              <button className='btn'>View the archive</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

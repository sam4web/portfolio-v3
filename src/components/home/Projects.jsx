import { useProfileContext } from '@/context/ProfileContext';
import { CiFolderOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  return (
    <div className='cursor-pointer w-full max-w-md mx-auto group hover:-translate-y-1.5'>
      <div className='shadow-sm p-5 rounded-md bg-slate-200 dark:bg-slate-800 h-full flex flex-col justify-between gap-4'>
        <div className='space-y-6'>
          <div className='flex-between'>
            <div>
              <span className='text-primary text-5xl'>
                <CiFolderOn />
              </span>
            </div>

            <ul className='flex-center gap-3'>
              <li className='text-xl text-responsive hover:text-primary'>
                <a href={project.source} target='_blank' title='source'>
                  <FiGithub />
                </a>
              </li>
              {project.preview && (
                <li className='text-xl text-responsive hover:text-primary'>
                  <a href={project.preview} target='_blank' title='preview'>
                    <GoLinkExternal />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <a
            className='space-y-2 inline-block'
            href={project.preview ? project.preview : project.source}
            target='_blank'
          >
            <h3 className='text-responsive text-lg lg:text-xl font-montserrat font-semibold capitalize group-hover:text-primary'>
              {project.name}
            </h3>
            <p className='text-slate-500 dark:text-slate-400'>
              {project.description}
            </p>
          </a>
        </div>

        <ul className='flex'>
          {project.tags.map((tag, _) => (
            <li key={_}>
              <span className='text-slate-700 font-montserrat dark:text-slate-300'>
                {tag}
              </span>
              {_ !== project.tags.length - 1 && (
                <span className='mx-2 font-bold text-responsive'>&#183;</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const { featuredProjects } = useProfileContext();

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
              <Project key={project.id} project={project} />
            ))}
          </div>

          <Link to={'/archive'} className='block text-center'>
            <button className='btn'>View the archive</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

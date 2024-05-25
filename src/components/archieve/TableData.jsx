import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

const TableData = ({ project }) => {
  return (
    <tr>
      <td className='table-item font-semibold text-primary'>{project.year}</td>
      <td className='table-item font-medium capitalize text-responsive'>
        <a
          href={project.preview ? project.preview : project.source}
          className='cursor-pointer hover:text-primary underline-text'
          target='_blank'
        >
          {project.title}
        </a>
      </td>
      <td className='md:block hidden table-item'>
        <div className='flex items-center'>
          {project.tools.map((tool, i) => (
            <div key={i}>
              <span className='text-slate-700 font-montserrat dark:text-slate-300 text-base'>
                {tool}
              </span>
              {i !== project.tools.length - 1 && (
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
            href={project.source}
            title='source'
            target='_blank'
            className='text-xl text-responsive hover:text-primary cursor-pointer'
          >
            <FiGithub />
          </a>
          {project.preview && (
            <a
              href={project.preview}
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
  );
};

export default TableData;

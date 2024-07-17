import { useState } from 'react';
import usePageTitle from '@/hooks/usePageTitle';
import { Document, Page, pdfjs } from 'react-pdf';
import { FiDownload, FiZoomIn, FiZoomOut } from 'react-icons/fi';
import resume from '@/resources/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const Resume = () => {
  usePageTitle('Resume | Sijal Manandhar');

  const [showDownloadBtn, setShowDownloadBtn] = useState(false);
  const [scale, setScale] = useState(1.2);

  const onDocumentLoadSuccess = () => {
    setShowDownloadBtn(true);
  };

  return (
    <section className='mt-10 section-spacing pb-6'>
      {showDownloadBtn && (
        <div className='flex px-4 sm:px-7 lg:max-w-3xl mx-auto gap-2'>
          <button
            className='btn p-2 text-2xl'
            onClick={() => setScale((prev) => (prev += 0.1))}
            disabled={scale >= 1.7}
          >
            <FiZoomIn />
          </button>

          <button
            className='btn p-2 text-2xl'
            onClick={() => setScale((prev) => (prev -= 0.1))}
            disabled={scale <= 0.7}
          >
            <FiZoomOut />
          </button>

          <a className='btn p-2 text-2xl' href={resume} download='resume'>
            <FiDownload />
          </a>
        </div>
      )}
      <div className='flex-center'>
        <div className='overflow-scroll rounded-md'>
          <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              canvasBackground='transparent'
              scale={scale}
            />
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;

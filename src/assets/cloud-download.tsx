import { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

export default memo(function IconDownload(props: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...props}>
      <path d='M445 169.1C443.5 105 390.4 53.4 326.4 53.4c-37.6 0-71.5 17.7-93.6 45.7-12.5-15.5-31.7-25.8-53-25.8-36.8 0-67 30.2-67 67 0 2.9 0 6.6.7 9.6-5.9-.7-11.1-1.5-16.9-1.5-53.9 0-96.6 43.5-96.6 97.3s43.5 97.2 96.5 97.2h45.7l113.5 115.7 113.5-117.1h56c47.9 0 86.9-39 86.9-86.9-.8-41.3-28.8-76-67.1-85.5zM255.6 405.5l-95.8-95.8H224V214h64v95.8h63.4l-95.8 95.7z' />
    </svg>
  );
});

import { memo } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

export default memo(function IconTrash(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 25 25'
      preserveAspectRatio='xMinYMin slice'
      {...props}
    >
      <path d='M11-.031c-.836 0-1.656.164-2.25.75-.594.586-.781 1.418-.781 2.281H4c-.55 0-1 .45-1 1H2v2h22V4h-1c0-.55-.45-1-1-1h-3.969c0-.863-.187-1.695-.781-2.281-.594-.586-1.414-.75-2.25-.75Zm0 2.062h4c.547 0 .719.13.781.188.063.058.188.222.188.781H10.03c0-.559.125-.723.188-.781.062-.059.234-.188.781-.188ZM4 7v16c0 1.652 1.348 3 3 3h12c1.652 0 3-1.348 3-3V7Zm4 3h2v12H8Zm4 0h2v12h-2Zm4 0h2v12h-2Z' />
    </svg>
  );
});

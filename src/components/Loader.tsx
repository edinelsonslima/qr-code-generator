import { PropsWithChildren } from 'react';

interface LoaderProps {
  loading: boolean;
  text?: string;
}

export default function Loader({
  children,
  loading,
  text,
}: PropsWithChildren<LoaderProps>) {
  if (!loading) return <>{children}</>;

  return (
    <div className='relative h-full w-full'>
      <div className='z-10 absolute inset-0 text-primary bg-white/50 flex flex-col justify-center items-center p-2 rounded font-bold text-2xl'>
        {text && <span>{text}</span>}
        <div>
          <div className='text-2xl inline-block animate-bounce animation-delay-slow'>
            .
          </div>
          <div className='text-2xl inline-block animate-bounce animation-delay-middle'>
            .
          </div>
          <div className='text-2xl inline-block animate-bounce animation-delay-fast'>
            .
          </div>
        </div>
      </div>

      <div className='animate-pulse'>{children}</div>
    </div>
  );
}

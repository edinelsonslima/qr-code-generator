import { useState } from 'react';
import Image from 'next/image';

import Button from './Button';
import Loader from './Loader';

import IconDownload from '@/assets/cloud-download';

interface QrCodeProps {
  qrCodeUrl: string;
  index: number;
}

export default function QrCode({ qrCodeUrl, index }: QrCodeProps) {
  const [downloading, setDownloading] = useState<Record<number, boolean>>({});

  async function QrCodeDownload(url: string, position: number) {
    setDownloading((prev) => ({ ...prev, [position]: true }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr-code-${position + 1}.png`;
    a.click();
    a.remove();
    setDownloading((prev) => ({ ...prev, [position]: false }));
  }

  return (
    <Loader loading={downloading[index]}>
      <Button
        type='tertiary'
        className='flex-col group relative cursor-pointer transition-all rounded-md overflow-hidden hover:bg-primary/70 !p-0 h-full w-full'
        onClick={() => QrCodeDownload(qrCodeUrl, index)}
      >
        <Image
          width={150}
          height={150}
          src={qrCodeUrl}
          alt='QR code gerado'
          className='w-full h-full rounded-t-md group-hover:opacity-5 transition-all'
        />

        <small className='flex gap-1 px-1 text-xs select-none'>
          QR CODE {index + 1 > 9 ? index + 1 : `0${index + 1}`}{' '}
          <IconDownload className='transition-all h-[15px] group-hover:animate-move-b-r-center' />
        </small>
      </Button>
    </Loader>
  );
}

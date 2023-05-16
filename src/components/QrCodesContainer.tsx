import QrCode from './QrCode';

interface QrCodeProps {
  qrCodes: Blob[];
}

export function QrCodesContainer({ qrCodes }: QrCodeProps) {
  return (
    <div className='grid auto-cols-min auto-rows-min grid-rows-3 grid-flow-col gap-2 sm:grid-rows-4 2xl:grid-rows-5'>
      {qrCodes.map((qrCode, index) => {
        const qrCodeUrl = URL.createObjectURL(qrCode);
        return (
          <div key={qrCodeUrl} className='flex-1 w-24'>
            <QrCode index={index} qrCodeUrl={qrCodeUrl} />
          </div>
        );
      })}
    </div>
  );
}

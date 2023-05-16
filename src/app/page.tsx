'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import JSZip from 'jszip';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputsContainer from '@/components/InputsContainer';
import Loader from '@/components/Loader';
import { QrCodesContainer } from '@/components/QrCodesContainer';

import EmptyQrCode from '@/assets/empty-qr-code';
import IconDownload from '@/assets/cloud-download';
import IconTrash from '@/assets/trash';

interface Inputs {
  'qr-code': { value: string }[];
}

export default function Home() {
  const [qrCodesBlob, setQrCodesBlob] = useState<Blob[] | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const { register, control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: { 'qr-code': [{ value: '' }] },
  });

  const { fields, append, remove } = useFieldArray<Inputs>({
    control,
    name: 'qr-code',
    rules: { minLength: 1 },
  });

  async function onSubmit(data: Inputs) {
    setIsGenerating(true);
    setQrCodesBlob(await Promise.all(data['qr-code'].map(QrCodeGenerate)));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsGenerating(false);
  }

  async function QrCodeGenerate({ value }: { value: string }) {
    const googleChartApi = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${encodeURIComponent(
      value
    )}`;
    const response = await fetch(googleChartApi);
    const data = await response.blob();
    return data;
  }

  async function QrCodeDownloadAll(qrCodesUrl: Blob[]) {
    const folderZip = new JSZip();
    const folder = folderZip.folder('qr-codes');

    if (!folder) return;

    for (let index = 0; index < qrCodesUrl.length; index++) {
      const blob = await qrCodesUrl[index].arrayBuffer();
      folder.file(`qr-code-${index + 1}.png`, blob);
    }

    const content = await folderZip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(content);
    a.download = 'qr-codes.zip';
    a.click();
    a.remove();
  }

  return (
    <div className='grid grid-cols-1 gap-5 w-full sm:grid-cols-2'>
      <form
        className='w-full max-h-[50vh] sm:h-[70vh] sm:max-h-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='fixed bottom-0 left-0 z-20 w-full py-4 px-2 bg-slate-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]'>
          <div className='flex justify-between gap-2 container mx-auto'>
            <div className='flex gap-2'>
              <Button type='default' onClick={() => append({ value: '' })}>
                +
              </Button>

              <Button
                type='tertiary'
                onClick={() => {
                  reset();
                  setQrCodesBlob(null);
                }}
                icon={<IconTrash />}
              >
                Limpar
              </Button>
            </div>

            <Button type='primary' htmlType='submit' disabled={isGenerating}>
              Gerar
            </Button>
          </div>
        </div>

        <ul className='overflow-y-auto h-full pr-2'>
          <Input
            span={1}
            placeholder='...qualquer texto ou link'
            register={{
              ...register(`qr-code.0.value`, {
                required: true,
              }),
            }}
          />

          <div className='mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2'>
            {fields?.map((item, index) => {
              if (index === 0) return null;
              return (
                <InputsContainer
                  key={item.id}
                  register={register}
                  span={index + 1}
                  onRemove={() => remove(index)}
                  name={`qr-code.${index}.value`}
                />
              );
            })}
          </div>
        </ul>
      </form>

      <Loader loading={isGenerating} text='Gerando QR(S) code(s)'>
        <div className='flex flex-col gap-2 w-full h-full'>
          <div className='border border-primary/10 bg-primary/5 rounded h-full'>
            <div className='overflow-x-auto whitespace-nowrap p-2'>
              {qrCodesBlob ? (
                <QrCodesContainer qrCodes={qrCodesBlob} />
              ) : (
                <EmptyQrCode className='fill-primary mx-auto w-full h-full' />
              )}
            </div>
          </div>

          {qrCodesBlob && (
            <Button
              type='default'
              disabled={isGenerating}
              onClick={() => QrCodeDownloadAll(qrCodesBlob)}
              icon={<IconDownload />}
            >
              Baixar todos
            </Button>
          )}
        </div>
      </Loader>
    </div>
  );
}

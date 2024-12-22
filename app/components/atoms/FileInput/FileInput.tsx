'use client';
import { useState } from 'react';
import { CloudUploadIcon } from '../icons/CloudUploadIcon';
import { PaperDownloadIcon } from '../icons/PaperDownloadIcon';
import { FileInputUpProps } from './types';

export const FileInput = ({
  acceptFile,
  fileName,
  permitionTypeFile,
  onFileUploaded,
}: FileInputUpProps) => {
  const [files, setFiles] = useState<File[] | FileList>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  };

  if (files.length > 0) {
    const file = files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        const base64File = reader.result as string;
        onFileUploaded(base64File);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="">
      <div className="flex items-center justify-center text-gray-500 relative ">
        <div className="absolute opacity-0 border w-full h-full">
          <input
            type="file"
            accept={acceptFile}
            onChange={handleFileChange}
            className=" w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full p-8">
          <CloudUploadIcon></CloudUploadIcon>
          <div className="font-yekanBakhBold font-normal text-[1rem] mt-3 text-center">
            برای آپلود {fileName} لطفا اینجا را کلیک کنید یا {fileName} رو بکشید
            و رها کنید
          </div>
          <div className="font-yekanBakh font-normal text-[14px] flex items-center gap-2 text-success-600 text-center mt-2">
            <PaperDownloadIcon></PaperDownloadIcon>
            فرمت ها و سایز مجاز {permitionTypeFile}
          </div>
        </div>
      </div>
    </div>
  );
};

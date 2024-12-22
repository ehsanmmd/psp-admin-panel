export interface FileInputUpProps {
  acceptFile: string;
  fileName: string;
  permitionTypeFile: string;
  onFileUploaded: (base64Image: string) => void;
}

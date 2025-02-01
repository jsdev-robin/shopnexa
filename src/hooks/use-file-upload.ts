import { useState, useCallback, useEffect } from "react";

interface UseFileUploadResult {
  files: File[];
  previewUrls: string[];
  base64Data: string[];
  error: string | null;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
}

const useFileUpload = (
  options: {
    allowedTypes?: string[];
    maxFileSize?: number;
    multiple?: boolean;
  } = {}
): UseFileUploadResult => {
  const {
    allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain",
      "application/pdf",
      "text/csv",
      "video/mp4",
      "video/webm",
      "video/ogg",
    ],
    maxFileSize = 10 * 1024 * 1024,
    multiple = false,
  } = options;

  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [base64Data, setBase64Data] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback(
    (file: File): boolean => {
      const isValidType = allowedTypes.includes(file.type);
      const isValidSize = file.size <= maxFileSize;
      if (!isValidType) {
        setError(`File type must be one of: ${allowedTypes.join(", ")}`);
        return false;
      }
      if (!isValidSize) {
        setError(
          `File size must be smaller than ${maxFileSize / (1024 * 1024)} MB`
        );
        return false;
      }
      setError(null);
      return true;
    },
    [allowedTypes, maxFileSize]
  );

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(event.target.files || []);
      const validFiles = selectedFiles.filter(validateFile);

      if (multiple) {
        const fileReadPromises = validFiles.map((file) => {
          return new Promise<{
            file: File;
            previewUrl: string;
            base64: string;
          }>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const result = reader.result as string;
              resolve({
                file,
                previewUrl: URL.createObjectURL(file),
                base64: result.split(",")[1],
              });
            };
            reader.onerror = () => reject(new Error("Error reading file"));
            reader.readAsDataURL(file);
          });
        });

        try {
          const results = await Promise.all(fileReadPromises);
          setFiles((prev) => [...prev, ...results.map((r) => r.file)]);
          setPreviewUrls((prev) => [
            ...prev,
            ...results.map((r) => r.previewUrl),
          ]);
          setBase64Data((prev) => [...prev, ...results.map((r) => r.base64)]);
        } catch {
          setError("Error reading one or more files");
        }
      } else if (validFiles.length > 0) {
        const selectedFile = validFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setFiles([selectedFile]);
          setPreviewUrls([URL.createObjectURL(selectedFile)]);
          setBase64Data([result.split(",")[1]]);
        };
        reader.onerror = () => setError("Error reading file");
        reader.readAsDataURL(selectedFile);
      }
    },
    [validateFile, multiple]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    setBase64Data((prev) => prev.filter((_, i) => i !== index));
  }, []);

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return {
    files,
    previewUrls,
    base64Data,
    error,
    handleFileChange,
    removeFile,
  };
};

export default useFileUpload;

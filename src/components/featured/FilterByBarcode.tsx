"use client";

import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Barcode } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterByBarcodeProps {
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const FilterByBarcode: React.FC<FilterByBarcodeProps> = ({
  onChange,
  disabled = false,
}) => {
  const [result, setResult] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const beepAudio = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (result) {
      setOpen(false);
    }
  }, [result]);

  useEffect(() => {
    if (!open) {
      setResult("");
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      beepAudio.current = new Audio("/sounds/store-scanner.mp3");
      const codeReader = new BrowserMultiFormatReader();

      codeReader
        .listVideoInputDevices()
        .then((videoInputDevices) => {
          if (videoInputDevices.length > 0 && videoRef.current) {
            const selectedDeviceId = videoInputDevices[0].deviceId;

            codeReader.decodeFromVideoDevice(
              selectedDeviceId,
              videoRef.current,
              (result, err) => {
                if (result) {
                  setResult(result.getText());
                  if (onChange) onChange(result.getText());
                  beepAudio.current?.play().catch(() => {
                    console.error("Error playing beep sound");
                  });
                } else if (err && !(err instanceof NotFoundException)) {
                  console.error(err);
                  setResult("Error: " + err.message);
                }
              }
            );
          } else {
            console.error("No video input devices found.");
          }
        })
        .catch((err) => {
          console.error("Error listing video input devices:", err);
        });

      return () => {
        codeReader.reset();
      };
    }
  }, [onChange, open]);

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
      <DialogTrigger asChild className="data-[state=open]:bg-secondary/80">
        <Button
          variant="secondary"
          className="h-8"
          size="sm"
          disabled={disabled}
        >
          <Barcode />
          Scan
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-lg w-[90vw] max-w-xs rounded-lg bg-white p-4">
        <VisuallyHidden.Root>
          <DialogHeader>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
        </VisuallyHidden.Root>

        <div className="flex flex-col items-center justify-center">
          <video ref={videoRef} className="w-full" />
          <pre>
            <code>{result}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterByBarcode;

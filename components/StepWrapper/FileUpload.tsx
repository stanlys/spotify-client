import { Box, IconButton, Typography } from "@mui/material";
import React, { ReactElement, ReactText, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface FileUploadProps {
  caption: string;
  file: any;
  setFile: Function;
  accept: string;
  children: ReactElement;
}

const FileUpload: React.FC<FileUploadProps> = ({
  caption,
  file,
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <Box>
      <Typography variant="caption">{caption}</Typography>
      <IconButton
        color="primary"
        component="label"
        onClick={() => ref.current?.click()}
      >
        <CloudUploadIcon sx={{ width: 50, height: 50 }} />
      </IconButton>
      <input hidden accept={accept} type="file" ref={ref} onChange={onChange} />
    </Box>
  );
};

export default FileUpload;

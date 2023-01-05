import { Box, IconButton, Typography } from "@mui/material";
import React, { ReactText, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface FileUploadProps {
  file: any;
  setFile: Function;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile, accept }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <Box>
      <Typography variant="caption">FileUpload</Typography>
      <IconButton
        color="primary"
        component="label"
        onClick={() => ref.current?.click()}
      >
        <CloudUploadIcon />
      </IconButton>
      <input hidden accept={accept} type="file" ref={ref} onChange={onChange} />
    </Box>
  );
};

export default FileUpload;

import { Flex, Text, Image } from "@chakra-ui/react";
import Dropzone from "react-dropzone";

interface UploadImageProps {
  file: File[] | File | any | null;
  setFile: (file: File[] | File | null) => void;
  isReadonly: boolean;
  accept?: any;
  maxFiles?: number;
}

export const UploadImage = ({
  file,
  setFile,
  isReadonly,
  accept = { "image/*": [".jpg", ".jpeg", ".png"] },
  maxFiles = 5,
}: UploadImageProps) => {
  return (
    <>
      <Flex
        border={"dashed"}
        borderWidth={2}
        opacity={isReadonly ? 0.3 : 1}
        cursor={isReadonly ? "not-allowed" : "pointer"}
      >
        <Dropzone
          maxFiles={maxFiles}
          onDrop={(acceptedFiles) => setFile(acceptedFiles)}
          disabled={isReadonly}
          accept={accept}
        >
          {({ getRootProps, getInputProps }) => (
            <Flex
              {...getRootProps()}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              p={4}
            >
              <input {...getInputProps()} />
              {file && file?.length > 0 ? (
                <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
                  {file.map((f: any, index: number) => {
                    const objectUrl = URL.createObjectURL(f);
                    return (
                      <Flex
                        key={`${f.name}-${index}`}
                        flexDir={"column"}
                        gap={4}
                      >
                        <Image
                          src={objectUrl}
                          alt={f.name}
                          w={"100px"}
                          h={"100px"}
                        />
                        <Text>{f.name}</Text>
                      </Flex>
                    );
                  })}
                </Flex>
              ) : (
                <Flex
                  minH={"100px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text textAlign={"center"}>
                    {"Drag 'n' drop some files here, or click to select files"}
                  </Text>
                </Flex>
              )}
            </Flex>
          )}
        </Dropzone>
      </Flex>
    </>
  );
};

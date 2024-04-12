import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { fileToUploadAtom } from "../../winners/utils/winners.recoil";
import { Divider, Flex, Text } from "@chakra-ui/react";

const FileUpload = () => {
  const [fileToUpload, setFileToUpload] = useRecoilState(fileToUploadAtom);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileToUpload(e.target.files[0]);
    }
  };

  return (
    <Flex flexDir={"column"}>
      <input type="file" onChange={handleFileChange} />
      <Flex flexDir={"column"}>
        {fileToUpload && (
          <Text pt={2} fontSize={"xs"}>
            {fileToUpload?.name} - {fileToUpload?.type}
          </Text>
        )}
        <Divider mt={2} />
      </Flex>
    </Flex>
  );
};

export default FileUpload;

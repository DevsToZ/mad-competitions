import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { filesToUploadAtom } from "../../competitions/utils/competitions.recoil";
import { Divider, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";

const MultipleFilesUpload = () => {
  const [filesToUpload, setFilesToUpload] = useRecoilState<FileList | any>(
    filesToUploadAtom
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFilesToUpload([...e.target.files]);
  };

  return (
    <Flex flexDir={"column"}>
      <input type="file" onChange={handleFileChange} multiple />
      <OrderedList>
        {filesToUpload?.map((file: File, i: number) => (
          <ListItem pt={2} key={i} fontSize={"xs"}>
            <Text>
              {file.name} - {file.type}{" "}
            </Text>
          </ListItem>
        ))}
      </OrderedList>
      <Divider mt={2} />
    </Flex>
  );
};

export default MultipleFilesUpload;

import { Flex, Tag } from "@chakra-ui/react";
import { tagToLabel } from "../utils/consts";

interface TagDisplayProps {
  tags: string[];
}

const TagDisplay = ({ tags }: TagDisplayProps) => {
  return (
    <Flex
      w={"25%"}
      h={"50%"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      gap={2}
    >
      {tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} bg={"green.300"} color={"white"}>
          {tagToLabel(tag)}
        </Tag>
      ))}
    </Flex>
  );
};

export default TagDisplay;

import { Flex, FormLabel, Select, useMediaQuery } from "@chakra-ui/react";
import { TagsArray, tagToLabel } from "../competitions/utils/consts";
import { SetStateAction } from "react";

interface FiltersProps {
  setFilterBy: SetStateAction<null | any>;
  marginRight?: string;
}

export const Filters = ({ setFilterBy, marginRight }: FiltersProps) => {
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  return (
    <Flex
      flexDir={"column"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"flex-end"}
      mr={marginRight}
    >
      <FormLabel color={"white"} textTransform={"capitalize"}>
        Filter by tag
      </FormLabel>
      <Select
        onChange={(e) => setFilterBy(e.target.value)}
        color={"black"}
        bg={"white"}
        w={isTablet ? "25%" : "100%"}
      >
        <option value={""}>{"All"}</option>
        {TagsArray.map((tag, index) => (
          <option key={`${tag}-${index}`} value={tag}>
            {tagToLabel(tag)}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width={"100%"} startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={"Search Games..."}
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

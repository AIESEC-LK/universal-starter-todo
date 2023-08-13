import { TextInput } from "@mantine/core";
import { TablerSearch } from "@seamlessc/tabler-icons-react";
import React from "react";

interface SearchFilterProps {}

const SearchFilter: React.FC<SearchFilterProps> = (props) => {
	return (
		<>
			<TextInput
				label="Search links"
				placeholder="Enter to search the links"
				icon={<TablerSearch size={14}></TablerSearch>}
			></TextInput>
		</>
	);
};

export default SearchFilter;


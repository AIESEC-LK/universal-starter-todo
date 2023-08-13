import { ActionIcon, Menu } from "@mantine/core";
import { TablerArrowDown, TablerArrowUp, TablerSortDescending } from "@seamlessc/tabler-icons-react";
import React, { useState } from "react";

interface SortProps {}

const sortArray = [
	{
		name: "Approved",
		type: "ASC",
	},
	{
		name: "Approved",
		type: "DESC",
	},
	{
		name: "Alphabetical",
		type: "ASC",
	},
	{
		name: "Alphabetical",
		type: "DESC",
	},
];
const UP_ARROW = <TablerArrowUp size={14} />;
const DOWN_ARROW = <TablerArrowDown size={14} />;
const Sort: React.FC<SortProps> = (props) => {
	const [sort, setSort] = useState(0);
	return (
		<>
			<Menu shadow="md">
				<Menu.Target>
					<ActionIcon size="lg" variant="light" color="indigo">
						<TablerSortDescending></TablerSortDescending>
					</ActionIcon>
				</Menu.Target>

				<Menu.Dropdown>
					{sortArray.map((value, index) => (
						<Menu.Item
							key={`sort-${index}`}
							color={sort === index ? "blue" : undefined}
							icon={value.type === "ASC" ? UP_ARROW : DOWN_ARROW}
							onClick={() => setSort(index)}
						>
							{value.name}
						</Menu.Item>
					))}
				</Menu.Dropdown>
			</Menu>
		</>
	);
};

export default Sort;


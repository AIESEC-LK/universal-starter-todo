import { Button, Grid, Group } from "@mantine/core";
import React from "react";
import { EntityFilterFragment$key } from "../../__gen__/EntityFilterFragment.graphql";
import EntityFilter from "./EntityFilter";
import SearchFilter from "./SearchFilter";

interface FiltersProps {
	entityFilterKey: EntityFilterFragment$key;
}

const Filters: React.FC<FiltersProps> = (props) => {
	return (
		<>
			<Grid>
				<Grid.Col md={5} sm={12}>
					<EntityFilter entityFilterKey={props.entityFilterKey}></EntityFilter>
				</Grid.Col>
				<Grid.Col md={5} sm={9}>
					<SearchFilter></SearchFilter>
				</Grid.Col>
				<Grid.Col md={2} sm={3} sx={{ alignSelf: "self-end", width: "100%" }}>
					<Button fullWidth>Apply Filters</Button>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default Filters;


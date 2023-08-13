import { MultiSelect } from "@mantine/core";
import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { EntityFilterFragment$key } from "../../__gen__/EntityFilterFragment.graphql";

interface EntityFilterProps {
	entityFilterKey: EntityFilterFragment$key;
}
export const entityFilterQ = graphql`
	fragment EntityFilterFragment on Query {
		ownerEntities(first: 100, sorting: [{ field: name, direction: ASC }]) {
			__id

			edges {
				node {
					id
					name
				}
			}
		}
	}
`;

const EntityFilter: React.FC<EntityFilterProps> = (props) => {
	const { ownerEntities } = useFragment(entityFilterQ, props.entityFilterKey);
	const data = ownerEntities.edges.map((value) => ({ value: value.node.id, label: value.node.name }));
	return (
		<>
			<MultiSelect
				styles={(theme) => ({
					values: {
						flexWrap: "nowrap",
						overflow: "scroll",
					},
				})}
				data={data}
				label="Filter from entities"
				placeholder="Select the entities"
			/>
		</>
	);
};

export default EntityFilter;


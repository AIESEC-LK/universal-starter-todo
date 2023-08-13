import { ActionIcon, Card, Container, Flex, Group, Skeleton, Stack, Title } from "@mantine/core";
import { TablerPlus, TablerSortAscending, TablerSortDescending } from "@seamlessc/tabler-icons-react";
import React, { useEffect, useRef } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { LinksFragment$key } from "../../__gen__/LinksFragment.graphql";
import AddLink from "./AddLink";
import Filters from "../filters/Filters";
import Link from "./Link";
import Sort from "../filters/Sort";
import { useIntersection } from "@mantine/hooks";
import { COUNT } from "./LinksPage";
import { LinksQuery$data } from "../../__gen__/LinksQuery.graphql";

// graphql query for the links and the categories

export const linksQ = graphql`
	query LinksQuery($cursor: ConnectionCursor, $first: Int) {
		...LinksFragment
		...EntityFilterFragment
	}
`;
// used to change the category of alink
// @refetchable is used to refetch the query when pagination is used
// queryName is the name of the query that is used to refetch the data
// @connection defines the data as a connection type with pagination
// key is used to uniquely identify the data connection
// it can be utilized to automatically update the data when a mutation is performed
// __id is the unique id of the connection
export const linkFragment = graphql`
	fragment LinksFragment on Query @refetchable(queryName: "LinksRefetchQuery") {
		links(first: $first, after: $cursor, sorting: [{ field: createdAt, direction: ASC }])
			@connection(key: "LinksFragment_links", filters: []) {
			__id
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
			edges {
				node {
					id
					createdAt
					updatedAt
					name
					actualUrl
					redirectUrl
					entity {
						name
					}
					approved
					createdBy
				}
			}
		}
	}
`;
interface LinksProps {
	keys: LinksQuery$data;
	// linkKey: LinksFragment$key;
}
const Links: React.FC<LinksProps> = (props) => {
	const linkKey: LinksFragment$key = props.keys;
	const { data, hasNext, hasPrevious, isLoadingNext, loadNext, isLoadingPrevious, loadPrevious } =
		usePaginationFragment(linkFragment, linkKey);
	const links = data.links.edges.map((edge) => edge.node);
	const connectionID = data.links.__id;
	const { ref, entry } = useIntersection({
		root: window.document,
		threshold: 0.25,
	});
	useEffect(() => {
		if (entry?.isIntersecting && hasNext) {
			loadNext(COUNT);
		}
	}, [entry?.isIntersecting]);

	return (
		<Container size="md">
			<Group position="apart">
				<Title
					mb="xs"
					variant="gradient"
					gradient={{ from: "indigo", to: "cyan", deg: 45 }}
					ta="center"
					fz="xxl"
					fw={700}
				>
					Link Gen
				</Title>
				<Group>
					<Sort></Sort>
					<ActionIcon size="lg" variant="light" color="cyan">
						<TablerPlus></TablerPlus>
					</ActionIcon>
				</Group>
				{/* <AddLink connectionID={connectionID}></AddLink> */}
			</Group>
			<Filters entityFilterKey={props.keys}></Filters>
			{links.map((link) => (
				<Link connectionID={connectionID} link={link} key={link.id}></Link>
			))}
			{hasNext ? (
				<Card my="lg" shadow="md" ref={ref}>
					<Stack>
						<Skeleton height={36} />
						<Skeleton height={36} />
						<Skeleton height={36} />
					</Stack>
				</Card>
			) : null}
		</Container>
	);
};

export default Links;


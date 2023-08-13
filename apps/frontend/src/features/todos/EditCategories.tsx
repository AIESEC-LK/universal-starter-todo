// import { Button, Menu } from "@mantine/core";
// import React from "react";
// import { useMutation, usePaginationFragment } from "react-relay";
// import { graphql } from "relay-runtime";
// import { EditCategoriesGetFragment$key } from "../../__gen__/EditCategoriesGetFragment.graphql";
// import { EditCategoriesMutation } from "../../__gen__/EditCategoriesMutation.graphql";
// import { TodosFragment$data } from "../../__gen__/TodosFragment.graphql";

// // used to fetch the category list
// // @argumentDefinitions define local variables that can be used in the fragment
// // this is easier than utilizing the global variables in the query
// // @refetchable is used to refetch the query when pagination is used
// // queryName is the name of the query that is used to refetch the data
// // @connection defines the data as a connection type with pagination
// // key is used to uniquely identify the data connection
// // it can be utilized to automatically update the data when a mutation is performed
// // __id is the unique id of the connection
// export const categoriesF = graphql`
// 	fragment EditCategoriesGetFragment on Query
// 	@argumentDefinitions(first: { type: "Int!" }, after: { type: "ConnectionCursor!" })
// 	@refetchable(queryName: "CategoryRefetchQuery") {
// 		categories(first: $first, after: $after, sorting: [{ field: createdAt, direction: ASC }])
// 			@connection(key: "EditCategoriesGetFragment_categories", filters: []) {
// 			__id
// 			pageInfo {
// 				hasNextPage
// 				hasPreviousPage
// 				startCursor
// 				endCursor
// 			}
// 			edges {
// 				node {
// 					id
// 					__typename
// 					name
// 				}
// 			}
// 		}
// 	}
// `;
// export const editCategoriesM = graphql`
// 	mutation EditCategoriesMutation($input: SetCategoryOnTodoInput!) {
// 		setCategoryOnTodo(input: $input) {
// 			id
// 			name

// 			category {
// 				id
// 				name
// 			}
// 		}
// 	}
// `;

// interface EditCategoriesProps {
// 	category: TodosFragment$data["todos"]["edges"][0]["node"]["category"];
// 	categoryKey: EditCategoriesGetFragment$key;
// 	connectionID: string;
// 	todoId: string;
// }

// const EditCategories: React.FC<EditCategoriesProps> = (props) => {
// 	const fragment = usePaginationFragment(categoriesF, props.categoryKey);
// 	const categories = fragment.data.categories.edges.map((edge) => edge.node);
// 	const [editCategories, isEditing] = useMutation<EditCategoriesMutation>(editCategoriesM);
// 	return (
// 		<>
// 			<Menu>
// 				<Menu.Target>
// 					<Button
// 						py={0}
// 						fz="xs"
// 						variant="light"
// 						radius="xl"
// 						size="xs"
// 						color={props.category != null ? "aiesec" : "gray"}
// 					>
// 						{props.category?.name ?? "No category"}
// 					</Button>
// 				</Menu.Target>
// 				<Menu.Dropdown style={{ zIndex: 99 }}>
// 					{categories.map((item) => (
// 						<Menu.Item
// 							key={item.id}
// 							onClick={() => {
// 								editCategories({
// 									variables: {
// 										input: {
// 											id: props.todoId,
// 											relationId: item.id,
// 										},
// 									},
// 								});
// 							}}
// 						>
// 							{item.name}
// 						</Menu.Item>
// 					))}
// 				</Menu.Dropdown>
// 			</Menu>
// 		</>
// 	);
// };

// export default EditCategories;
import React from "react";

interface EditCategoriesProps {}

const EditCategories: React.FC<EditCategoriesProps> = (props) => {
	return <></>;
};

export default EditCategories;

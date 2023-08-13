// import { Group, Title } from "@mantine/core";
// import React from "react";
// import { graphql, usePaginationFragment } from "react-relay";
// import { EditCategoriesGetFragment$key } from "../../__gen__/EditCategoriesGetFragment.graphql";
// import { TodosFragment$key } from "../../__gen__/TodosFragment.graphql";
// import AddTodo from "./AddTodo";
// import Todo from "./Todo";

// // graphql query for the todos and the categories

// export const todosQ = graphql`
// 	query TodosQuery($cursor: ConnectionCursor, $first: Int) {
// 		...TodosFragment
// 		...EditCategoriesGetFragment @arguments(first: 50, after: "")
// 	}
// `;
// // used to change the category of a todo
// // @refetchable is used to refetch the query when pagination is used
// // queryName is the name of the query that is used to refetch the data
// // @connection defines the data as a connection type with pagination
// // key is used to uniquely identify the data connection
// // it can be utilized to automatically update the data when a mutation is performed
// // __id is the unique id of the connection
// export const todoFragment = graphql`
// 	fragment TodosFragment on Query @refetchable(queryName: "TodosRefetchQuery") {
// 		todos(first: $first, after: $cursor, sorting: [{ field: createdAt, direction: ASC }])
// 			@connection(key: "TodosFragment_todos", filters: []) {
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
// 					done
// 					category {
// 						id
// 						__typename
// 						name
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
// interface TodosProps {
// 	categoryKey: EditCategoriesGetFragment$key;
// 	todoKey: TodosFragment$key;
// }
// const Todos: React.FC<TodosProps> = (props) => {
// 	const fragment = usePaginationFragment(todoFragment, props.todoKey);
// 	const todos = fragment.data.todos.edges.map((edge) => edge.node);
// 	const connectionID = (fragment as any).data.todos.__id;

// 	return (
// 		<>
// 			<Group m="lg" position="apart">
// 				<Title
// 					mb="xs"
// 					variant="gradient"
// 					gradient={{ from: "indigo", to: "cyan", deg: 45 }}
// 					ta="center"
// 					fz="xxl"
// 					fw={700}
// 				>
// 					Todos
// 				</Title>
// 				<AddTodo connectionID={connectionID}></AddTodo>
// 			</Group>
// 			{todos.map((todo) => (
// 				<Todo connectionID={connectionID} todo={todo} key={todo.id} categoryKey={props.categoryKey}></Todo>
// 			))}
// 		</>
// 	);
// };

// export default Todos;
import React from "react";

interface TodosProps {}

const Todos: React.FC<TodosProps> = (props) => {
	return <></>;
};

export default Todos;

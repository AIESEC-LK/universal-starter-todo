// import { ActionIcon, Card, Group, Stack } from "@mantine/core";
// import { TablerX } from "@seamlessc/tabler-icons-react";
// import React from "react";
// import { useMutation } from "react-relay";
// import { graphql } from "relay-runtime";
// import { EditCategoriesGetFragment$key } from "../../__gen__/EditCategoriesGetFragment.graphql";
// import { TodoDeleteMutation } from "../../__gen__/TodoDeleteMutation.graphql";
// import { TodosFragment$data } from "../../__gen__/TodosFragment.graphql";
// import EditCategories from "./EditCategories";
// import EditTodoName from "./EditTodoName";

// // used to delete a todo
// // @connections is used to automatically update the data when a mutation is performed
// // @deleteEdge is used to delete the edge from the connection
// // this automatically updates the data and removes that todo from the list
// const deleteTodoM = graphql`
// 	mutation TodoDeleteMutation($connections: [ID!]!, $id: ID!) {
// 		deleteOneTodo(input: { id: $id }) {
// 			id @deleteEdge(connections: $connections)
// 		}
// 	}
// `;
// interface TodoProps {
// 	categoryKey: EditCategoriesGetFragment$key;
// 	todo: TodosFragment$data["todos"]["edges"][0]["node"];
// 	connectionID: string;
// }

// const Todo: React.FC<TodoProps> = ({ todo, connectionID, categoryKey }) => {
// 	const [deleteTodo, isDeleting] = useMutation<TodoDeleteMutation>(deleteTodoM);
// 	return (
// 		<>
// 			<Card sx={{ overflow: "unset" }} key={`${todo.id}-card`} m={"lg"} shadow="md">
// 				<Group position="apart" align="flex-start">
// 					<Stack>
// 						<EditTodoName connectionID={connectionID} todoName={todo.name}></EditTodoName>
// 						<EditCategories
// 							todoId={todo.id}
// 							connectionID={connectionID}
// 							category={todo.category}
// 							categoryKey={categoryKey}
// 						></EditCategories>
// 					</Stack>
// 					<ActionIcon
// 						variant="transparent"
// 						onClick={() => {
// 							deleteTodo({
// 								variables: {
// 									connections: [connectionID],
// 									id: todo.id,
// 								},
// 							});
// 						}}
// 					>
// 						<TablerX size={16} color="red" />
// 					</ActionIcon>
// 				</Group>
// 			</Card>
// 		</>
// 	);
// };

// export default Todo;
import React from "react";

interface TodoProps {}

const Todo: React.FC<TodoProps> = (props) => {
	return <></>;
};

export default Todo;

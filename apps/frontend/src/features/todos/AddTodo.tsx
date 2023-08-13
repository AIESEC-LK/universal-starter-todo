// import { ActionIcon, Button, Group, Modal, Space, Textarea, TextInput, Tooltip } from "@mantine/core";
// import { useToggle } from "@mantine/hooks";
// import { TablerPlus } from "@seamlessc/tabler-icons-react";
// import React from "react";
// import { useForm } from "@mantine/form";
// import { graphql } from "relay-runtime";
// import { useMutation } from "react-relay";
// import { AddTodoMutation } from "../../__gen__/AddTodoMutation.graphql";
// interface AddTodosProps {
// 	connectionID: string;
// }

// // this is the mutation that will be used to add a todo
// // connections make sure that the added data is updated in the cache,
// // so that the data is updated in the UI
// // @appendNode makes sure that the added data is added to the end of the list
// // you have to pass the connections and edgeName (which can be taken from suggestions) to @appendNode
// export const addTodoM = graphql`
// 	mutation AddTodoMutation($connections: [ID!]!, $name: String!, $description: String!) {
// 		createOneTodo(input: { todo: { name: $name, description: $description } })
// 			@appendNode(connections: $connections, edgeTypeName: "TodoEdge") {
// 			id
// 			name
// 			done
// 			description
// 			category {
// 				id
// 				name
// 			}
// 		}
// 	}
// `;
// const AddTodo: React.FC<AddTodosProps> = ({ connectionID }) => {
// 	const [opened, setOpened] = useToggle();
// 	const form = useForm({
// 		initialValues: {
// 			name: "",
// 			description: "",
// 		},
// 	});
// 	// useMutation hook is used to execute the mutation
// 	const [addTodo, isAdding] = useMutation<AddTodoMutation>(addTodoM);

// 	return (
// 		<>
// 			<Modal opened={opened} onClose={() => setOpened(false)} title="Add a todo" centered>
// 				<form
// 					onSubmit={form.onSubmit((values) => {
// 						addTodo({
// 							onCompleted(response, errors) {
// 								if (errors != null) {
// 									return console.log(errors);
// 								}
// 								setOpened(false);
// 							},
// 							variables: {
// 								description: values.description,
// 								name: values.name,
// 								connections: [connectionID],
// 							},
// 						});
// 					})}
// 				>
// 					<TextInput withAsterisk label="Name" placeholder="Todo name" {...form.getInputProps("name")} />
// 					<Space h="sm"></Space>
// 					<Textarea
// 						withAsterisk
// 						label="Description"
// 						placeholder="Todo description"
// 						{...form.getInputProps("description")}
// 					></Textarea>
// 					<Group position="right" mt="md">
// 						<Button type="submit">Submit</Button>
// 					</Group>
// 				</form>
// 			</Modal>
// 			<Tooltip label="Add todo">
// 				<ActionIcon color="cyan" size={28} onClick={() => setOpened(true)}>
// 					<TablerPlus></TablerPlus>
// 				</ActionIcon>
// 			</Tooltip>
// 		</>
// 	);
// };

// export default AddTodo;

import React from "react";

interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = (props) => {
	return <></>;
};

export default AddTodo;

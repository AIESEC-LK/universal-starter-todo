import { ActionIcon, Button, Group, Modal, Space, Textarea, TextInput, Tooltip } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { TablerPlus } from "@seamlessc/tabler-icons-react";
import React from "react";
import { useForm } from "@mantine/form";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import { AddLinkMutation } from "../../__gen__/AddLinkMutation.graphql";
interface AddTodosProps {
	connectionID: string;
}

// this is the mutation that will be used to add a todo
// connections make sure that the added data is updated in the cache,
// so that the data is updated in the UI
// @appendNode makes sure that the added data is added to the end of the list
// you have to pass the connections and edgeName (which can be taken from suggestions) to @appendNode
export const addLinkM = graphql`
	mutation AddLinkMutation(
		$connections: [ID!]!
		$name: String!
		$actualUrl: String!
		$redirectUrl: String!
		$entityId: ID!
	) {
		createOneLink(
			input: { link: { name: $name, actualUrl: $actualUrl, redirectUrl: $redirectUrl, entityId: $entityId } }
		) @appendNode(connections: $connections, edgeTypeName: "LinkEdge") {
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
`;

const AddLink: React.FC<AddTodosProps> = ({ connectionID }) => {
	const form = useForm({
		initialValues: {
			name: "",
			actualUrl: "",
			redirectUrl: "",
			entityId: "",
		},
	});
	// useMutation hook is used to execute the mutation
	const [addLink, isAdding] = useMutation<AddLinkMutation>(addLinkM);

	return (
		<>
			<form
				onSubmit={form.onSubmit((values) => {
					addLink({
						onCompleted(response, errors) {
							if (errors != null) {
								return console.log(errors);
							}
						},
						variables: {
							// description: values.description,
							// name: values.name,
							actualUrl: values.actualUrl,
							entityId: values.entityId,
							redirectUrl: values.redirectUrl,
							name: values.name,
							connections: [connectionID],
						},
					});
				})}
			>
				<TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps("name")} />
				<TextInput withAsterisk label="Actual URL" placeholder="Actual URL" {...form.getInputProps("actualUrl")} />
				<TextInput
					withAsterisk
					label="Redirect URL (aiesec.lk link)"
					placeholder="Redirect URL"
					{...form.getInputProps("redirectUrl")}
				/>
				<TextInput withAsterisk label="Entity" placeholder="Entity" {...form.getInputProps("entityId")} />
				{/* <TextInput withAsterisk label="Expiry Date" placeholder="expiryDate" {...form.getInputProps("name")} /> */}
				<Space h="sm"></Space>
				{/* <Textarea
						withAsterisk
						label="Description"
						placeholder="Todo description"
						{...form.getInputProps("description")}
					></Textarea> */}
				<Group position="right" mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</>
	);
};

export default AddLink;


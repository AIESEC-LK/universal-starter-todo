import { ActionIcon, Button, Card, Container, Flex, Group, Input, Stack, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useToggle } from "@mantine/hooks";
import {
	TablerCheck,
	TablerCopy,
	TablerDeviceFloppy,
	TablerEdit,
	TablerHourglass,
	TablerSwitch3,
	TablerTrash,
	TablerWorld,
	TablerX,
} from "@seamlessc/tabler-icons-react";
import React, { useState } from "react";
import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { LinkDeleteMutation } from "../../__gen__/LinkDeleteMutation.graphql";
import { LinksFragment$data } from "../../__gen__/LinksFragment.graphql";
import { string, object } from "yup";
import CopyIcon from "./CopyIcon";
import goToLink from "../_common/util/goToLink";
import EditLink from "./EditLink";
import DeleteLink from "./DeleteLink";
import ApproveLink from "./ApproveLink";
// import { EditCategoriesGetFragment$key } from "../../__gen__/EditCategoriesGetFragment.graphql";
// import { LinkDeleteMutation } from "../../__gen__/LinkDeleteMutation.graphql";
// import { LinksFragment$data } from "../../__gen__/LinksFragment.graphql";
// import EditCategories from "./EditCategories";
// import EditLinkName from "./EditLinkName";

// used to delete alink
// @connections is used to automatically update the data when a mutation is performed
// @deleteEdge is used to delete the edge from the connection
// this automatically updates the data and removes that link from the list
const deleteLinkM = graphql`
	mutation LinkDeleteMutation($connections: [ID!]!, $id: ID!) {
		deleteOneLink(input: { id: $id }) {
			id @deleteEdge(connections: $connections)
		}
	}
`;
interface LinkProps {
	// categoryKey: EditCategoriesGetFragment$key;
	link: LinksFragment$data["links"]["edges"][0]["node"];
	connectionID: string;
}
const addFormValidation = object().shape({
	name: string()
		.min(2, "Name should have at least 2 letters")
		.max(100, "Name should have at most 100 characters")
		.required("Name is required"),
	actualUrl: string()
		.min(2, "Actual URL should have at least 2 letters")
		.max(1000, "Actual URL should have at most 1000 characters")
		.required("Actual URL is required")
		.url("Actual URL should be a valid URL"),
	redirectUrl: string()
		.min(2, "Redirect URL should have at least 2 letters")
		.max(200, "Redirect URL should have at most 200 characters")
		.required("Redirect URL is required")
		.matches(/^[A-Za-z0-9_-]*$/, "Redirect URL should only contain letters, numbers, dashes and underscores"),
});
export interface EditFormInterface {
	name: string;
	actualUrl: string;
	redirectUrl: string;
}
const Link: React.FC<LinkProps> = ({ link, connectionID }) => {
	const form = useForm<EditFormInterface>({
		validate: yupResolver(addFormValidation),
		validateInputOnChange: true,
		initialValues: {
			name: link.name,
			actualUrl: link.actualUrl,
			redirectUrl: link.redirectUrl,
		},
	});
	const [isEditable, toggleEditable] = useToggle<boolean>();
	const resetFields = () => {
		toggleEditable(false);
		form.reset();
	};
	// const [disabledActualUrl, toggleDisabledActualUrl] = useToggle<boolean>([true, false]);
	// const [disabledRedirectUrl, toggleDisabledRedirectUrl] = useToggle<boolean>([true, false]);
	// const [disabledName, toggleDisabledName] = useToggle<boolean>([true, false]);
	// const [redirectUrl, setRedirectUrl] = useState(link.redirectUrl);
	const [deleteLink, isDeleting] = useMutation<LinkDeleteMutation>(deleteLinkM);
	const executeEdit = () => {
		if (isEditable) {
		}
	};
	return (
		<>
			<Card sx={{ overflow: "unset" }} key={`${link.id}-card`} my="lg" shadow="md">
				<form
					id="add-link-form"
					onSubmit={form.onSubmit((values) => {
						console.log(values);
						toggleEditable(false);
						// toggleEditable(false);
						// 	addLink({
						// 		onCompleted(response, errors) {
						// 			if (errors != null) {
						// 				return console.log(errors);
						// 			}
						// 		},
						// 		variables: {
						// 			// description: values.description,
						// 			// name: values.name,
						// 			actualUrl: values.actualUrl,
						// 			entityId: values.entityId,
						// 			redirectUrl: values.redirectUrl,
						// 			name: values.name,
						// 			connections: [connectionID],
						// 		},
						// 	});
					})}
				>
					<Stack>
						<Flex gap="sm" align="center">
							<TextInput
								icon={
									isEditable ? (
										<TablerHourglass size={14} color="orange"></TablerHourglass>
									) : (
										<TablerCheck size={14} color="green"></TablerCheck>
									)
								}
								sx={{ flex: "1 1 0" }}
								size="sm"
								// px="md"
								// value={link.name}
								{...form.getInputProps("name")}
								variant="unstyled"
								// variant={isEditable ? "default" : "unstyled"}
								// sx={isEditable ? { borderBottom: "1px solid red" } : {}}
								placeholder="Enter a name to identify this link"
								disabled={!isEditable}
								styles={(theme) => ({
									input: {
										paddingLeft: "12px",
										paddingRight: "12px",
										fontSize: "16px",
										fontWeight: 500,
										borderBottom: isEditable ? "1px solid #ced4da" : undefined,
										"&:focus": {
											borderBottom: isEditable ? "1px solid #037ef3" : undefined,
										},
									},
								})}
								classNames={{ input: "link-name" }}
							/>
							<ApproveLink disabled={isEditable}></ApproveLink>
							<EditLink onSubmit={form.onSubmit} isEditable={isEditable} toggleEditable={toggleEditable}></EditLink>
							{/* <ActionIcon color="red" variant="light" size="md">
								<TablerTrash size={14}></TablerTrash>
							</ActionIcon> */}
							<DeleteLink resetFields={resetFields} isEditing={isEditable}></DeleteLink>
						</Flex>

						<div onClick={!isEditable ? () => goToLink(form.getInputProps("actualUrl").value) : undefined}>
							<TextInput
								icon={<TablerWorld size={14} color="#037ef3"></TablerWorld>}
								size="sm"
								{...form.getInputProps("actualUrl")}
								variant={isEditable ? "default" : "filled"}
								placeholder="Actual link"
								disabled={!isEditable}
								classNames={{ input: !isEditable ? "link-link" : undefined }}
								rightSection={
									!isEditable ? <CopyIcon copyValue={form.getInputProps("actualUrl").value}></CopyIcon> : undefined
								}
							/>
						</div>
						<div onClick={!isEditable ? () => goToLink(form.getInputProps("redirectUrl").value) : undefined}>
							<TextInput
								icon={<TablerSwitch3 size={14} color="#037ef3"></TablerSwitch3>}
								size="sm"
								{...form.getInputProps("redirectUrl")}
								value={"aiesec.lk/" + form.getInputProps("redirectUrl").value}
								onChange={(e) =>
									form.setFieldValue(
										"redirectUrl",
										e.currentTarget.value.startsWith("aiesec.lk/")
											? e.currentTarget.value.replace("aiesec.lk/", "")
											: ""
									)
								}
								variant={isEditable ? "default" : "filled"}
								placeholder="Redirect Link (aiesec.lk link)"
								disabled={!isEditable}
								rightSection={
									!isEditable ? (
										<CopyIcon copyValue={`https://aiesec.lk/${form.getInputProps("redirectUrl").value}`}></CopyIcon>
									) : undefined
								}
								classNames={{ input: !isEditable ? "link-link" : undefined }}
							></TextInput>
						</div>
					</Stack>
				</form>
				{/* {isEditable ? (
					<Button>Submit</Button>
				) : (
					<Button
						variant="outline"
						type="button"
						onClick={(e) => {
							e.preventDefault();
							toggleEditable(true);
						}}
					>
						Edit
					</Button>
				)}
				{isEditable ? (
					<Button type="button" variant="outline" color="red">
						Cancel
					</Button>
				) : (
					<Button
						variant="outline"
						type="button"
						color="red"
						onClick={(e) => {
							e.preventDefault();
							toggleEditable(true);
						}}
					>
						Delete
					</Button>
				)} */}
				{/* <Group position="apart" align="flex-start">
					<Container fluid></Container> */}
				{/* <Stack align="stretch"> */}
				{/* <EditLinkName connectionID={connectionID} linkName={link.name}></EditLinkName> */}
				{/* <EditCategories
							linkId={link.id}
							connectionID={connectionID}
							category={link.category}
							categoryKey={categoryKey}
						></EditCategories> */}
				{/* </Stack> */}
				{/* <ActionIcon
						variant="transparent"
						onClick={() => {
							deleteLink({
								variables: {
									connections: [connectionID],
									id: link.id,
								},
							});
						}}
					>
						<TablerX size={16} color="red" />
					</ActionIcon> */}
				{/* </Group> */}
			</Card>
		</>
	);
};

export default Link;


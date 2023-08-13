import { ActionIcon, Flex, Group, Popover, Text } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { TablerX, TablerTrashX } from "@seamlessc/tabler-icons-react";
import React from "react";

interface DeleteLinkProps {
	isEditing: boolean;
	resetFields: () => void;
}

const DeleteLink: React.FC<DeleteLinkProps> = (props) => {
	const [opened, toggle] = useToggle();
	const executeDelete = () => {
		if (props.isEditing) {
			return props.resetFields();
		}
		if (opened) {
		}
		toggle();
	};

	return (
		<>
			<Popover opened={opened} trapFocus withArrow position="top" closeOnClickOutside={true} width={200}>
				<Popover.Target>
					<ActionIcon
						className="delete-button"
						color="red"
						variant={opened ? "filled" : "light"}
						size="md"
						onClick={executeDelete}
					>
						{props.isEditing ? <TablerX size={14}></TablerX> : <TablerTrashX size={14}></TablerTrashX>}
					</ActionIcon>
				</Popover.Target>
				<Popover.Dropdown sx={{ padding: "12px" }}>
					<ActionIcon onClick={() => toggle()} sx={{ float: "right", marginLeft: "4px", marginBottom: "4px" }}>
						<TablerX size={14}></TablerX>
					</ActionIcon>
					<Text size="sm" color="red">
						Deleting the link is not recoverable! Click again to confirm.
					</Text>
				</Popover.Dropdown>
			</Popover>
		</>
	);
};

export default DeleteLink;


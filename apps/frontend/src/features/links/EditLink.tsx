import { ActionIcon, CloseButton, Flex, Group, Popover, Text } from "@mantine/core";
import { OnSubmit } from "@mantine/form/lib/types";
import { useToggle } from "@mantine/hooks";
import { TablerDeviceFloppy, TablerEdit, TablerX } from "@seamlessc/tabler-icons-react";
import React, { useEffect, useRef } from "react";
import { EditFormInterface } from "./Link";

interface EditLinkProps {
	isEditable: boolean;
	toggleEditable: (value?: React.SetStateAction<boolean> | undefined) => void;
	onSubmit: OnSubmit<EditFormInterface, (values: EditFormInterface) => EditFormInterface>;
}

const EditLink: React.FC<EditLinkProps> = (props) => {
	const [opened, toggle] = useToggle();
	const executeEdit = () => {
		if (opened) {
			props.onSubmit((values) => {
				console.log(values);
			})();
			props.toggleEditable(false);
		}
		toggle();
	};

	return (
		<>
			<Popover opened={opened} withArrow position="top" closeOnClickOutside={true} width={200}>
				<Popover.Target>
					<ActionIcon
						className="edit-button"
						color="blue"
						variant={opened ? "filled" : "light"}
						size="md"
						onClick={props.isEditable ? executeEdit : () => props.toggleEditable(true)}
					>
						{props.isEditable ? (
							<TablerDeviceFloppy size={14}></TablerDeviceFloppy>
						) : (
							<TablerEdit size={14}></TablerEdit>
						)}
					</ActionIcon>
				</Popover.Target>
				<Popover.Dropdown sx={{ padding: "12px" }}>
					<ActionIcon onClick={() => toggle()} sx={{ float: "right", marginLeft: "4px", marginBottom: "4px" }}>
						<TablerX size={14}></TablerX>
					</ActionIcon>
					<Text size="sm">Editing the data will require approval! Click again to confirm.</Text>
				</Popover.Dropdown>
			</Popover>
		</>
	);
};

export default EditLink;


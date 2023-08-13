import { ActionIcon, Flex, Group, Popover, Text } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { TablerX, TablerTrashX, TablerCheck } from "@seamlessc/tabler-icons-react";
import React from "react";

interface ApproveLinkProps {
	disabled: boolean;
}

const ApproveLink: React.FC<ApproveLinkProps> = (props) => {
	const [opened, toggle] = useToggle();
	const executeApprove = () => {
		if (opened) {
		}
		toggle();
	};

	return (
		<>
			<Popover opened={opened} trapFocus withArrow position="top" closeOnClickOutside={true} width={200}>
				<Popover.Target>
					<ActionIcon
						disabled={props.disabled}
						className="approve-button"
						color="green"
						variant={opened ? "filled" : "light"}
						size="md"
						onClick={executeApprove}
					>
						<TablerCheck size={14}></TablerCheck>
					</ActionIcon>
				</Popover.Target>
				<Popover.Dropdown sx={{ padding: "12px" }}>
					<ActionIcon onClick={() => toggle()} sx={{ float: "right", marginLeft: "4px", marginBottom: "4px" }}>
						<TablerX size={14}></TablerX>
					</ActionIcon>
					<Text size="sm" color="green">
						Approve this link? Click again to confirm.
					</Text>
				</Popover.Dropdown>
			</Popover>
		</>
	);
};

export default ApproveLink;


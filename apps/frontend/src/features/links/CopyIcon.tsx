import { ActionIcon, Popover, Text } from "@mantine/core";
import { useDisclosure, useToggle } from "@mantine/hooks";
import { TablerCopy } from "@seamlessc/tabler-icons-react";
import React from "react";

interface CopyIconProps {
	copyValue: string;
}

const CopyIcon: React.FC<CopyIconProps> = (props) => {
	const [opened, toggle] = useToggle();
	return (
		<Popover opened={opened} closeOnClickOutside={true} withArrow>
			<Popover.Target>
				<ActionIcon
					variant="light"
					color="blue"
					onClick={(e) => {
						toggle(true);
						navigator.clipboard.writeText(props.copyValue);
						setTimeout(() => {
							toggle(false);
						}, 1000);
						e.stopPropagation();
					}}
				>
					<TablerCopy size={16} />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown sx={{ pointerEvents: "none" }}>
				<Text size="sm">Copied!</Text>
			</Popover.Dropdown>
		</Popover>
	);
};

export default CopyIcon;


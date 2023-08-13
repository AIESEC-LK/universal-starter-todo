// import { TextInput, TextInputProps } from "@mantine/core";
// import { Icon, TablerWorld } from "@seamlessc/tabler-icons-react";
// import React from "react";
// import goToLink from "../_common/util/goToLink";
// import CopyIcon from "./CopyIcon";

// interface LinkInputProps {
// 	isEditable: boolean;
// 	Icon: Icon;
// 	inputProps: any;
// 	value: string;
// 	copyValue: string;
// 	textInputProps?: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
// }

// const LinkInput: React.FC<LinkInputProps> = ({ value, isEditable, Icon, inputProps, copyValue, textInputProps }) => {
// 	return (
// 		<div onClick={!isEditable ? () => goToLink(value) : undefined}>
// 			<TextInput
// 				icon={<Icon size={14} color="#037ef3"></Icon>}
// 				size="sm"
// 				{...textInputProps}
// 				{...inputProps}
// 				variant={isEditable ? "default" : "filled"}
// 				// placeholder="Actual link"
// 				disabled={!isEditable}
// 				classNames={{ input: "link-link" }}
// 				rightSection={!isEditable ? <CopyIcon copyValue={copyValue}></CopyIcon> : undefined}
// 			/>
// 		</div>
// 	);
// };

// export default LinkInput;

import React from "react";

interface LinkInputProps {}

const LinkInput: React.FC<LinkInputProps> = (props) => {
	return <></>;
};

export default LinkInput;


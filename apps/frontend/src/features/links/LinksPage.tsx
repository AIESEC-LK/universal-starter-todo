import React from "react";
import { LinksQuery } from "../../__gen__/LinksQuery.graphql";
import QueryFragContainer from "../_common/components/graphql-helpers/QueryFragContainer";
import Links, { linksQ } from "./Links";

interface LinksPageProps {}

export const COUNT = 5;
const LinksPage: React.FC<LinksPageProps> = (props) => {
	return (
		<>
			<QueryFragContainer<LinksQuery>
				query={linksQ}
				variables={{ first: COUNT }}
				render={(data) => <Links keys={data}></Links>}
			></QueryFragContainer>
		</>
	);
};

export default LinksPage;


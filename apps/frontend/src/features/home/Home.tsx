import { Container } from "@mantine/core";
import React from "react";
import QueryFragContainer from "../_common/components/graphql-helpers/QueryFragContainer";
import Links, { linksQ } from "../links/Links";
import { LinksQuery } from "../../__gen__/LinksQuery.graphql";
import LinksPage from "../links/LinksPage";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<LinksPage></LinksPage>
		</>
	);
};

export default Home;

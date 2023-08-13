import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";

import { Link } from "../entities/link.entity";

@InputType()
export class UpdateLink extends UpdateType(Link, []) {
	// Add your own fields here
}


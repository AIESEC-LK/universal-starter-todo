import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";

import { Link } from "../entities/link.entity";

@InputType()
export class CreateLink extends CreateType(Link, ["approved", "createdBy"]) {
	// Add your own fields here
}


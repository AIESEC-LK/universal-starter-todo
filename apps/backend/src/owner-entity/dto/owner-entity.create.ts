import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";

import { OwnerEntity } from "../entities/owner-entity.entity";

@InputType()
export class CreateOwnerEntity extends CreateType(OwnerEntity, []) {
	// Add your own fields here
}


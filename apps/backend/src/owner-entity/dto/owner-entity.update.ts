import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";

import { OwnerEntity } from "../entities/owner-entity.entity";

@InputType()
export class UpdateOwnerEntity extends UpdateType(OwnerEntity, []) {
	// Add your own fields here
}


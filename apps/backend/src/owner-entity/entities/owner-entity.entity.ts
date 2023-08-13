import { ObjectType } from "@nestjs/graphql";
import { Entity } from "typeorm";
import { BaseEntity, CFF } from "@vizorous/nest-query-utils";

@ObjectType()
@Entity()
export class OwnerEntity extends BaseEntity {
	@CFF({ description: "Owner Entity" })
	name: string;
}


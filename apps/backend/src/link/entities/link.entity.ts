import { ObjectType } from "@nestjs/graphql";
import { Entity, ManyToOne } from "typeorm";
import { BaseEntity, CFF, CFFID } from "@vizorous/nest-query-utils";
import { OwnerEntity } from "src/owner-entity/entities/owner-entity.entity";
import { FilterableRelation } from "@vizorous/nestjs-query-graphql";

@ObjectType()
@Entity()
@FilterableRelation("entity", () => OwnerEntity, { disableRemove: true, nullable: true })
export class Link extends BaseEntity {
	@CFF({ description: "Link  name" })
	name: string;

	@CFF()
	actualUrl: string;

	@CFF({ columnOptions: { unique: true } })
	redirectUrl: string;

	// This a OnetoMany relation inside TypeORM (DB Side).
	// For this to work, ManyToOne relation is required in the other entity.
	// subTasks field will contain a list of subtasks.
	// @OneToMany(() => SubTask, (subTask) => subTask.todo)
	// subTasks: SubTask[];
	@ManyToOne(() => OwnerEntity, { cascade: true, eager: true })
	entity: OwnerEntity;

	@CFFID()
	entityId: string;

	// @CFF()
	// expiryDate: Date;

	@CFF({ columnOptions: { default: false } })
	approved: boolean;

	@CFF({ columnOptions: { default: "Vikum" } })
	createdBy: string;
}


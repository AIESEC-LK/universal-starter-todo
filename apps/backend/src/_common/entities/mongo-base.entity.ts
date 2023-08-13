// import { ID, ObjectType } from "@nestjs/graphql";
// import { FilterableField } from "@vizorous/nestjs-query-graphql";
// import { Expose } from "class-transformer";
// import {
// 	CreateDateColumn,
// 	DeleteDateColumn,
// 	Entity,
// 	ObjectID,
// 	ObjectIdColumn,
// 	PrimaryGeneratedColumn,
// 	UpdateDateColumn,
// } from "typeorm";
// import { IDExpose } from "./ID";
// @ObjectType()
// @Entity()
// export class MongoBase {
// 	@IDExpose(() => ID, { idOptions: { allowedComparisons: ["eq", "in"] } })
// 	@ObjectIdColumn()
// 	id: ObjectID;

// 	@FilterableField()
// 	@Expose()
// 	@CreateDateColumn()
// 	createdAt: Date;

// 	@FilterableField()
// 	@Expose()
// 	@UpdateDateColumn()
// 	updatedAt: Date;

// 	@DeleteDateColumn()
// 	deletedAt: Date;
// }


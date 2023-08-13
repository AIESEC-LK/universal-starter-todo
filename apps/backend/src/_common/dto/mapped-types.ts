// import { Type } from "@nestjs/common";
// import { InputType, IntersectionType, OmitType, PartialType, PickType } from "@nestjs/graphql";
// import { ClassDecoratorFactory } from "@nestjs/graphql/dist/interfaces/class-decorator-factory.interface";
// import { MongoBase } from "../entities/mongo-base.entity";

// export type CreateReturn<T extends MongoBase> = Omit<T, "id" | "createdAt" | "updatedAt">;
// export type CreateReturnWOmit<T extends MongoBase, K extends keyof T> = Omit<T, "id" | "createdAt" | "updatedAt" | K>;

// export type CreateTypeReturn<T extends MongoBase> = Type<CreateReturn<T>>;
// export type CreateTypeReturnWOmit<T extends MongoBase, K extends keyof T> = Type<CreateReturnWOmit<T, K>>;

// /**
//  * @description Creates a DTO class for creation with unnecessary fields such as createdAt, updatedAt, etc. omitted. You can omit other fields as well by passing a list of fields to omit to omitKeys.
//  * @param classRef Type of the class, must be a class that extendsMongoBase
//  * @param omitKeys Keys to omit from the create operations, default is ["id", "createdAt", "updatedAt"], provided keys will be added to this list
//  * @param decorator Which decorator to use, default to InputType
//  * @returns InputType with unnecessary fields for create operations omitted
//  * @example
// //@InputType() //make sure to uncomment this line
// export class CreateTodo extends CreateType(Todo, ["done","subTasks","category"]) {
// 	//you can add more custom fields here
// }
//  */
// export function CreateType<T extends MongoBase>(classRef: Type<T>): CreateTypeReturn<T>;
// export function CreateType<T extends MongoBase, K extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys: readonly K[]
// ): CreateTypeReturnWOmit<T, K>;

// export function CreateType<T extends MongoBase, K extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys: readonly K[],
// 	decorator: ClassDecoratorFactory
// ): CreateTypeReturnWOmit<T, K>;
// export function CreateType<T extends MongoBase, K extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys?: readonly K[],
// 	decorator?: ClassDecoratorFactory
// ): CreateTypeReturn<T> | CreateTypeReturnWOmit<T, K> {
// 	if (decorator === undefined) decorator = InputType;
// 	if (omitKeys === undefined) {
// 		return OmitType(classRef, ["id", "createdAt", "updatedAt", "deletedAt"], decorator) as CreateTypeReturn<T>;
// 	}
// 	return OmitType(
// 		classRef,
// 		["id", "createdAt", "updatedAt", "deletedAt", ...omitKeys],
// 		decorator
// 	) as CreateTypeReturnWOmit<T, K>;
// }
// /**
//  * @description Creates a DTO class for update with unnecessary fields omitted AND required fields set. You can omit other fields as well by passing a list of fields to omit to omitKeys.
//  * @param classRef Type of the class, must be a class that extendsMongoBase
//  * @param omitKeys Keys to omit from the update operations, no default set, provided keys will be used to omit
//  * @param pickKeys Keys to be set as required in the DTO, default is ["id"], provided keys will be added to this list. ALL OTHER KEYS WILL BE OPTIONAL BY DEFAULT.
//  * @param decorator Which decorator to use, default to InputType
//  * @returns InputType with unnecessary fields for update operations omitted and required fields set
//  * @example
// //@InputType() //make sure to uncomment this line
// export class UpdateTod extends UpdateType(Todo, [ "category"],["done"]) {
// 	//you can add more custom fields here
// }
//  */
// export function UpdateType<T extends MongoBase>(classRef: Type<T>): Type<Partial<CreateReturn<T>> & Pick<T, "id">>;
// export function UpdateType<T extends MongoBase, OK extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys: readonly OK[]
// ): Type<Partial<CreateReturnWOmit<T, OK>> & Pick<T, "id">>;
// export function UpdateType<T extends MongoBase, OK extends keyof T, PK extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys: readonly OK[],
// 	pickKeys: readonly PK[]
// ): Type<Partial<CreateReturnWOmit<T, OK>> & Pick<T, "id" | PK>>;
// export function UpdateType<T extends MongoBase, OK extends keyof T, PK extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys: readonly OK[],
// 	pickKeys: readonly PK[],
// 	decorator: ClassDecoratorFactory
// ): Type<Partial<CreateReturnWOmit<T, OK>> & Pick<T, "id" | OK>>;
// export function UpdateType<T extends MongoBase, OK extends keyof T, PK extends keyof T>(
// 	classRef: Type<T>,
// 	omitKeys?: readonly OK[],
// 	pickKeys?: readonly PK[],
// 	decorator?: ClassDecoratorFactory
// ):
// 	| Type<Partial<CreateReturnWOmit<T, OK>> & Pick<T, "id" | OK>>
// 	| Type<Partial<CreateReturnWOmit<T, OK>> & Pick<T, "id">>
// 	| Type<Partial<CreateReturn<T>> & Pick<T, "id">> {
// 	if (decorator === undefined) decorator = InputType;
// 	if (omitKeys === undefined && pickKeys === undefined) {
// 		return IntersectionType(PartialType(CreateType(classRef), decorator), PickType(classRef, ["id"], decorator));
// 	} else if (omitKeys !== undefined && pickKeys === undefined) {
// 		return IntersectionType(
// 			PartialType(CreateType(classRef, omitKeys), decorator),
// 			PickType(classRef, ["id"], decorator)
// 		);
// 	} else if (omitKeys === undefined && pickKeys !== undefined) {
// 		return IntersectionType(
// 			PartialType(CreateType(classRef), decorator),
// 			PickType(classRef, ["id", ...pickKeys], decorator)
// 		);
// 	}
// 	return IntersectionType(
// 		PartialType(CreateType(classRef, omitKeys, decorator), decorator),
// 		PickType(classRef, ["id", ...pickKeys], decorator)
// 	);
// }


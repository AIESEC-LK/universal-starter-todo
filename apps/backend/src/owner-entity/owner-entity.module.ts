import { Module } from "@nestjs/common";
import { OwnerEntityService } from "./owner-entity.service";
import { OwnerEntityResolver } from "./owner-entity.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateOwnerEntity } from "./dto/owner-entity.create";
import { UpdateOwnerEntity } from "./dto/owner-entity.update";
import { OwnerEntity } from "./entities/owner-entity.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([OwnerEntity]);

@Module({
	providers: [OwnerEntityResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [OwnerEntityService],
			resolvers: [
				{
					DTOClass: OwnerEntity,
					EntityClass: OwnerEntity,
					UpdateDTOClass: UpdateOwnerEntity,
					CreateDTOClass: CreateOwnerEntity,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: OwnerEntityService,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					create: { many: { disabled: true } },
					update: { many: { disabled: true } },
					delete: { many: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class OwnerEntityModule {}


import { Module } from "@nestjs/common";
import { LinkService } from "./link.service";
import { LinkResolver } from "./link.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateLink } from "./dto/link.create";
import { UpdateLink } from "./dto/link.update";
import { Link } from "./entities/link.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Link]);

@Module({
	providers: [LinkResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [LinkService],
			resolvers: [
				{
					DTOClass: Link,
					EntityClass: Link,
					UpdateDTOClass: UpdateLink,
					CreateDTOClass: CreateLink,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: LinkService,
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
export class LinkModule {}


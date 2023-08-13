import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { OwnerEntity } from "./entities/owner-entity.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(OwnerEntity)
export class OwnerEntityService extends TypeOrmQueryService<OwnerEntity> {
	constructor(@InjectRepository(OwnerEntity) repo: Repository<OwnerEntity>) {
		super(repo);
	}
	// async query(query: Query<OwnerEntity>): Promise<OwnerEntity[]> {
	// you can override the default query here.
	// return super.query(query);
	// }
	// custom service method
	// async getAllIds():Promise<string[]|[]>{
	// const data = await this.repo
	// 	.find({select: ["name"]})
	// const idList=data.map((todo) => 
	// 	todo.id);
	// return idList;
	// }
}


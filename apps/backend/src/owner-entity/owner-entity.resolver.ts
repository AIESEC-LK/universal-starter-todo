import { Resolver, Args, Query } from "@nestjs/graphql";
import { OwnerEntity } from "./entities/owner-entity.entity";
import { OwnerEntityService } from "./owner-entity.service";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => OwnerEntity)
export class OwnerEntityResolver {
  //  constructor(readonly service: OwnerEntityService) {}
  //  @Query(() => [String], { name: "getAllowner-entityIDs", nullable: "items" })
  //  async getAllOwnerEntityIDs() {
  //  return this.service.getAllIDs();
}


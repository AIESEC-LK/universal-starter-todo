import { Resolver, Args, Query } from "@nestjs/graphql";
import { Link } from "./entities/link.entity";
import { LinkService } from "./link.service";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Link)
export class LinkResolver {
  //  constructor(readonly service: LinkService) {}
  //  @Query(() => [String], { name: "getAlllinkIDs", nullable: "items" })
  //  async getAllLinkIDs() {
  //  return this.service.getAllIDs();
}


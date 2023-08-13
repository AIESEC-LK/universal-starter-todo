import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";

import { User } from "../entities/user.entity";

@InputType()
export class CreateUser extends CreateType(User, ["aiesecEmail"]) {}

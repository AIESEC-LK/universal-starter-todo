import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";

import { User } from "../entities/user.entity";

@InputType()
export class UpdateUser extends UpdateType(User) {}

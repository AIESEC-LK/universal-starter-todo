import { HttpException, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { DateScalar } from "./_common/scalars/date.scalar";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { LinkModule } from "./link/link.module";
import { OwnerEntityModule } from "./owner-entity/owner-entity.module";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: [".env", ".env.dev", ".env.prod"], isGlobal: true, cache: true }),
		TypeOrmModule.forRoot({
			type: "cockroachdb",
			url: "postgresql://aiesec:syOLtb2_rITM0f9tkbBLrQ@asl-link-gen-test-2083.7s5.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full",
			synchronize: true,
			ssl: true,
			autoLoadEntities: true,
		}),
		GraphQLModule.forRoot<MercuriusDriverConfig>({
			driver: MercuriusDriver,
			errorFormatter: (execution) => {
				const [error] = execution.errors; // take first error
				const originalError = error?.originalError;
				if (originalError instanceof HttpException)
					return {
						statusCode: originalError.getStatus(),
						response: { data: originalError.getResponse() as any },
					};
				return { statusCode: 400, response: execution };
			},
			graphiql: false,
			autoSchemaFile: "./../frontend/schema.graphql",
		}),
		// UserModule,
		// TodoModule,
		// SubTaskModule,
		// CategoryModule,
		LinkModule,
		OwnerEntityModule,
	],
	controllers: [],
	providers: [DateScalar],
})
export class AppModule {}

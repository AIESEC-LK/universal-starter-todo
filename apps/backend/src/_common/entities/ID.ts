import { ReturnTypeFunc } from "@nestjs/graphql";
import { IDField, IDFieldOptions } from "@vizorous/nestjs-query-graphql";
import { Expose, ExposeOptions } from "class-transformer";

export function IDExpose(
	returnTypeFunc: ReturnTypeFunc,
	options?: { idOptions?: IDFieldOptions; exposeOptions?: ExposeOptions }
): any {
	const IDFieldFn = IDField(returnTypeFunc, options?.idOptions);
	const ExposeFn = Expose(options?.exposeOptions);
	return (target: Object, propertyKey: string | symbol) => {
		IDFieldFn(target, propertyKey);
		ExposeFn(target, propertyKey);
	};
}
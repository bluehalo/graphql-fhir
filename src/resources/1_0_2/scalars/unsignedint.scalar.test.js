const UnsignedIntScalar = require('./unsignedint.scalar');
const { GraphQLError } = require('graphql');

describe('Unsigned Int Scalar Test', () => {

	describe('parseLiteral', () => {
		test("should return unsigned integers", () => {
			expect(UnsignedIntScalar.parseLiteral({value: "0"})).toEqual(0);
			expect(UnsignedIntScalar.parseLiteral({value: "1024"})).toEqual(1024);
			expect(UnsignedIntScalar.parseLiteral({value: Number.MAX_SAFE_INTEGER.toString()})).toEqual(Number.MAX_SAFE_INTEGER);
		});
		test("should return error", () => {
			expect(UnsignedIntScalar.parseLiteral({value: "-1"})).toBeInstanceOf(GraphQLError);
			expect(UnsignedIntScalar.parseLiteral({value: 1024})).toBeInstanceOf(GraphQLError);
		});
	});

	describe('parseValue', () => {
		test("should return unsigned integers", () => {
			expect(UnsignedIntScalar.parseValue("0", {})).toEqual(0);
			expect(UnsignedIntScalar.parseValue("1024", {})).toEqual(1024);
			expect(UnsignedIntScalar.parseValue(Number.MAX_SAFE_INTEGER.toString(), {})).toEqual(Number.MAX_SAFE_INTEGER);
		});
		test("should return error", () => {
			expect(UnsignedIntScalar.parseValue("-1", {})).toBeInstanceOf(GraphQLError);
			expect(UnsignedIntScalar.parseValue(1024, {})).toBeInstanceOf(GraphQLError);
		});
	});
});

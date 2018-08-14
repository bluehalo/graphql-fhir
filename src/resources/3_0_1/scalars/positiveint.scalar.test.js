const PositiveIntScalar = require('./positiveint.scalar');
const { GraphQLError } = require('graphql');

describe('Positive Int Scalar Test', () => {

	describe('parseLiteral', () => {
		test("should return positive integers", () => {
			expect(PositiveIntScalar.parseLiteral({value: "1024"})).toEqual(1024);
			expect(PositiveIntScalar.parseLiteral({value: Number.MAX_SAFE_INTEGER.toString()})).toEqual(Number.MAX_SAFE_INTEGER);
		});
		test("should return error", () => {
			expect(PositiveIntScalar.parseLiteral({value: "0"})).toBeInstanceOf(GraphQLError);
			expect(PositiveIntScalar.parseLiteral({value: "-1"})).toBeInstanceOf(GraphQLError);
			expect(PositiveIntScalar.parseLiteral({value: 1024})).toBeInstanceOf(GraphQLError);
		});
	});

	describe('parseValue', () => {
		test("should return positive integers", () => {
			expect(PositiveIntScalar.parseValue("1024", {})).toEqual(1024);
			expect(PositiveIntScalar.parseValue(Number.MAX_SAFE_INTEGER.toString(), {})).toEqual(Number.MAX_SAFE_INTEGER);
		});
		test("should return error", () => {
			expect(PositiveIntScalar.parseValue("0", {})).toBeInstanceOf(GraphQLError);
			expect(PositiveIntScalar.parseValue("-1", {})).toBeInstanceOf(GraphQLError);
			expect(PositiveIntScalar.parseValue(1024, {})).toBeInstanceOf(GraphQLError);
		});
	});
});

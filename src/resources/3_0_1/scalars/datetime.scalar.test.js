const DatetimeScalar = require('./datetime.scalar');
const { GraphQLError } = require('graphql');

describe('Date Time Scalar Test', () => {

	describe('parseLiteral', () => {
		test("should return valid date time", () => {
			expect(DatetimeScalar.parseLiteral({value: "2018-12-31"})).toEqual("2018-12-31T00:00:00.0000-05:00");
			expect(DatetimeScalar.parseLiteral({value: "2018-12"})).toEqual("2018-12-01T00:00:00.0000-05:00");
			expect(DatetimeScalar.parseLiteral({value: "2018-12-01T01:01:02.0000-05:00"})).toEqual("2018-12-01T01:01:02.0000-05:00");
			expect(DatetimeScalar.parseLiteral({value: "2018-12-01T00:00:00.0000-05:00"})).toEqual("2018-12-01T00:00:00.0000-05:00");
		});
		test("should return error", () => {
			expect(DatetimeScalar.parseLiteral({value: "2018-12-31T24:00:00.0000-05:00"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: "2018-00"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: "2018-12-32"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: "2018-12-00"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: "2018-12-31T00:60:00.0000-05:00"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: "2018-12-31T01:01:60.0000-05:00"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: "2018-13-31T00:00:00.0000-05:00"})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseLiteral({value: 20292920})).toBeInstanceOf(GraphQLError);
		});
	});

	describe('parseValue', () => {
		test("should return valid date time", () => {
			expect(DatetimeScalar.parseValue("2018-12-31", {})).toEqual("2018-12-31T00:00:00.0000-05:00");
			expect(DatetimeScalar.parseValue("2018-12", {})).toEqual("2018-12-01T00:00:00.0000-05:00");
			expect(DatetimeScalar.parseValue("2018-12-01T01:01:02.0000-05:00", {})).toEqual("2018-12-01T01:01:02.0000-05:00");
			expect(DatetimeScalar.parseValue("2018-12-01T00:00:00.0000-05:00", {})).toEqual("2018-12-01T00:00:00.0000-05:00");
		});
		test("should return error", () => {
			expect(DatetimeScalar.parseValue("2018-12-31T24:00:00.0000-05:00", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue("2018-00", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue("2018-12-32", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue("2018-12-00", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue("2018-12-31T00:60:00.0000-05:00", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue("2018-12-31T01:01:60.0000-05:00", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue("2018-13-31T00:00:00.0000-05:00", {})).toBeInstanceOf(GraphQLError);
			expect(DatetimeScalar.parseValue(20292920, {})).toBeInstanceOf(GraphQLError);
		});
	});
});

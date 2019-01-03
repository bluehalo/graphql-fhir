const DateScalar = require('./date.scalar');
const { GraphQLError } = require('graphql');

describe('Date Scalar Test', () => {
	describe('parseLiteral', () => {
		test('should return valid date', () => {
			expect(DateScalar.parseLiteral({ value: '2018-12' })).toEqual(
				'2018-12-01',
			);
			expect(DateScalar.parseLiteral({ value: '2018-12-31' })).toEqual(
				'2018-12-31',
			);
		});
		test('should return error', () => {
			expect(DateScalar.parseLiteral({ value: '2018-13' })).toBeInstanceOf(
				GraphQLError,
			);
			expect(DateScalar.parseLiteral({ value: '2018-00' })).toBeInstanceOf(
				GraphQLError,
			);
			expect(DateScalar.parseLiteral({ value: '2018-12-32' })).toBeInstanceOf(
				GraphQLError,
			);
			expect(DateScalar.parseLiteral({ value: '2018-12-00' })).toBeInstanceOf(
				GraphQLError,
			);
			expect(DateScalar.parseLiteral({ value: 20292920 })).toBeInstanceOf(
				GraphQLError,
			);
		});
	});

	describe('parseValue', () => {
		test('should return valid date', () => {
			expect(DateScalar.parseValue('2018-12', {})).toEqual('2018-12-01');
			expect(DateScalar.parseValue('2018-12-31', {})).toEqual('2018-12-31');
		});
		test('should return error', () => {
			expect(DateScalar.parseValue('2018-13', {})).toBeInstanceOf(GraphQLError);
			expect(DateScalar.parseValue('2018-00', {})).toBeInstanceOf(GraphQLError);
			expect(DateScalar.parseValue('2018-12-32', {})).toBeInstanceOf(
				GraphQLError,
			);
			expect(DateScalar.parseValue('2018-12-00', {})).toBeInstanceOf(
				GraphQLError,
			);
			expect(DateScalar.parseValue(392929239, {})).toBeInstanceOf(GraphQLError);
		});
	});
});

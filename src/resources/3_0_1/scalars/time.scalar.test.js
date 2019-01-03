const TimeScalar = require('./time.scalar');
const { GraphQLError } = require('graphql');

describe('Time Scalar Test', () => {
	describe('parseLiteral', () => {
		test('should return valid time', () => {
			expect(TimeScalar.parseLiteral({ value: '02:01:59' })).toEqual(
				'02:01:59',
			);
			expect(TimeScalar.parseLiteral({ value: '12:59:00' })).toEqual(
				'12:59:00',
			);
		});
		test('should return error', () => {
			expect(TimeScalar.parseLiteral({ value: '24:00:00' })).toBeInstanceOf(
				GraphQLError,
			);
			expect(TimeScalar.parseLiteral({ value: '00:60:00' })).toBeInstanceOf(
				GraphQLError,
			);
			expect(TimeScalar.parseLiteral({ value: '01:01:60' })).toBeInstanceOf(
				GraphQLError,
			);
		});
	});

	describe('parseValue', () => {
		test('should return valid time', () => {
			expect(TimeScalar.parseValue('02:01:59', {})).toEqual('02:01:59');
			expect(TimeScalar.parseValue('12:59:00', {})).toEqual('12:59:00');
		});
		test('should return error', () => {
			expect(TimeScalar.parseValue('24:00:00', {})).toBeInstanceOf(
				GraphQLError,
			);
			expect(TimeScalar.parseValue('00:60:00', {})).toBeInstanceOf(
				GraphQLError,
			);
			expect(TimeScalar.parseValue('01:01:60', {})).toBeInstanceOf(
				GraphQLError,
			);
		});
	});
});

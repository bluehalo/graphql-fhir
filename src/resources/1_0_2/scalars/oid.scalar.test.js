const OidScalar = require('./oid.scalar');
const { GraphQLError } = require('graphql');

describe('OID Scalar Test', () => {
	describe('parseLiteral', () => {
		test('should return valid OID', () => {
			expect(OidScalar.parseLiteral({ value: 'urn:oid:1.2.3.4.5' })).toEqual(
				'urn:oid:1.2.3.4.5',
			);
		});
		test('should return error', () => {
			expect(
				OidScalar.parseLiteral({ value: 'urn:oids:1.2.3.4.5' }),
			).toBeInstanceOf(GraphQLError);
			expect(
				OidScalar.parseLiteral({ value: 'urns:oid:1.2.3.4.5' }),
			).toBeInstanceOf(GraphQLError);
			expect(OidScalar.parseLiteral({ value: 'oid:1.2.3.4.5' })).toBeInstanceOf(
				GraphQLError,
			);
		});
	});

	describe('parseValue', () => {
		test('should return valid OID', () => {
			expect(OidScalar.parseValue('urn:oid:1.2.3.4.5', {})).toEqual(
				'urn:oid:1.2.3.4.5',
			);
		});
		test('should return error', () => {
			expect(OidScalar.parseLiteral('urn:oids:1.2.3.4.5', {})).toBeInstanceOf(
				GraphQLError,
			);
			expect(OidScalar.parseLiteral('urns:oid:1.2.3.4.5', {})).toBeInstanceOf(
				GraphQLError,
			);
			expect(OidScalar.parseLiteral('oid:1.2.3.4.5', {})).toBeInstanceOf(
				GraphQLError,
			);
		});
	});
});

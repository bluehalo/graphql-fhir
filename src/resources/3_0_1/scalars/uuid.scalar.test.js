const UuidScalar = require('./uuid.scalar');
const { GraphQLError } = require('graphql');

describe('UUID Scalar Test', () => {
	describe('parseLiteral', () => {
		test('should return valid UUID', () => {
			expect(
				UuidScalar.parseLiteral({
					value: 'urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7',
				}),
			).toEqual('urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7');
		});
		test('should return error', () => {
			expect(
				UuidScalar.parseLiteral({
					value: 'urns:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7',
				}),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral({
					value: 'urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee1208',
				}),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral({
					value: 'urn:uuid:53fefa32-fcbb-4ff8-8a-55ee120877b7',
				}),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral({
					value: 'urn:uuid:53fefa32-fcbb-48-8a92-55ee120877b7',
				}),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral({
					value: 'urn:uuid:53fefa32-fb-4ff8-8a92-55ee120877b7',
				}),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral({
					value: 'urn:uuid:53fe2-fcbb-4ff8-8a92-55ee120877b7',
				}),
			).toBeInstanceOf(GraphQLError);
		});
	});

	describe('parseValue', () => {
		test('should return valid UUID', () => {
			expect(
				UuidScalar.parseValue(
					'urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7',
					{},
				),
			).toEqual('urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7');
		});
		test('should return error', () => {
			expect(
				UuidScalar.parseLiteral(
					'urns:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7',
					{},
				),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral(
					'urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee1208',
					{},
				),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral(
					'urn:uuid:53fefa32-fcbb-4ff8-8a-55ee120877b7',
					{},
				),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral(
					'urn:uuid:53fefa32-fcbb-48-8a92-55ee120877b7',
					{},
				),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral(
					'urn:uuid:53fefa32-fb-4ff8-8a92-55ee120877b7',
					{},
				),
			).toBeInstanceOf(GraphQLError);
			expect(
				UuidScalar.parseLiteral(
					'urn:uuid:53fe2-fcbb-4ff8-8a92-55ee120877b7',
					{},
				),
			).toBeInstanceOf(GraphQLError);
		});
	});
});

const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Claim.missingTeeth Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimMissingTeeth',
	description:
		'A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/teeth
			tooth: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description: 'The code identifying which tooth is missing.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/missing-tooth-reason
			reason: {
				type: require('./coding.schema'),
				description: 'Missing reason may be: E-extraction, O-other.',
			},
			extractionDate: {
				type: DateScalar,
				description:
					'The date of the extraction either known from records or patient reported estimate.',
			},
			_extractionDate: {
				type: require('./element.schema'),
				description:
					'The date of the extraction either known from records or patient reported estimate.',
			},
		}),
});

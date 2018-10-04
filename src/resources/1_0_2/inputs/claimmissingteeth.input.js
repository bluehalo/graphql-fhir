const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Claim.missingTeeth Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimMissingTeeth_Input',
	description: 'A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/teeth
		tooth: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The code identifying which tooth is missing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/missing-tooth-reason
		reason: {
			type: require('./coding.input'),
			description: 'Missing reason may be: E-extraction, O-other.'
		},
		extractionDate: {
			type: DateScalar,
			description: 'The date of the extraction either known from records or patient reported estimate.'
		},
		_extractionDate: {
			type: require('./element.input'),
			description: 'The date of the extraction either known from records or patient reported estimate.'
		}
	})
});

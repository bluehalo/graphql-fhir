const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Observation.referenceRange Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ObservationReferenceRange_Input',
	description: 'Guidance on how to interpret the value by comparison to a normal or recommended range.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		low: {
			type: require('./quantity.input'),
			description: 'The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).'
		},
		high: {
			type: require('./quantity.input'),
			description: 'The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/referencerange-meaning
		type: {
			type: require('./codeableconcept.input'),
			description: 'Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/referencerange-appliesto
		appliesTo: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.'
		},
		age: {
			type: require('./range.input'),
			description: 'The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.'
		},
		text: {
			type: GraphQLString,
			description: 'Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of \'Negative\' or a list or table of \'normals\'.'
		},
		_text: {
			type: require('./element.input'),
			description: 'Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of \'Negative\' or a list or table of \'normals\'.'
		}
	})
});

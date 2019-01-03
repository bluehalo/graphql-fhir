const CodeScalar = require('../scalars/code.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ContactPoint Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContactPoint',
	description: 'Base StructureDefinition for ContactPoint Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contact-point-system
		system: {
			type: CodeScalar,
			description: 'Telecommunications form for contact point - what communications system is required to make use of the contact.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'Telecommunications form for contact point - what communications system is required to make use of the contact.'
		},
		value: {
			type: GraphQLString,
			description: 'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contact-point-use
		use: {
			type: CodeScalar,
			description: 'Identifies the purpose for the contact point.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Identifies the purpose for the contact point.'
		},
		rank: {
			type: PositiveIntScalar,
			description: 'Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.'
		},
		_rank: {
			type: require('./element.schema'),
			description: 'Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period when the contact point was/is in use.'
		}
	})
});

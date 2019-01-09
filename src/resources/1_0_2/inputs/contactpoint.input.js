const {
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ContactPoint Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContactPoint_Input',
	description: 'Base StructureDefinition for ContactPoint Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_system: {
			type: require('./element.input.js'),
			description:
				'Telecommunications form for contact point - what communications system is required to make use of the contact.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contact-point-system
		system: {
			type: CodeScalar,
			description:
				'Telecommunications form for contact point - what communications system is required to make use of the contact.',
		},
		_value: {
			type: require('./element.input.js'),
			description:
				'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).',
		},
		value: {
			type: GraphQLString,
			description:
				'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).',
		},
		_use: {
			type: require('./element.input.js'),
			description: 'Identifies the purpose for the contact point.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contact-point-use
		use: {
			type: CodeScalar,
			description: 'Identifies the purpose for the contact point.',
		},
		_rank: {
			type: require('./element.input.js'),
			description:
				'Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.',
		},
		rank: {
			type: PositiveIntScalar,
			description:
				'Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'Time period when the contact point was/is in use.',
		},
	}),
});

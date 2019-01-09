const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary DiagnosticOrderevent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticOrderevent_Input',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status for the event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status for the event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-event
		description: {
			type: require('./codeableconcept.input.js'),
			description:
				'Additional information about the event that occurred - e.g. if the status remained unchanged.',
		},
		_dateTime: {
			type: require('./element.input.js'),
			description: 'The date/time at which the event occurred.',
		},
		dateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date/time at which the event occurred.',
		},
		actor: {
			type: GraphQLString,
			description:
				'The person responsible for performing or recording the action.',
		},
	}),
});

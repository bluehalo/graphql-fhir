const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary HealthcareServiceavailableTime Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HealthcareServiceavailableTime_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_daysOfWeek: {
			type: require('./element.input.js'),
			description:
				'Indicates which days of the week are available between the start and end Times.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/days-of-week
		daysOfWeek: {
			type: new GraphQLList(CodeScalar),
			description:
				'Indicates which days of the week are available between the start and end Times.',
		},
		_allDay: {
			type: require('./element.input.js'),
			description:
				'Is this always available? (hence times are irrelevant) e.g. 24 hour service.',
		},
		allDay: {
			type: GraphQLBoolean,
			description:
				'Is this always available? (hence times are irrelevant) e.g. 24 hour service.',
		},
		_availableStartTime: {
			type: require('./element.input.js'),
			description:
				'The opening time of day. Note: If the AllDay flag is set, then this time is ignored.',
		},
		availableStartTime: {
			type: TimeScalar,
			description:
				'The opening time of day. Note: If the AllDay flag is set, then this time is ignored.',
		},
		_availableEndTime: {
			type: require('./element.input.js'),
			description:
				'The closing time of day. Note: If the AllDay flag is set, then this time is ignored.',
		},
		availableEndTime: {
			type: TimeScalar,
			description:
				'The closing time of day. Note: If the AllDay flag is set, then this time is ignored.',
		},
	}),
});

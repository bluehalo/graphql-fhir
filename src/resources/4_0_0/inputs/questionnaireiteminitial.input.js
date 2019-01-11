const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Questionnaireiteminitial Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Questionnaireiteminitial_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_valueBoolean: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The actual value to for an initial answer.',
		},
		_valueDecimal: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'The actual value to for an initial answer.',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The actual value to for an initial answer.',
		},
		_valueDate: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description: 'The actual value to for an initial answer.',
		},
		_valueDateTime: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The actual value to for an initial answer.',
		},
		_valueTime: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description: 'The actual value to for an initial answer.',
		},
		_valueString: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The actual value to for an initial answer.',
		},
		_valueUri: {
			type: require('./element.input.js'),
			description: 'The actual value to for an initial answer.',
		},
		valueUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The actual value to for an initial answer.',
		},
		valueAttachment: {
			type: new GraphQLNonNull(require('./attachment.input.js')),
			description: 'The actual value to for an initial answer.',
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'The actual value to for an initial answer.',
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description: 'The actual value to for an initial answer.',
		},
		valueReference: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The actual value to for an initial answer.',
		},
	}),
});

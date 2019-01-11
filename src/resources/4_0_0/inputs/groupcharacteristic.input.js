const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Groupcharacteristic Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Groupcharacteristic_Input',
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
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'A code that identifies the kind of trait being asserted.',
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"The value of the trait that holds (or does not hold - see 'exclude') for members of the group.",
		},
		_valueBoolean: {
			type: require('./element.input.js'),
			description:
				"The value of the trait that holds (or does not hold - see 'exclude') for members of the group.",
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				"The value of the trait that holds (or does not hold - see 'exclude') for members of the group.",
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description:
				"The value of the trait that holds (or does not hold - see 'exclude') for members of the group.",
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.input.js')),
			description:
				"The value of the trait that holds (or does not hold - see 'exclude') for members of the group.",
		},
		valueReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"The value of the trait that holds (or does not hold - see 'exclude') for members of the group.",
		},
		_exclude: {
			type: require('./element.input.js'),
			description:
				'If true, indicates the characteristic is one that is NOT held by members of the group.',
		},
		exclude: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'If true, indicates the characteristic is one that is NOT held by members of the group.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.',
		},
	}),
});

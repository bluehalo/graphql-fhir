const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ObservationDefinitionqualifiedInterval Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ObservationDefinitionqualifiedInterval_Input',
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
		_category: {
			type: require('./element.input.js'),
			description:
				'The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.',
		},
		category: {
			type: CodeScalar,
			description:
				'The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.',
		},
		range: {
			type: require('./range.input.js'),
			description:
				'The low and high values determining the interval. There may be only one of the two.',
		},
		context: {
			type: require('./codeableconcept.input.js'),
			description:
				'Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.',
		},
		appliesTo: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Codes to indicate the target population this reference range applies to.',
		},
		_gender: {
			type: require('./element.input.js'),
			description: 'Sex of the population the range applies to.',
		},
		gender: {
			type: CodeScalar,
			description: 'Sex of the population the range applies to.',
		},
		age: {
			type: require('./range.input.js'),
			description:
				'The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.',
		},
		gestationalAge: {
			type: require('./range.input.js'),
			description:
				'The gestational age to which this reference range is applicable, in the context of pregnancy.',
		},
		_condition: {
			type: require('./element.input.js'),
			description:
				'Text based condition for which the reference range is valid.',
		},
		condition: {
			type: GraphQLString,
			description:
				'Text based condition for which the reference range is valid.',
		},
	}),
});

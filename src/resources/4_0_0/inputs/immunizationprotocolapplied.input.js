const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ImmunizationprotocolApplied Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationprotocolApplied_Input',
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
		_series: {
			type: require('./element.input.js'),
			description:
				'One possible path to achieve presumed immunity against a disease - within the context of an authority.',
		},
		series: {
			type: GraphQLString,
			description:
				'One possible path to achieve presumed immunity against a disease - within the context of an authority.',
		},
		authority: {
			type: GraphQLString,
			description:
				'Indicates the authority who published the protocol (e.g. ACIP) that is being followed.',
		},
		targetDisease: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The vaccine preventable disease the dose is being administered against.',
		},
		_doseNumberPositiveInt: {
			type: require('./element.input.js'),
			description: 'Nominal position in a series.',
		},
		doseNumberPositiveInt: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Nominal position in a series.',
		},
		_doseNumberString: {
			type: require('./element.input.js'),
			description: 'Nominal position in a series.',
		},
		doseNumberString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nominal position in a series.',
		},
		_seriesDosesPositiveInt: {
			type: require('./element.input.js'),
			description: 'The recommended number of doses to achieve immunity.',
		},
		seriesDosesPositiveInt: {
			type: PositiveIntScalar,
			description: 'The recommended number of doses to achieve immunity.',
		},
		_seriesDosesString: {
			type: require('./element.input.js'),
			description: 'The recommended number of doses to achieve immunity.',
		},
		seriesDosesString: {
			type: GraphQLString,
			description: 'The recommended number of doses to achieve immunity.',
		},
	}),
});

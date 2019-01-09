const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary RiskEvidenceSynthesissampleSize Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RiskEvidenceSynthesissampleSize_Input',
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
		_description: {
			type: require('./element.input.js'),
			description: 'Human-readable summary of sample size.',
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable summary of sample size.',
		},
		_numberOfStudies: {
			type: require('./element.input.js'),
			description: 'Number of studies included in this evidence synthesis.',
		},
		numberOfStudies: {
			type: GraphQLInt,
			description: 'Number of studies included in this evidence synthesis.',
		},
		_numberOfParticipants: {
			type: require('./element.input.js'),
			description:
				'Number of participants included in this evidence synthesis.',
		},
		numberOfParticipants: {
			type: GraphQLInt,
			description:
				'Number of participants included in this evidence synthesis.',
		},
	}),
});

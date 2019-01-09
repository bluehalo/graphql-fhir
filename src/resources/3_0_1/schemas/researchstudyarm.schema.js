const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ResearchStudyarm Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ResearchStudyarm',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'Unique, human-readable label for this arm of the study.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Unique, human-readable label for this arm of the study.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Categorization of study arm, e.g. experimental, active comparator, placebo comparater.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A succinct description of the path through the study that would be followed by a subject adhering to this arm.',
		},
		description: {
			type: GraphQLString,
			description:
				'A succinct description of the path through the study that would be followed by a subject adhering to this arm.',
		},
	}),
});

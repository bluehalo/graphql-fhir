const { GraphQLList, GraphQLFloat, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Bundleentrysearch Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundleentrysearch',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		_mode: {
			type: require('./element.schema.js'),
			description:
				"Why this entry is in the result set - whether it's included as a match or because of an _include requirement.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-entry-mode
		mode: {
			type: CodeScalar,
			description:
				"Why this entry is in the result set - whether it's included as a match or because of an _include requirement.",
		},
		_score: {
			type: require('./element.schema.js'),
			description:
				"When searching, the server's search ranking score for the entry.",
		},
		score: {
			type: GraphQLFloat,
			description:
				"When searching, the server's search ranking score for the entry.",
		},
	}),
});

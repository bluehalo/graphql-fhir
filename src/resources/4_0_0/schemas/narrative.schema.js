const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const XhtmlScalar = require('../scalars/xhtml.scalar.js');

/**
 * @name exports
 * @summary Narrative Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Narrative',
	description:
		'Base StructureDefinition for Narrative Type: A human-readable summary of the resource conveying the essential clinical and business information for the resource.',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				"The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
		},
		_div: {
			type: require('./element.schema.js'),
			description:
				'The actual narrative content, a stripped down version of XHTML.',
		},
		div: {
			type: new GraphQLNonNull(XhtmlScalar),
			description:
				'The actual narrative content, a stripped down version of XHTML.',
		},
	}),
});

const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MolecularSequencequalityroc Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MolecularSequencequalityroc',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_score: {
			type: require('./element.schema.js'),
			description:
				'Invidual data point representing the GQ (genotype quality) score threshold.',
		},
		score: {
			type: new GraphQLList(GraphQLInt),
			description:
				'Invidual data point representing the GQ (genotype quality) score threshold.',
		},
		_numTP: {
			type: require('./element.schema.js'),
			description:
				"The number of true positives if the GQ score threshold was set to 'score' field value.",
		},
		numTP: {
			type: new GraphQLList(GraphQLInt),
			description:
				"The number of true positives if the GQ score threshold was set to 'score' field value.",
		},
		_numFP: {
			type: require('./element.schema.js'),
			description:
				"The number of false positives if the GQ score threshold was set to 'score' field value.",
		},
		numFP: {
			type: new GraphQLList(GraphQLInt),
			description:
				"The number of false positives if the GQ score threshold was set to 'score' field value.",
		},
		_numFN: {
			type: require('./element.schema.js'),
			description:
				"The number of false negatives if the GQ score threshold was set to 'score' field value.",
		},
		numFN: {
			type: new GraphQLList(GraphQLInt),
			description:
				"The number of false negatives if the GQ score threshold was set to 'score' field value.",
		},
		_precision: {
			type: require('./element.schema.js'),
			description:
				"Calculated precision if the GQ score threshold was set to 'score' field value.",
		},
		precision: {
			type: new GraphQLList(GraphQLFloat),
			description:
				"Calculated precision if the GQ score threshold was set to 'score' field value.",
		},
		_sensitivity: {
			type: require('./element.schema.js'),
			description:
				"Calculated sensitivity if the GQ score threshold was set to 'score' field value.",
		},
		sensitivity: {
			type: new GraphQLList(GraphQLFloat),
			description:
				"Calculated sensitivity if the GQ score threshold was set to 'score' field value.",
		},
		_fMeasure: {
			type: require('./element.schema.js'),
			description:
				"Calculated fScore if the GQ score threshold was set to 'score' field value.",
		},
		fMeasure: {
			type: new GraphQLList(GraphQLFloat),
			description:
				"Calculated fScore if the GQ score threshold was set to 'score' field value.",
		},
	}),
});

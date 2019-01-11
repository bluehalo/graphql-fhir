const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Contracttermasset Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contracttermasset',
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
		scope: {
			type: require('./codeableconcept.schema.js'),
			description: 'Differentiates the kind of the asset .',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Target entity type about which the term may be concerned.',
		},
		typeReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ContracttermassettypeReference_typeReference_Union',
					description: 'Associated entities.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description: 'Associated entities.',
		},
		subtype: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'May be a subtype or part of an offered asset.',
		},
		relationship: {
			type: require('./coding.schema.js'),
			description:
				'Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.',
		},
		context: {
			type: new GraphQLList(require('./contracttermassetcontext.schema.js')),
			description: 'Circumstance of the asset.',
		},
		_condition: {
			type: require('./element.schema.js'),
			description:
				'Description of the quality and completeness of the asset that imay be a factor in its valuation.',
		},
		condition: {
			type: GraphQLString,
			description:
				'Description of the quality and completeness of the asset that imay be a factor in its valuation.',
		},
		periodType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Type of Asset availability for use or ownership.',
		},
		period: {
			type: new GraphQLList(require('./period.schema.js')),
			description: 'Asset relevant contractual time period.',
		},
		usePeriod: {
			type: new GraphQLList(require('./period.schema.js')),
			description: 'Time period of asset use.',
		},
		_text: {
			type: require('./element.schema.js'),
			description:
				'Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.',
		},
		text: {
			type: GraphQLString,
			description:
				'Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.',
		},
		_linkId: {
			type: require('./element.schema.js'),
			description:
				'Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.',
		},
		linkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.',
		},
		_securityLabelNumber: {
			type: require('./element.schema.js'),
			description: 'Security labels that protects the asset.',
		},
		securityLabelNumber: {
			type: new GraphQLList(UnsignedIntScalar),
			description: 'Security labels that protects the asset.',
		},
		valuedItem: {
			type: new GraphQLList(require('./contracttermassetvalueditem.schema.js')),
			description: 'Contract Valued Item List.',
		},
	}),
});

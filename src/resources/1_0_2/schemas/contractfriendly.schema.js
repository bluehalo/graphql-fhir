const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Contractfriendly Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contractfriendly',
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
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema.js')),
			description:
				'Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.',
		},
		contentReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ContractfriendlycontentReference_contentReference_Union',
					description:
						'Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.',
					types: () => [
						require('./composition.schema.js'),
						require('./documentreference.schema.js'),
						require('./questionnaireresponse.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Composition') {
							return require('./composition.schema.js');
						}
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
						if (data && data.resourceType === 'QuestionnaireResponse') {
							return require('./questionnaireresponse.schema.js');
						}
					},
				}),
			),
			description:
				'Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.',
		},
	}),
});

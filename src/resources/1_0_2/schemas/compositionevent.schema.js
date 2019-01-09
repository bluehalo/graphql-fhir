const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Compositionevent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Compositionevent',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCode
		code: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a 'History and Physical Report' in which the procedure being documented is necessarily a 'History and Physical' act.",
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.',
		},
		detail: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Compositioneventdetail_detail_Union',
					description:
						'The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.',
		},
	}),
});

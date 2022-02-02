const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitinformation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitinformation',
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
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'Sequence of the information element which serves to provide a link.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'Sequence of the information element which serves to provide a link.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-informationcategory
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The general class of the information supplied: information; exception; accident, employment; onset, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-exception
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought which may influence the adjudication.',
		},
		_timingDate: {
			type: require('./element.schema.js'),
			description: 'The date when or period to which this information refers.',
		},
		timingDate: {
			type: DateScalar,
			description: 'The date when or period to which this information refers.',
		},
		timingPeriod: {
			type: require('./period.schema.js'),
			description: 'The date when or period to which this information refers.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		valueString: {
			type: GraphQLString,
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		valueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		valueAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		valueReference: {
			type: new GraphQLUnionType({
				name: 'ExplanationOfBenefitinformationvalueReference_valueReference_Union',
				description:
					'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/missing-tooth-reason
		reason: {
			type: require('./coding.schema.js'),
			description:
				'For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.',
		},
	}),
});

const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitsupportingInfo Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitsupportingInfo',
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
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'A number to uniquely identify supporting information entries.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'A number to uniquely identify supporting information entries.',
		},
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The general class of the information supplied: information; exception; accident, employment; onset, etc.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.',
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
		_valueBoolean: {
			type: require('./element.schema.js'),
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
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
				name:
					'ExplanationOfBenefitsupportingInfovalueReference_valueReference_Union',
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
		reason: {
			type: require('./coding.schema.js'),
			description:
				'Provides the reason in the situation where a reason code is required in addition to the content.',
		},
	}),
});

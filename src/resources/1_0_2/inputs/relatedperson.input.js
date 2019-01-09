const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary RelatedPerson Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RelatedPerson_Input',
	description: 'Base StructureDefinition for RelatedPerson Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'RelatedPerson_Enum_input',
					values: { RelatedPerson: { value: 'RelatedPerson' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'Identifier for a person within a particular scope.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient this person is related to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype
		relationship: {
			type: require('./codeableconcept.input.js'),
			description:
				'The nature of the relationship between a patient and the related person.',
		},
		name: {
			type: require('./humanname.input.js'),
			description: 'A name associated with the person.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'A contact detail for the person, e.g. a telephone number or an email address.',
		},
		_gender: {
			type: require('./element.input.js'),
			description:
				'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description:
				'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.',
		},
		_birthDate: {
			type: require('./element.input.js'),
			description: 'The date on which the related person was born.',
		},
		birthDate: {
			type: DateScalar,
			description: 'The date on which the related person was born.',
		},
		address: {
			type: new GraphQLList(require('./address.input.js')),
			description:
				'Address where the related person can be contacted or visited.',
		},
		photo: {
			type: new GraphQLList(require('./attachment.input.js')),
			description: 'Image of the person.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.',
		},
	}),
});

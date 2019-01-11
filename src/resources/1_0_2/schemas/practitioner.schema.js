const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Practitioner Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Practitioner',
	description: 'Base StructureDefinition for Practitioner Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Practitioner_Enum_schema',
					values: { Practitioner: { value: 'Practitioner' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'An identifier that applies to this person in this role.',
		},
		_active: {
			type: require('./element.schema.js'),
			description: "Whether this practitioner's record is in active use.",
		},
		active: {
			type: GraphQLBoolean,
			description: "Whether this practitioner's record is in active use.",
		},
		name: {
			type: require('./humanname.schema.js'),
			description: 'A name associated with the person.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'A contact detail for the practitioner, e.g. a telephone number or an email address.',
		},
		address: {
			type: new GraphQLList(require('./address.schema.js')),
			description:
				'The postal address where the practitioner can be found or visited or to which mail can be delivered.',
		},
		_gender: {
			type: require('./element.schema.js'),
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
			type: require('./element.schema.js'),
			description: 'The date of birth for the practitioner.',
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the practitioner.',
		},
		photo: {
			type: new GraphQLList(require('./attachment.schema.js')),
			description: 'Image of the person.',
		},
		practitionerRole: {
			type: new GraphQLList(
				require('./practitionerpractitionerrole.schema.js'),
			),
			description:
				'The list of roles/organizations that the practitioner is associated with.',
		},
		qualification: {
			type: new GraphQLList(require('./practitionerqualification.schema.js')),
			description: 'Qualifications obtained by training and certification.',
		},
		communication: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A language the practitioner is able to use in patient communication.',
		},
	}),
});

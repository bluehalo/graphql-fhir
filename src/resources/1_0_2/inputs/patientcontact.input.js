const {
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Patientcontact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Patientcontact_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/patient-contact-relationship
		relationship: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The nature of the relationship between the patient and the contact person.',
		},
		name: {
			type: require('./humanname.input.js'),
			description: 'A name associated with the contact person.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'A contact detail for the person, e.g. a telephone number or an email address.',
		},
		address: {
			type: require('./address.input.js'),
			description: 'Address for the contact person.',
		},
		_gender: {
			type: require('./element.input.js'),
			description:
				'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description:
				'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.',
		},
		organization: {
			type: GraphQLString,
			description:
				'Organization on behalf of which the contact is acting or for which the contact is working.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The period during which this contact person or organization is valid to be contacted relating to this patient.',
		},
	}),
});

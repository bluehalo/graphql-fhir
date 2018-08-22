const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PatientContact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PatientContact_Input',
	description: 'A contact party (e.g. guardian, partner, friend) for the patient.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/patient-contact-relationship
		relationship: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The nature of the relationship between the patient and the contact person.'
		},
		name: {
			type: require('./humanname.input'),
			description: 'A name associated with the contact person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail for the person, e.g. a telephone number or an email address.'
		},
		address: {
			type: require('./address.input'),
			description: 'Address for the contact person.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.input'),
			description: 'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'Organization on behalf of which the contact is acting or for which the contact is working.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period during which this contact person or organization is valid to be contacted relating to this patient.'
		}
	})
});

const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentReferenceContext Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferenceContext_Input',
	description: 'The clinical context in which the document was prepared.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		encounter: {
			type: require('./reference.input'),
			description: 'Describes the clinical encounter or type of care that the document content is associated with.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCode
		event: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \'History and Physical Report\' in which the procedure being documented is necessarily a \'History and Physical\' act.'
		},
		period: {
			type: require('./period.input'),
			description: 'The time period over which the service that is described by the document was provided.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/c80-facilitycodes
		facilityType: {
			type: require('./codeableconcept.input'),
			description: 'The kind of facility where the patient was seen.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		practiceSetting: {
			type: require('./codeableconcept.input'),
			description: 'This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.'
		},
		sourcePatientInfo: {
			type: require('./reference.input'),
			description: 'The Patient Information as known when the document was published. May be a reference to a version specific, or contained.'
		},
		related: {
			type: new GraphQLList(require('./documentreferencecontextrelated.input')),
			description: 'Related identifiers or resources associated with the DocumentReference.'
		}
	})
});

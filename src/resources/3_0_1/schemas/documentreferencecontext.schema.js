const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary DocumentReference.context Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReferenceContext',
	description: 'The clinical context in which the document was prepared.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		encounter: {
			type: require('./reference.schema'),
			description: 'Describes the clinical encounter or type of care that the document content is associated with.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCode
		event: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \'History and Physical Report\' in which the procedure being documented is necessarily a \'History and Physical\' act.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The time period over which the service that is described by the document was provided.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-facilitycodes
		facilityType: {
			type: require('./codeableconcept.schema'),
			description: 'The kind of facility where the patient was seen.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		practiceSetting: {
			type: require('./codeableconcept.schema'),
			description: 'This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.'
		},
		sourcePatientInfo: {
			type: require('./reference.schema'),
			description: 'The Patient Information as known when the document was published. May be a reference to a version specific, or contained.'
		},
		related: {
			type: new GraphQLList(require('./documentreferencecontextrelated.schema')),
			description: 'Related identifiers or resources associated with the DocumentReference.'
		}
	})
});

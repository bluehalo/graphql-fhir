const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Composition.event Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CompositionEvent_Input',
	description: 'The clinical service, such as a colonoscopy or an appendectomy, being documented.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCode
		code: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \'History and Physical Report\' in which the procedure being documented is necessarily a \'History and Physical\' act.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.'
		},
		detail: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.'
		}
	})
});

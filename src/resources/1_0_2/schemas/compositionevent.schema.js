const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Composition.event Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompositionEvent',
	description: 'The clinical service, such as a colonoscopy or an appendectomy, being documented.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCode
		code: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \'History and Physical Report\' in which the procedure being documented is necessarily a \'History and Physical\' act.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.'
		},
		detail: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.'
		}
	})
});

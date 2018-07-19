const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AdverseEventSuspectEntity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AdverseEventSuspectEntity',
	description: 'Describes the entity that is suspected to have caused the adverse event.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		instance: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality
		causality: {
			type: CodeScalar,
			description: 'causality1 | causality2.'
		},
		_causality: {
			type: require('./element.schema'),
			description: 'causality1 | causality2.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
		causalityAssessment: {
			type: require('./codeableconcept.schema'),
			description: 'assess1 | assess2.'
		},
		causalityProductRelatedness: {
			type: GraphQLString,
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.'
		},
		_causalityProductRelatedness: {
			type: require('./element.schema'),
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-method
		causalityMethod: {
			type: require('./codeableconcept.schema'),
			description: 'method1 | method2.'
		},
		causalityAuthor: {
			type: require('./reference.schema'),
			description: 'AdverseEvent.suspectEntity.causalityAuthor.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-result
		causalityResult: {
			type: require('./codeableconcept.schema'),
			description: 'result1 | result2.'
		}
	})
});

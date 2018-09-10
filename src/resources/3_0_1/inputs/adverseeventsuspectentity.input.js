const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AdverseEvent.suspectEntity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AdverseEventSuspectEntity_Input',
	description: 'Describes the entity that is suspected to have caused the adverse event.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		instance: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality
		causality: {
			type: CodeScalar,
			description: 'causality1 | causality2.'
		},
		_causality: {
			type: require('./element.input'),
			description: 'causality1 | causality2.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
		causalityAssessment: {
			type: require('./codeableconcept.input'),
			description: 'assess1 | assess2.'
		},
		causalityProductRelatedness: {
			type: GraphQLString,
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.'
		},
		_causalityProductRelatedness: {
			type: require('./element.input'),
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-method
		causalityMethod: {
			type: require('./codeableconcept.input'),
			description: 'method1 | method2.'
		},
		causalityAuthor: {
			type: require('./reference.input'),
			description: 'AdverseEvent.suspectEntity.causalityAuthor.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-result
		causalityResult: {
			type: require('./codeableconcept.input'),
			description: 'result1 | result2.'
		}
	})
});

const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary AdverseEventsuspectEntity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AdverseEventsuspectEntity_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		instance: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.',
		},
		_causality: {
			type: require('./element.input.js'),
			description: 'causality1 | causality2.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality
		causality: {
			type: CodeScalar,
			description: 'causality1 | causality2.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
		causalityAssessment: {
			type: require('./codeableconcept.input.js'),
			description: 'assess1 | assess2.',
		},
		_causalityProductRelatedness: {
			type: require('./element.input.js'),
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.',
		},
		causalityProductRelatedness: {
			type: GraphQLString,
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-method
		causalityMethod: {
			type: require('./codeableconcept.input.js'),
			description: 'method1 | method2.',
		},
		causalityAuthor: {
			type: GraphQLString,
			description: 'AdverseEvent.suspectEntity.causalityAuthor.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-result
		causalityResult: {
			type: require('./codeableconcept.input.js'),
			description: 'result1 | result2.',
		},
	}),
});

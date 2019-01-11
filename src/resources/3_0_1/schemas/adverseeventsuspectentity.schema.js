const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary AdverseEventsuspectEntity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AdverseEventsuspectEntity',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		instance: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'AdverseEventsuspectEntityinstance_instance_Union',
					description:
						'Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.',
					types: () => [
						require('./substance.schema.js'),
						require('./medication.schema.js'),
						require('./medicationadministration.schema.js'),
						require('./medicationstatement.schema.js'),
						require('./device.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Substance') {
							return require('./substance.schema.js');
						}
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
						if (data && data.resourceType === 'MedicationAdministration') {
							return require('./medicationadministration.schema.js');
						}
						if (data && data.resourceType === 'MedicationStatement') {
							return require('./medicationstatement.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.',
		},
		_causality: {
			type: require('./element.schema.js'),
			description: 'causality1 | causality2.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality
		causality: {
			type: CodeScalar,
			description: 'causality1 | causality2.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
		causalityAssessment: {
			type: require('./codeableconcept.schema.js'),
			description: 'assess1 | assess2.',
		},
		_causalityProductRelatedness: {
			type: require('./element.schema.js'),
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.',
		},
		causalityProductRelatedness: {
			type: GraphQLString,
			description: 'AdverseEvent.suspectEntity.causalityProductRelatedness.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-method
		causalityMethod: {
			type: require('./codeableconcept.schema.js'),
			description: 'method1 | method2.',
		},
		causalityAuthor: {
			type: new GraphQLUnionType({
				name: 'AdverseEventsuspectEntitycausalityAuthor_causalityAuthor_Union',
				description: 'AdverseEvent.suspectEntity.causalityAuthor.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description: 'AdverseEvent.suspectEntity.causalityAuthor.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-result
		causalityResult: {
			type: require('./codeableconcept.schema.js'),
			description: 'result1 | result2.',
		},
	}),
});

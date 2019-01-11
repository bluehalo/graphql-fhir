const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary AllergyIntolerancereaction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AllergyIntolerancereaction_Input',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substance: {
			type: require('./codeableconcept.input.js'),
			description:
				"Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		manifestation: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./codeableconcept.input.js')),
			),
			description:
				'Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Text description about the reaction as a whole, including details of the manifestation if required.',
		},
		description: {
			type: GraphQLString,
			description:
				'Text description about the reaction as a whole, including details of the manifestation if required.',
		},
		_onset: {
			type: require('./element.input.js'),
			description:
				'Record of the date and/or time of the onset of the Reaction.',
		},
		onset: {
			type: DateTimeScalar,
			description:
				'Record of the date and/or time of the onset of the Reaction.',
		},
		_severity: {
			type: require('./element.input.js'),
			description:
				'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/reaction-event-severity
		severity: {
			type: CodeScalar,
			description:
				'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		exposureRoute: {
			type: require('./codeableconcept.input.js'),
			description:
				'Identification of the route by which the subject was exposed to the substance.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Additional text about the adverse reaction event not captured in other fields.',
		},
	}),
});

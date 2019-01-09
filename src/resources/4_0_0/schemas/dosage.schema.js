const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Dosage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Dosage',
	description:
		'Base StructureDefinition for Dosage Type: Indicates how the medication is/was taken or should be taken by the patient.',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'Indicates the order in which the dosage instructions should be applied or interpreted.',
		},
		sequence: {
			type: GraphQLInt,
			description:
				'Indicates the order in which the dosage instructions should be applied or interpreted.',
		},
		_text: {
			type: require('./element.schema.js'),
			description: 'Free text dosage instructions e.g. SIG.',
		},
		text: {
			type: GraphQLString,
			description: 'Free text dosage instructions e.g. SIG.',
		},
		additionalInstruction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"Supplemental instructions to the patient on how to take the medication  (e.g. 'with meals' or'take half to one hour before food') or warnings for the patient about the medication (e.g. 'may cause drowsiness' or 'avoid exposure of skin to direct sunlight or sunlamps').",
		},
		_patientInstruction: {
			type: require('./element.schema.js'),
			description:
				'Instructions in terms that are understood by the patient or consumer.',
		},
		patientInstruction: {
			type: GraphQLString,
			description:
				'Instructions in terms that are understood by the patient or consumer.',
		},
		timing: {
			type: require('./timing.schema.js'),
			description: 'When medication should be administered.',
		},
		_asNeededBoolean: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		asNeededBoolean: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		site: {
			type: require('./codeableconcept.schema.js'),
			description: 'Body site to administer to.',
		},
		route: {
			type: require('./codeableconcept.schema.js'),
			description: 'How drug should enter body.',
		},
		method: {
			type: require('./codeableconcept.schema.js'),
			description: 'Technique for administering medication.',
		},
		doseAndRate: {
			type: new GraphQLList(require('./element.schema.js')),
			description: 'The amount of medication administered.',
		},
		maxDosePerPeriod: {
			type: require('./ratio.schema.js'),
			description: 'Upper limit on medication per unit of time.',
		},
		maxDosePerAdministration: {
			type: require('./quantity.schema.js'),
			description: 'Upper limit on medication per administration.',
		},
		maxDosePerLifetime: {
			type: require('./quantity.schema.js'),
			description: 'Upper limit on medication per lifetime of the patient.',
		},
	}),
});

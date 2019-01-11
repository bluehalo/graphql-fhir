const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicationKnowledgeadministrationGuidelines Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationKnowledgeadministrationGuidelines',
	description: '',
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
		dosage: {
			type: new GraphQLList(
				require('./medicationknowledgeadministrationguidelinesdosage.schema.js'),
			),
			description: 'Dosage for the medication for the specific guidelines.',
		},
		indicationCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indication for use that apply to the specific administration guidelines.',
		},
		indicationReference: {
			type: new GraphQLUnionType({
				name:
					'MedicationKnowledgeadministrationGuidelinesindicationReference_indicationReference_Union',
				description:
					'Indication for use that apply to the specific administration guidelines.',
				types: () => [require('./observationdefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ObservationDefinition') {
						return require('./observationdefinition.schema.js');
					}
				},
			}),
			description:
				'Indication for use that apply to the specific administration guidelines.',
		},
		patientCharacteristics: {
			type: new GraphQLList(
				require('./medicationknowledgeadministrationguidelinespatientcharacteristics.schema.js'),
			),
			description:
				'Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).',
		},
	}),
});

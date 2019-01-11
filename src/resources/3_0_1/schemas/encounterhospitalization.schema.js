const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Encounterhospitalization Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Encounterhospitalization',
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
		preAdmissionIdentifier: {
			type: require('./identifier.schema.js'),
			description: 'Pre-admission identifier.',
		},
		origin: {
			type: new GraphQLUnionType({
				name: 'Encounterhospitalizationorigin_origin_Union',
				description:
					'The location from which the patient came before admission.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'The location from which the patient came before admission.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-admit-source
		admitSource: {
			type: require('./codeableconcept.schema.js'),
			description:
				'From where patient was admitted (physician referral, transfer).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v2-0092
		reAdmission: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Whether this hospitalization is a readmission and why if known.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-diet
		dietPreference: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Diet preferences reported by the patient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-courtesy
		specialCourtesy: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Special courtesies (VIP, board member).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-arrangements
		specialArrangement: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.',
		},
		destination: {
			type: new GraphQLUnionType({
				name: 'Encounterhospitalizationdestination_destination_Union',
				description: 'Location to which the patient is discharged.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Location to which the patient is discharged.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
		dischargeDisposition: {
			type: require('./codeableconcept.schema.js'),
			description: 'Category or kind of location after discharge.',
		},
	}),
});

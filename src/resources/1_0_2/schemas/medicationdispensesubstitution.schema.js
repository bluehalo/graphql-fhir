const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary MedicationDispensesubstitution Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationDispensesubstitution',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActSubstanceAdminSubstitutionCode
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'A code signifying whether a different drug was dispensed from what was prescribed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.',
		},
		responsibleParty: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicationDispensesubstitutionresponsibleParty_responsibleParty_Union',
					description:
						'The person or organization that has primary responsibility for the substitution.',
					types: () => [require('./practitioner.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
					},
				}),
			),
			description:
				'The person or organization that has primary responsibility for the substitution.',
		},
	}),
});

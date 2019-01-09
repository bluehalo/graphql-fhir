const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitcareTeam Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitcareTeam',
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
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'Sequence of careteam which serves to order and provide a link.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'Sequence of careteam which serves to order and provide a link.',
		},
		provider: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ExplanationOfBenefitcareTeamprovider_provider_Union',
					description:
						'The members of the team who provided the overall service.',
					types: () => [
						require('./practitioner.schema.js'),
						require('./organization.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description: 'The members of the team who provided the overall service.',
		},
		_responsible: {
			type: require('./element.schema.js'),
			description:
				'The practitioner who is billing and responsible for the claimed services rendered to the patient.',
		},
		responsible: {
			type: GraphQLBoolean,
			description:
				'The practitioner who is billing and responsible for the claimed services rendered to the patient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-careteamrole
		role: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/provider-qualification
		qualification: {
			type: require('./codeableconcept.schema.js'),
			description: 'The qualification which is applicable for this service.',
		},
	}),
});

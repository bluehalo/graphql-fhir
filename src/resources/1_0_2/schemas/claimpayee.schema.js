const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Claimpayee Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claimpayee',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: require('./coding.schema.js'),
			description: 'Party to be reimbursed: Subscriber, provider, other.',
		},
		provider: {
			type: new GraphQLUnionType({
				name: 'Claimpayeeprovider_provider_Union',
				description:
					'The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
		},
		organization: {
			type: new GraphQLUnionType({
				name: 'Claimpayeeorganization_organization_Union',
				description:
					'The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
		},
		person: {
			type: new GraphQLUnionType({
				name: 'Claimpayeeperson_person_Union',
				description:
					'The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				'The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).',
		},
	}),
});

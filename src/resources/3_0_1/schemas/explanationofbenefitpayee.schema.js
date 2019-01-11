const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ExplanationOfBenefitpayee Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitpayee',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Type of Party to be reimbursed: Subscriber, provider, other.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-type-link
		resourceType: {
			type: require('./codeableconcept.schema.js'),
			description: 'organization | patient | practitioner | relatedperson.',
		},
		party: {
			type: new GraphQLUnionType({
				name: 'ExplanationOfBenefitpayeeparty_party_Union',
				description: 'Party to be reimbursed: Subscriber, provider, other.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'Party to be reimbursed: Subscriber, provider, other.',
		},
	}),
});

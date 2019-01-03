const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary DiagnosticOrder.item Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticOrderItem_Input',
	description:
		'The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-requests
			code: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description:
					'A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.',
			},
			specimen: {
				type: new GraphQLList(require('./reference.input')),
				description: 'If the item is related to a specific specimen.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
			bodySite: {
				type: require('./codeableconcept.input'),
				description:
					'Anatomical location where the request test should be performed.  This is the target site.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
			status: {
				type: CodeScalar,
				description: 'The status of this individual item within the order.',
			},
			_status: {
				type: require('./element.input'),
				description: 'The status of this individual item within the order.',
			},
		}),
});

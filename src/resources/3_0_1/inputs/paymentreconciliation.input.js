const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let PaymentReconciliationResourceInputType = new GraphQLEnumType({
	name: 'PaymentReconciliationResourceInputType',
	values: {
		PaymentReconciliation: { value: 'PaymentReconciliation' },
	},
});

/**
 * @name exports
 * @summary PaymentReconciliation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentReconciliation_Input',
	description: 'Base StructureDefinition for PaymentReconciliation Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(PaymentReconciliationResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description: 'The Response business identifier.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
			status: {
				type: CodeScalar,
				description: 'The status of the resource instance.',
			},
			_status: {
				type: require('./element.input'),
				description: 'The status of the resource instance.',
			},
			period: {
				type: require('./period.input'),
				description:
					'The period of time for which payments have been gathered into this bulk payment for settlement.',
			},
			created: {
				type: DateTimeScalar,
				description:
					'The date when the enclosed suite of services were performed or completed.',
			},
			_created: {
				type: require('./element.input'),
				description:
					'The date when the enclosed suite of services were performed or completed.',
			},
			organization: {
				type: require('./reference.input'),
				description: 'The Insurer who produced this adjudicated response.',
			},
			request: {
				type: require('./reference.input'),
				description: 'Original request resource reference.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
			outcome: {
				type: require('./codeableconcept.input'),
				description: 'Transaction status: error, complete.',
			},
			disposition: {
				type: GraphQLString,
				description: 'A description of the status of the adjudication.',
			},
			_disposition: {
				type: require('./element.input'),
				description: 'A description of the status of the adjudication.',
			},
			requestProvider: {
				type: require('./reference.input'),
				description:
					'The practitioner who is responsible for the services rendered to the patient.',
			},
			requestOrganization: {
				type: require('./reference.input'),
				description:
					'The organization which is responsible for the services rendered to the patient.',
			},
			detail: {
				type: new GraphQLList(require('./paymentreconciliationdetail.input')),
				description:
					'List of individual settlement amounts and the corresponding transaction.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
			form: {
				type: require('./codeableconcept.input'),
				description: 'The form to be used for printing the content.',
			},
			total: {
				type: require('./money.input'),
				description: 'Total payment amount.',
			},
			processNote: {
				type: new GraphQLList(
					require('./paymentreconciliationprocessnote.input'),
				),
				description: 'Suite of notes.',
			},
		}),
});

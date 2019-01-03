const CodeScalar = require('../scalars/code.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let CoverageResourceType = new GraphQLEnumType({
	name: 'CoverageResourceType',
	values: {
		Coverage: { value: 'Coverage' }
	}
});

/**
 * @name exports
 * @summary Coverage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Coverage',
	description: 'Base StructureDefinition for Coverage Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CoverageResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the resource instance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/coverage-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.'
		},
		policyHolder: {
			type: require('./reference.schema'),
			description: 'The party who \'owns\' the insurance policy,  may be an individual, corporation or the subscriber\'s employer.'
		},
		subscriber: {
			type: require('./reference.schema'),
			description: 'The party who has signed-up for or \'owns\' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.'
		},
		subscriberId: {
			type: GraphQLString,
			description: 'The insurer assigned ID for the Subscriber.'
		},
		_subscriberId: {
			type: require('./element.schema'),
			description: 'The insurer assigned ID for the Subscriber.'
		},
		beneficiary: {
			type: require('./reference.schema'),
			description: 'The party who benefits from the insurance coverage., the patient when services are provided.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/policyholder-relationship
		relationship: {
			type: require('./codeableconcept.schema'),
			description: 'The relationship of beneficiary (patient) to the subscriber.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period during which the coverage is in force. A missing start date indicates the start date isn\'t known, a missing end date means the coverage is continuing to be in force.'
		},
		payor: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).'
		},
		grouping: {
			type: require('./coveragegrouping.schema'),
			description: 'A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.'
		},
		dependent: {
			type: GraphQLString,
			description: 'A unique identifier for a dependent under the coverage.'
		},
		_dependent: {
			type: require('./element.schema'),
			description: 'A unique identifier for a dependent under the coverage.'
		},
		sequence: {
			type: GraphQLString,
			description: 'An optional counter for a particular instance of the identified coverage which increments upon each renewal.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'An optional counter for a particular instance of the identified coverage which increments upon each renewal.'
		},
		order: {
			type: PositiveIntScalar,
			description: 'The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.'
		},
		_order: {
			type: require('./element.schema'),
			description: 'The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.'
		},
		network: {
			type: GraphQLString,
			description: 'The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the \'in-network\' rate, otherwise \'out of network\' terms and conditions apply.'
		},
		_network: {
			type: require('./element.schema'),
			description: 'The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the \'in-network\' rate, otherwise \'out of network\' terms and conditions apply.'
		},
		contract: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The policy(s) which constitute this insurance coverage.'
		}
	})
});

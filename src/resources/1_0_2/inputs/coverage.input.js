const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let CoverageResourceInputType = new GraphQLEnumType({
	name: 'CoverageResourceInputType',
	values: {
		Coverage: { value: 'Coverage' }
	}
});

/**
 * @name exports
 * @summary Coverage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Coverage_Input',
	description: 'Base StructureDefinition for Coverage Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(CoverageResourceInputType),
			description: 'Type of this resource.'
		},
		issuer: {
			type: require('./reference.input'),
			description: 'The program or plan underwriter or payor.'
		},
		bin: {
			type: require('./identifier.input'),
			description: 'Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don\'t have a BIN number for all of their business.'
		},
		period: {
			type: require('./period.input'),
			description: 'Time period during which the coverage is in force. A missing start date indicates the start date isn\'t known, a missing end date means the coverage is continuing to be in force.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCoverageTypeCode
		type: {
			type: require('./coding.input'),
			description: 'The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health.'
		},
		subscriberId: {
			type: require('./identifier.input'),
			description: 'The id issued to the subscriber.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Subscriber Id, Certificate number or Personal Health Number or Case ID.'
		},
		group: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		_group: {
			type: require('./element.input'),
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		plan: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		_plan: {
			type: require('./element.input'),
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		subPlan: {
			type: GraphQLString,
			description: 'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.'
		},
		_subPlan: {
			type: require('./element.input'),
			description: 'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.'
		},
		dependent: {
			type: PositiveIntScalar,
			description: 'A unique identifier for a dependent under the coverage.'
		},
		_dependent: {
			type: require('./element.input'),
			description: 'A unique identifier for a dependent under the coverage.'
		},
		sequence: {
			type: PositiveIntScalar,
			description: 'An optional counter for a particular instance of the identified coverage which increments upon each renewal.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'An optional counter for a particular instance of the identified coverage which increments upon each renewal.'
		},
		subscriber: {
			type: require('./reference.input'),
			description: 'The party who \'owns\' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.'
		},
		network: {
			type: require('./identifier.input'),
			description: 'The identifier for a community of providers.'
		},
		contract: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The policy(s) which constitute this insurance coverage.'
		}
	})
});

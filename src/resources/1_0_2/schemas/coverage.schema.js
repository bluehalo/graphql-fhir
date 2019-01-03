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
		issuer: {
			type: require('./reference.schema'),
			description: 'The program or plan underwriter or payor.'
		},
		bin: {
			type: require('./identifier.schema'),
			description: 'Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don\'t have a BIN number for all of their business.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period during which the coverage is in force. A missing start date indicates the start date isn\'t known, a missing end date means the coverage is continuing to be in force.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCoverageTypeCode
		type: {
			type: require('./coding.schema'),
			description: 'The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health.'
		},
		subscriberId: {
			type: require('./identifier.schema'),
			description: 'The id issued to the subscriber.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Subscriber Id, Certificate number or Personal Health Number or Case ID.'
		},
		group: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		_group: {
			type: require('./element.schema'),
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		plan: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		_plan: {
			type: require('./element.schema'),
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.'
		},
		subPlan: {
			type: GraphQLString,
			description: 'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.'
		},
		_subPlan: {
			type: require('./element.schema'),
			description: 'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.'
		},
		dependent: {
			type: PositiveIntScalar,
			description: 'A unique identifier for a dependent under the coverage.'
		},
		_dependent: {
			type: require('./element.schema'),
			description: 'A unique identifier for a dependent under the coverage.'
		},
		sequence: {
			type: PositiveIntScalar,
			description: 'An optional counter for a particular instance of the identified coverage which increments upon each renewal.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'An optional counter for a particular instance of the identified coverage which increments upon each renewal.'
		},
		subscriber: {
			type: require('./reference.schema'),
			description: 'The party who \'owns\' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.'
		},
		network: {
			type: require('./identifier.schema'),
			description: 'The identifier for a community of providers.'
		},
		contract: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The policy(s) which constitute this insurance coverage.'
		}
	})
});

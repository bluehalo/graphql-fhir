const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let AccountResourceInputType = new GraphQLEnumType({
	name: 'AccountResourceInputType',
	values: {
		Account: { value: 'Account' }
	}
});

/**
 * @name exports
 * @summary Account Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Account_Input',
	description: 'Base StructureDefinition for Account Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(AccountResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/account-status
		status: {
			type: CodeScalar,
			description: 'Indicates whether the account is presently used/usable or not.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates whether the account is presently used/usable or not.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/account-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'Categorizes the account for reporting and searching purposes.'
		},
		name: {
			type: GraphQLString,
			description: 'Name used for the account when displaying it to humans in reports, etc.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Name used for the account when displaying it to humans in reports, etc.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Identifies the patient, device, practitioner, location or other object the account is associated with.'
		},
		period: {
			type: require('./period.input'),
			description: 'Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.'
		},
		active: {
			type: require('./period.input'),
			description: 'Indicates the period of time over which the account is allowed to have transactions posted to it. This period may be different to the coveragePeriod which is the duration of time that services may occur.'
		},
		balance: {
			type: require('./money.input'),
			description: 'Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.'
		},
		coverage: {
			type: new GraphQLList(require('./accountcoverage.input')),
			description: 'The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.'
		},
		owner: {
			type: require('./reference.input'),
			description: 'Indicates the organization, department, etc. with responsibility for the account.'
		},
		description: {
			type: GraphQLString,
			description: 'Provides additional information about what the account tracks and how it is used.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Provides additional information about what the account tracks and how it is used.'
		},
		guarantor: {
			type: new GraphQLList(require('./accountguarantor.input')),
			description: 'Parties financially responsible for the account.'
		}
	})
});

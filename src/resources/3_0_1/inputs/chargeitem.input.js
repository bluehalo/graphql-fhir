const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLFloat } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ChargeItemResourceInputType = new GraphQLEnumType({
	name: 'ChargeItemResourceInputType',
	values: {
		ChargeItem: { value: 'ChargeItem' }
	}
});

/**
 * @name exports
 * @summary ChargeItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ChargeItem_Input',
	description: 'Base StructureDefinition for ChargeItem Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ChargeItemResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifiers assigned to this event performer or other systems.'
		},
		definition: {
			type: new GraphQLList(UriScalar),
			description: 'References the source of pricing information, rules of application for the code this ChargeItem uses.'
		},
		_definition: {
			type: require('./element.input'),
			description: 'References the source of pricing information, rules of application for the code this ChargeItem uses.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/chargeitem-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the ChargeItem.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The current state of the ChargeItem.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.input')),
			description: 'ChargeItems can be grouped to larger ChargeItems covering the whole set.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/chargeitem-billingcodes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'A code that identifies the charge, like a billing code.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The individual or set of individuals the action is being or was performed on.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care that establishes the context for this event.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'Date/time(s) or duration when the charged service was applied.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'Date/time(s) or duration when the charged service was applied.'
		},
		occurrencePeriod: {
			type: require('./period.input'),
			description: 'Date/time(s) or duration when the charged service was applied.'
		},
		occurrenceTiming: {
			type: require('./timing.input'),
			description: 'Date/time(s) or duration when the charged service was applied.'
		},
		participant: {
			type: new GraphQLList(require('./chargeitemparticipant.input')),
			description: 'Indicates who or what performed or participated in the charged service.'
		},
		performingOrganization: {
			type: require('./reference.input'),
			description: 'The organization requesting the service.'
		},
		requestingOrganization: {
			type: require('./reference.input'),
			description: 'The organization performing the service.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'Quantity of which the charge item has been serviced.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodysite: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The anatomical location where the related service has been applied.'
		},
		factorOverride: {
			type: GraphQLFloat,
			description: 'Factor overriding the factor determined by the rules associated with the code.'
		},
		_factorOverride: {
			type: require('./element.input'),
			description: 'Factor overriding the factor determined by the rules associated with the code.'
		},
		priceOverride: {
			type: require('./money.input'),
			description: 'Total price of the charge overriding the list price associated with the code.'
		},
		overrideReason: {
			type: GraphQLString,
			description: 'If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.'
		},
		_overrideReason: {
			type: require('./element.input'),
			description: 'If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.'
		},
		enterer: {
			type: require('./reference.input'),
			description: 'The device, practitioner, etc. who entered the charge item.'
		},
		enteredDate: {
			type: DateTimeScalar,
			description: 'Date the charge item was entered.'
		},
		_enteredDate: {
			type: require('./element.input'),
			description: 'Date the charge item was entered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Describes why the event occurred in coded or textual form.'
		},
		service: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Indicated the rendered service that caused this charge.'
		},
		account: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Account into which this ChargeItems belongs.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Comments made about the event by the performer, subject or other participants.'
		},
		supportingInformation: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Further information supporting the this charge.'
		}
	})
});

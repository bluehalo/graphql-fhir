const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ChargeItemResourceType = new GraphQLEnumType({
	name: 'ChargeItemResourceType',
	values: {
		ChargeItem: { value: 'ChargeItem' },
	},
});

/**
 * @name exports
 * @summary ChargeItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ChargeItem',
	description: 'Base StructureDefinition for ChargeItem Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(ChargeItemResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: require('./identifier.schema'),
				description:
					'Identifiers assigned to this event performer or other systems.',
			},
			definition: {
				type: new GraphQLList(UriScalar),
				description:
					'References the source of pricing information, rules of application for the code this ChargeItem uses.',
			},
			_definition: {
				type: require('./element.schema'),
				description:
					'References the source of pricing information, rules of application for the code this ChargeItem uses.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/chargeitem-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'The current state of the ChargeItem.',
			},
			_status: {
				type: require('./element.schema'),
				description: 'The current state of the ChargeItem.',
			},
			partOf: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'ChargeItems can be grouped to larger ChargeItems covering the whole set.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/chargeitem-billingcodes
			code: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description: 'A code that identifies the charge, like a billing code.',
			},
			subject: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'The individual or set of individuals the action is being or was performed on.',
			},
			context: {
				type: require('./reference.schema'),
				description:
					'The encounter or episode of care that establishes the context for this event.',
			},
			occurrenceDateTime: {
				type: DateTimeScalar,
				description:
					'Date/time(s) or duration when the charged service was applied.',
			},
			_occurrenceDateTime: {
				type: require('./element.schema'),
				description:
					'Date/time(s) or duration when the charged service was applied.',
			},
			occurrencePeriod: {
				type: require('./period.schema'),
				description:
					'Date/time(s) or duration when the charged service was applied.',
			},
			occurrenceTiming: {
				type: require('./timing.schema'),
				description:
					'Date/time(s) or duration when the charged service was applied.',
			},
			participant: {
				type: new GraphQLList(require('./chargeitemparticipant.schema')),
				description:
					'Indicates who or what performed or participated in the charged service.',
			},
			performingOrganization: {
				type: require('./reference.schema'),
				description: 'The organization requesting the service.',
			},
			requestingOrganization: {
				type: require('./reference.schema'),
				description: 'The organization performing the service.',
			},
			quantity: {
				type: require('./quantity.schema'),
				description: 'Quantity of which the charge item has been serviced.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
			bodysite: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The anatomical location where the related service has been applied.',
			},
			factorOverride: {
				type: GraphQLFloat,
				description:
					'Factor overriding the factor determined by the rules associated with the code.',
			},
			_factorOverride: {
				type: require('./element.schema'),
				description:
					'Factor overriding the factor determined by the rules associated with the code.',
			},
			priceOverride: {
				type: require('./money.schema'),
				description:
					'Total price of the charge overriding the list price associated with the code.',
			},
			overrideReason: {
				type: GraphQLString,
				description:
					'If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.',
			},
			_overrideReason: {
				type: require('./element.schema'),
				description:
					'If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.',
			},
			enterer: {
				type: require('./reference.schema'),
				description:
					'The device, practitioner, etc. who entered the charge item.',
			},
			enteredDate: {
				type: DateTimeScalar,
				description: 'Date the charge item was entered.',
			},
			_enteredDate: {
				type: require('./element.schema'),
				description: 'Date the charge item was entered.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
			reason: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'Describes why the event occurred in coded or textual form.',
			},
			service: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'Indicated the rendered service that caused this charge.',
			},
			account: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'Account into which this ChargeItems belongs.',
			},
			note: {
				type: new GraphQLList(require('./annotation.schema')),
				description:
					'Comments made about the event by the performer, subject or other participants.',
			},
			supportingInformation: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'Further information supporting the this charge.',
			},
		}),
});

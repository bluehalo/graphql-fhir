const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let FlagResourceType = new GraphQLEnumType({
	name: 'FlagResourceType',
	values: {
		Flag: { value: 'Flag' }
	}
});

/**
 * @name exports
 * @summary Flag Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Flag',
	description: 'Base StructureDefinition for Flag Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(FlagResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier assigned to the flag for external use (outside the FHIR environment).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/flag-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/flag-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Supports basic workflow.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Supports basic workflow.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient, location, group , organization , or practitioner this is about record this flag is associated with.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'This alert is only relevant during the encounter.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'The person, organization or device that created the flag.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/flag-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The coded value or textual component of the flag to display to the user.'
		}
	})
});

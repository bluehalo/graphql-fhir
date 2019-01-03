const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ListResourceType = new GraphQLEnumType({
	name: 'ListResourceType',
	values: {
		List: { value: 'List' }
	}
});

/**
 * @name exports
 * @summary List Schema
 */
module.exports = new GraphQLObjectType({
	name: 'List',
	description: 'Base StructureDefinition for List Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ListResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for the List assigned for business purposes outside the context of FHIR.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current state of this list.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Indicates the current state of this list.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.'
		},
		title: {
			type: GraphQLString,
			description: 'A label for the list assigned by the author.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A label for the list assigned by the author.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-example-codes
		code: {
			type: require('./codeableconcept.schema'),
			description: 'This code defines the purpose of the list - why it was created.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The common subject (or patient) of the resources that are in the list, if there is one.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The encounter that is the context in which this list was created.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date that the list was prepared.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date that the list was prepared.'
		},
		source: {
			type: require('./reference.schema'),
			description: 'The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-order
		orderedBy: {
			type: require('./codeableconcept.schema'),
			description: 'What order applies to the items in the list.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Comments that apply to the overall list.'
		},
		entry: {
			type: new GraphQLList(require('./listentry.schema')),
			description: 'Entries in this list.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-empty-reason
		emptyReason: {
			type: require('./codeableconcept.schema'),
			description: 'If the list is empty, why the list is empty.'
		}
	})
});

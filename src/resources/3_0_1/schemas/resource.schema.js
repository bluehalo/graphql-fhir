const IdScalar = require('../scalars/id.scalar');
const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ResourceResourceType = new GraphQLEnumType({
	name: 'ResourceResourceType',
	values: {
		Resource: { value: 'Resource' }
	}
});

/**
 * @name exports
 * @summary Resource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Resource',
	description: 'Base StructureDefinition for Resource Resource.',
	fields: () => extendSchema({
		resourceType: {
			type: new GraphQLNonNull(ResourceResourceType),
			description: 'Type of this resource'
		},
		id: {
			type: IdScalar,
			description: 'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.'
		},
		_id: {
			type: require('./element.schema'),
			description: 'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.'
		},
		meta: {
			type: require('./meta.schema'),
			description: 'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.'
		},
		implicitRules: {
			type: UriScalar,
			description: 'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.'
		},
		_implicitRules: {
			type: require('./element.schema'),
			description: 'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.'
		},
		_language: {
			type: require('./element.schema'),
			description: 'The base language in which the resource is written.'
		}
	})
});

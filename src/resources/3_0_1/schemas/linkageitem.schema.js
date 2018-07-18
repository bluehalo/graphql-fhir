const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary LinkageItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'LinkageItem',
	description: 'Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/linkage-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Distinguishes which item is \'source of truth\' (if any) and which items are no longer considered to be current representations.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Distinguishes which item is \'source of truth\' (if any) and which items are no longer considered to be current representations.'
		},
		resource: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The resource instance being linked as part of the group.'
		}
	})
});

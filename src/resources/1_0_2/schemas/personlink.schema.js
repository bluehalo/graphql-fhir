const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PersonLink Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PersonLink',
	description: 'Link to a resource that concerns the same actual person.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		target: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The resource to which this actual person is associated.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/identity-assuranceLevel
		assurance: {
			type: CodeScalar,
			description: 'Level of assurance that this link is actually associated with the target resource.'
		},
		_assurance: {
			type: require('./element.schema'),
			description: 'Level of assurance that this link is actually associated with the target resource.'
		}
	})
});

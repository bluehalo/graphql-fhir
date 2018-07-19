const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Contributor Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contributor',
	description: 'Base StructureDefinition for Contributor Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contributor-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of contributor.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of contributor.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the individual or organization responsible for the contribution.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization responsible for the contribution.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the contributor.'
		}
	})
});

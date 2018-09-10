const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinition.slicing.discriminator Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionSlicingDiscriminator',
	description: 'Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/discriminator-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the element value is interpreted when discrimination is evaluated.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'How the element value is interpreted when discrimination is evaluated.'
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A FHIRPath expression, using a restricted subset of FHIRPath, that is used to identify the element on which discrimination is based.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'A FHIRPath expression, using a restricted subset of FHIRPath, that is used to identify the element on which discrimination is based.'
		}
	})
});

const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConformanceRestResourceInteraction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceRestResourceInteraction_Input',
	description: 'Identifies a restful operation supported by the solution.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/type-restful-interaction
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Coded identifier of the operation, supported by the system resource.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Coded identifier of the operation, supported by the system resource.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Guidance specific to the implementation of this operation, such as \'delete is a logical delete\' or \'updates are only allowed with version id\' or \'creates permitted from pre-authorized certificates only\'.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Guidance specific to the implementation of this operation, such as \'delete is a logical delete\' or \'updates are only allowed with version id\' or \'creates permitted from pre-authorized certificates only\'.'
		}
	})
});

const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureMapGroupInput Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapGroupInput_Input',
	description: 'A name assigned to an instance of data. The instance must be provided when the mapping is invoked.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name for this instance of data.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Name for this instance of data.'
		},
		type: {
			type: GraphQLString,
			description: 'Type for this instance of data.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Type for this instance of data.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/map-input-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Mode for this instance of data.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'Mode for this instance of data.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation for this instance of data.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Documentation for this instance of data.'
		}
	})
});

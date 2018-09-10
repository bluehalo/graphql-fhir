const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureMap.group.input Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapGroupInput',
	description: 'A name assigned to an instance of data. The instance must be provided when the mapping is invoked.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name for this instance of data.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Name for this instance of data.'
		},
		type: {
			type: GraphQLString,
			description: 'Type for this instance of data.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Type for this instance of data.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/map-input-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Mode for this instance of data.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'Mode for this instance of data.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation for this instance of data.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'Documentation for this instance of data.'
		}
	})
});

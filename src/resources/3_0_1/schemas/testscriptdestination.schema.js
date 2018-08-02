const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptDestination Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptDestination',
	description: 'An abstract server used in operations within this test script in the destination element.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		index: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Abstract name given to a destination server in this test script.  The name is provided as a number starting at 1.'
		},
		_index: {
			type: require('./element.schema'),
			description: 'Abstract name given to a destination server in this test script.  The name is provided as a number starting at 1.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/testscript-profile-destination-types
		profile: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The type of destination profile the test system supports.'
		}
	})
});

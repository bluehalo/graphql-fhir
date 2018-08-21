const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AuditEventSource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventSource',
	description: 'The system that is reporting the event.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		site: {
			type: GraphQLString,
			description: 'Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.'
		},
		_site: {
			type: require('./element.schema'),
			description: 'Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.'
		},
		identifier: {
			type: new GraphQLNonNull(require('./identifier.schema')),
			description: 'Identifier of the source where the event was detected.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/audit-source-type
		type: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Code specifying the type of source where event originated.'
		}
	})
});

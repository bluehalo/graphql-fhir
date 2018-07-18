const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary BodySite Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BodySite',
	description: 'Base StructureDefinition for BodySite Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for this instance of the anatomical location.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this body site is in active use.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Whether this body site is in active use.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Named anatomical location - ideally coded where possible.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-relative-location
		qualifier: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.'
		},
		description: {
			type: GraphQLString,
			description: 'A summary, charactarization or explanation of the anatomic location.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A summary, charactarization or explanation of the anatomic location.'
		},
		image: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Image or images used to identify a location.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person to which the body site belongs.'
		}
	})
});

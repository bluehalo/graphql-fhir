const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let BodySiteResourceType = new GraphQLEnumType({
	name: 'BodySiteResourceType',
	values: {
		BodySite: { value: 'BodySite' }
	}
});

/**
 * @name exports
 * @summary BodySite Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BodySite',
	description: 'Base StructureDefinition for BodySite Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(BodySiteResourceType),
			description: 'Type of this resource.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person to which the body site belongs.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for this instance of the anatomical location.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Named anatomical location - ideally coded where possible.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-relative-location
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.'
		},
		description: {
			type: GraphQLString,
			description: 'Description of anatomical location.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Description of anatomical location.'
		},
		image: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Image or images used to identify a location.'
		}
	})
});

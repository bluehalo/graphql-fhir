const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let BodySiteResourceInputType = new GraphQLEnumType({
	name: 'BodySiteResourceInputType',
	values: {
		BodySite: { value: 'BodySite' }
	}
});

/**
 * @name exports
 * @summary BodySite Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BodySite_Input',
	description: 'Base StructureDefinition for BodySite Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(BodySiteResourceInputType),
			description: 'Type of this resource.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The person to which the body site belongs.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier for this instance of the anatomical location.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		code: {
			type: require('./codeableconcept.input'),
			description: 'Named anatomical location - ideally coded where possible.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-relative-location
		modifier: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.'
		},
		description: {
			type: GraphQLString,
			description: 'Description of anatomical location.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Description of anatomical location.'
		},
		image: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Image or images used to identify a location.'
		}
	})
});

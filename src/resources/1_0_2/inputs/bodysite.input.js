const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary BodySite Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BodySite_Input',
	description: 'Base StructureDefinition for BodySite Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The person to which the body site belongs.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier for this instance of the anatomical location.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		code: {
			type: require('./codeableconcept.input'),
			description: 'Named anatomical location - ideally coded where possible.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-relative-location
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

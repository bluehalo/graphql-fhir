const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

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
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier for this instance of the anatomical location.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this body site is in active use.'
		},
		_active: {
			type: require('./element.input'),
			description: 'Whether this body site is in active use.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		code: {
			type: require('./codeableconcept.input'),
			description: 'Named anatomical location - ideally coded where possible.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-relative-location
		qualifier: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.'
		},
		description: {
			type: GraphQLString,
			description: 'A summary, charactarization or explanation of the anatomic location.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A summary, charactarization or explanation of the anatomic location.'
		},
		image: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Image or images used to identify a location.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The person to which the body site belongs.'
		}
	})
});

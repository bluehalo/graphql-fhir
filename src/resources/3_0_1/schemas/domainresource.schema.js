const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let DomainResourceResourceType = new GraphQLEnumType({
	name: 'DomainResourceResourceType',
	values: {
		DomainResource: { value: 'DomainResource' }
	}
});

/**
 * @name exports
 * @summary DomainResource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DomainResource',
	description: 'Base StructureDefinition for DomainResource Resource.',
	fields: () => extendSchema(require('./resource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DomainResourceResourceType),
			description: 'Type of this resource.'
		},
		text: {
			type: require('./narrative.schema'),
			description: 'A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \'clinically safe\' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.'
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description: 'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.'
		},
		extension: {
			type: new GraphQLList(require('./extension.schema')),
			description: 'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.'
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema')),
			description: 'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.'
		}
	})
});

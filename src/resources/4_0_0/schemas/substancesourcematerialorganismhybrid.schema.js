const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary SubstanceSourceMaterialorganismhybrid Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSourceMaterialorganismhybrid',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_maternalOrganismId: {
			type: require('./element.schema.js'),
			description:
				'The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.',
		},
		maternalOrganismId: {
			type: GraphQLString,
			description:
				'The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.',
		},
		_maternalOrganismName: {
			type: require('./element.schema.js'),
			description:
				'The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.',
		},
		maternalOrganismName: {
			type: GraphQLString,
			description:
				'The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.',
		},
		_paternalOrganismId: {
			type: require('./element.schema.js'),
			description:
				'The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.',
		},
		paternalOrganismId: {
			type: GraphQLString,
			description:
				'The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.',
		},
		_paternalOrganismName: {
			type: require('./element.schema.js'),
			description:
				'The name of the paternal species constituting the hybrid organism shall be specified.',
		},
		paternalOrganismName: {
			type: GraphQLString,
			description:
				'The name of the paternal species constituting the hybrid organism shall be specified.',
		},
		hybridType: {
			type: require('./codeableconcept.schema.js'),
			description: 'The hybrid type of an organism shall be specified.',
		},
	}),
});

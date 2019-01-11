const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceSourceMaterialorganism Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceSourceMaterialorganism_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		family: {
			type: require('./codeableconcept.input.js'),
			description: 'The family of an organism shall be specified.',
		},
		genus: {
			type: require('./codeableconcept.input.js'),
			description:
				'The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.',
		},
		species: {
			type: require('./codeableconcept.input.js'),
			description:
				'The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.',
		},
		intraspecificType: {
			type: require('./codeableconcept.input.js'),
			description: 'The Intraspecific type of an organism shall be specified.',
		},
		_intraspecificDescription: {
			type: require('./element.input.js'),
			description:
				'The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.',
		},
		intraspecificDescription: {
			type: GraphQLString,
			description:
				'The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.',
		},
		author: {
			type: new GraphQLList(
				require('./substancesourcematerialorganismauthor.input.js'),
			),
			description: '4.9.13.6.1 Author type (Conditional).',
		},
		hybrid: {
			type: require('./substancesourcematerialorganismhybrid.input.js'),
			description: '4.9.13.8.1 Hybrid species maternal organism ID (Optional).',
		},
		organismGeneral: {
			type: require('./substancesourcematerialorganismorganismgeneral.input.js'),
			description: '4.9.13.7.1 Kingdom (Conditional).',
		},
	}),
});

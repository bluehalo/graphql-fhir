const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationproperty Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSpecificationproperty',
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
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A category for this property, e.g. Physical, Chemical, Enzymatic.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description: 'Property type e.g. viscosity, pH, isoelectric point.',
		},
		_parameters: {
			type: require('./element.schema.js'),
			description:
				'Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).',
		},
		parameters: {
			type: GraphQLString,
			description:
				'Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).',
		},
		definingSubstanceReference: {
			type: new GraphQLUnionType({
				name:
					'SubstanceSpecificationpropertydefiningSubstanceReference_definingSubstanceReference_Union',
				description:
					'A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).',
				types: () => [
					require('./substancespecification.schema.js'),
					require('./substance.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'SubstanceSpecification') {
						return require('./substancespecification.schema.js');
					}
					if (data && data.resourceType === 'Substance') {
						return require('./substance.schema.js');
					}
				},
			}),
			description:
				'A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).',
		},
		definingSubstanceCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).',
		},
		amountQuantity: {
			type: require('./quantity.schema.js'),
			description: 'Quantitative value for this property.',
		},
		_amountString: {
			type: require('./element.schema.js'),
			description: 'Quantitative value for this property.',
		},
		amountString: {
			type: GraphQLString,
			description: 'Quantitative value for this property.',
		},
	}),
});

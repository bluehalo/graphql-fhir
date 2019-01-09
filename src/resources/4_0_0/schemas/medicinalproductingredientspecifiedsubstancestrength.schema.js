const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicinalProductIngredientspecifiedSubstancestrength Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicinalProductIngredientspecifiedSubstancestrength',
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
		presentation: {
			type: new GraphQLNonNull(require('./ratio.schema.js')),
			description:
				'The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.',
		},
		presentationLowLimit: {
			type: require('./ratio.schema.js'),
			description:
				'A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.',
		},
		concentration: {
			type: require('./ratio.schema.js'),
			description: 'The strength per unitary volume (or mass).',
		},
		concentrationLowLimit: {
			type: require('./ratio.schema.js'),
			description:
				'A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.',
		},
		_measurementPoint: {
			type: require('./element.schema.js'),
			description:
				'For when strength is measured at a particular point or distance.',
		},
		measurementPoint: {
			type: GraphQLString,
			description:
				'For when strength is measured at a particular point or distance.',
		},
		country: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The country or countries for which the strength range applies.',
		},
		referenceStrength: {
			type: new GraphQLList(
				require('./medicinalproductingredientspecifiedsubstancestrengthreferencestrength.schema.js'),
			),
			description: 'Strength expressed in terms of a reference substance.',
		},
	}),
});

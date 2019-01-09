const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Substanceingredient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Substanceingredient',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		quantity: {
			type: require('./ratio.schema.js'),
			description:
				'The amount of the ingredient in the substance - a concentration ratio.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substanceCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Another substance that is a component of this substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substanceReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'SubstanceingredientsubstanceReference_substanceReference_Union',
					description:
						'Another substance that is a component of this substance.',
					types: () => [require('./substance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Substance') {
							return require('./substance.schema.js');
						}
					},
				}),
			),
			description: 'Another substance that is a component of this substance.',
		},
	}),
});

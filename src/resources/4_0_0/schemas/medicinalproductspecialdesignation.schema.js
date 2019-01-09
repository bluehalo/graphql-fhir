const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicinalProductspecialDesignation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicinalProductspecialDesignation',
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Identifier for the designation, or procedure number.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of special designation, e.g. orphan drug, minor use.',
		},
		intendedUse: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The intended use of the product, e.g. prevention, treatment.',
		},
		indicationCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Condition for which the medicinal use applies.',
		},
		indicationReference: {
			type: new GraphQLUnionType({
				name:
					'MedicinalProductspecialDesignationindicationReference_indicationReference_Union',
				description: 'Condition for which the medicinal use applies.',
				types: () => [require('./medicinalproductindication.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'MedicinalProductIndication') {
						return require('./medicinalproductindication.schema.js');
					}
				},
			}),
			description: 'Condition for which the medicinal use applies.',
		},
		status: {
			type: require('./codeableconcept.schema.js'),
			description: 'For example granted, pending, expired or withdrawn.',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'Date when the designation was granted.',
		},
		date: {
			type: DateTimeScalar,
			description: 'Date when the designation was granted.',
		},
		species: {
			type: require('./codeableconcept.schema.js'),
			description: 'Animal species for which this applies.',
		},
	}),
});

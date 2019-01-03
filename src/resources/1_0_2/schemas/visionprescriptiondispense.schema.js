const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInt,
	GraphQLString,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary VisionPrescription.dispense Schema
 */
module.exports = new GraphQLObjectType({
	name: 'VisionPrescriptionDispense',
	description:
		'Deals with details of the dispense part of the supply specification.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/vision-product
			product: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description:
					'Identifies the type of vision correction product which is required for the patient.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/vision-eye-codes
			eye: {
				type: CodeScalar,
				description: 'The eye for which the lens applies.',
			},
			_eye: {
				type: require('./element.schema'),
				description: 'The eye for which the lens applies.',
			},
			sphere: {
				type: GraphQLFloat,
				description: 'Lens power measured in diopters (0.25 units).',
			},
			_sphere: {
				type: require('./element.schema'),
				description: 'Lens power measured in diopters (0.25 units).',
			},
			cylinder: {
				type: GraphQLFloat,
				description:
					'Power adjustment for astigmatism measured in diopters (0.25 units).',
			},
			_cylinder: {
				type: require('./element.schema'),
				description:
					'Power adjustment for astigmatism measured in diopters (0.25 units).',
			},
			axis: {
				type: GraphQLInt,
				description: 'Adjustment for astigmatism measured in integer degrees.',
			},
			_axis: {
				type: require('./element.schema'),
				description: 'Adjustment for astigmatism measured in integer degrees.',
			},
			prism: {
				type: GraphQLFloat,
				description:
					'Amount of prism to compensate for eye alignment in fractional units.',
			},
			_prism: {
				type: require('./element.schema'),
				description:
					'Amount of prism to compensate for eye alignment in fractional units.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/vision-base-codes
			base: {
				type: CodeScalar,
				description:
					'The relative base, or reference lens edge, for the prism.',
			},
			_base: {
				type: require('./element.schema'),
				description:
					'The relative base, or reference lens edge, for the prism.',
			},
			add: {
				type: GraphQLFloat,
				description:
					'Power adjustment for multifocal lenses measured in diopters (0.25 units).',
			},
			_add: {
				type: require('./element.schema'),
				description:
					'Power adjustment for multifocal lenses measured in diopters (0.25 units).',
			},
			power: {
				type: GraphQLFloat,
				description: 'Contact lens power measured in diopters (0.25 units).',
			},
			_power: {
				type: require('./element.schema'),
				description: 'Contact lens power measured in diopters (0.25 units).',
			},
			backCurve: {
				type: GraphQLFloat,
				description: 'Back curvature measured in millimeters.',
			},
			_backCurve: {
				type: require('./element.schema'),
				description: 'Back curvature measured in millimeters.',
			},
			diameter: {
				type: GraphQLFloat,
				description: 'Contact lens diameter measured in millimeters.',
			},
			_diameter: {
				type: require('./element.schema'),
				description: 'Contact lens diameter measured in millimeters.',
			},
			duration: {
				type: require('./quantity.schema'),
				description: 'The recommended maximum wear period for the lens.',
			},
			color: {
				type: GraphQLString,
				description: 'Special color or pattern.',
			},
			_color: {
				type: require('./element.schema'),
				description: 'Special color or pattern.',
			},
			brand: {
				type: GraphQLString,
				description: 'Brand recommendations or restrictions.',
			},
			_brand: {
				type: require('./element.schema'),
				description: 'Brand recommendations or restrictions.',
			},
			notes: {
				type: GraphQLString,
				description:
					'Notes for special requirements such as coatings and lens materials.',
			},
			_notes: {
				type: require('./element.schema'),
				description:
					'Notes for special requirements such as coatings and lens materials.',
			},
		}),
});

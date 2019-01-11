const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary VisionPrescriptiondispense Schema
 */
module.exports = new GraphQLObjectType({
	name: 'VisionPrescriptiondispense',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-product
		product: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the type of vision correction product which is required for the patient.',
		},
		_eye: {
			type: require('./element.schema.js'),
			description: 'The eye for which the lens applies.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-eye-codes
		eye: {
			type: CodeScalar,
			description: 'The eye for which the lens applies.',
		},
		_sphere: {
			type: require('./element.schema.js'),
			description: 'Lens power measured in diopters (0.25 units).',
		},
		sphere: {
			type: GraphQLFloat,
			description: 'Lens power measured in diopters (0.25 units).',
		},
		_cylinder: {
			type: require('./element.schema.js'),
			description:
				'Power adjustment for astigmatism measured in diopters (0.25 units).',
		},
		cylinder: {
			type: GraphQLFloat,
			description:
				'Power adjustment for astigmatism measured in diopters (0.25 units).',
		},
		_axis: {
			type: require('./element.schema.js'),
			description: 'Adjustment for astigmatism measured in integer degrees.',
		},
		axis: {
			type: GraphQLInt,
			description: 'Adjustment for astigmatism measured in integer degrees.',
		},
		_prism: {
			type: require('./element.schema.js'),
			description:
				'Amount of prism to compensate for eye alignment in fractional units.',
		},
		prism: {
			type: GraphQLFloat,
			description:
				'Amount of prism to compensate for eye alignment in fractional units.',
		},
		_base: {
			type: require('./element.schema.js'),
			description: 'The relative base, or reference lens edge, for the prism.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-base-codes
		base: {
			type: CodeScalar,
			description: 'The relative base, or reference lens edge, for the prism.',
		},
		_add: {
			type: require('./element.schema.js'),
			description:
				'Power adjustment for multifocal lenses measured in diopters (0.25 units).',
		},
		add: {
			type: GraphQLFloat,
			description:
				'Power adjustment for multifocal lenses measured in diopters (0.25 units).',
		},
		_power: {
			type: require('./element.schema.js'),
			description: 'Contact lens power measured in diopters (0.25 units).',
		},
		power: {
			type: GraphQLFloat,
			description: 'Contact lens power measured in diopters (0.25 units).',
		},
		_backCurve: {
			type: require('./element.schema.js'),
			description: 'Back curvature measured in millimeters.',
		},
		backCurve: {
			type: GraphQLFloat,
			description: 'Back curvature measured in millimeters.',
		},
		_diameter: {
			type: require('./element.schema.js'),
			description: 'Contact lens diameter measured in millimeters.',
		},
		diameter: {
			type: GraphQLFloat,
			description: 'Contact lens diameter measured in millimeters.',
		},
		duration: {
			type: require('./quantity.schema.js'),
			description: 'The recommended maximum wear period for the lens.',
		},
		_color: {
			type: require('./element.schema.js'),
			description: 'Special color or pattern.',
		},
		color: {
			type: GraphQLString,
			description: 'Special color or pattern.',
		},
		_brand: {
			type: require('./element.schema.js'),
			description: 'Brand recommendations or restrictions.',
		},
		brand: {
			type: GraphQLString,
			description: 'Brand recommendations or restrictions.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Notes for special requirements such as coatings and lens materials.',
		},
	}),
});

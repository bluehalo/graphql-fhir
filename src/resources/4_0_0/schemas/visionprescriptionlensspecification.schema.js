const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary VisionPrescriptionlensSpecification Schema
 */
module.exports = new GraphQLObjectType({
	name: 'VisionPrescriptionlensSpecification',
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
		product: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Identifies the type of vision correction product which is required for the patient.',
		},
		_eye: {
			type: require('./element.schema.js'),
			description: 'The eye for which the lens specification applies.',
		},
		eye: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The eye for which the lens specification applies.',
		},
		_sphere: {
			type: require('./element.schema.js'),
			description: 'Lens power measured in dioptres (0.25 units).',
		},
		sphere: {
			type: GraphQLFloat,
			description: 'Lens power measured in dioptres (0.25 units).',
		},
		_cylinder: {
			type: require('./element.schema.js'),
			description:
				'Power adjustment for astigmatism measured in dioptres (0.25 units).',
		},
		cylinder: {
			type: GraphQLFloat,
			description:
				'Power adjustment for astigmatism measured in dioptres (0.25 units).',
		},
		_axis: {
			type: require('./element.schema.js'),
			description: 'Adjustment for astigmatism measured in integer degrees.',
		},
		axis: {
			type: GraphQLInt,
			description: 'Adjustment for astigmatism measured in integer degrees.',
		},
		prism: {
			type: new GraphQLList(
				require('./visionprescriptionlensspecificationprism.schema.js'),
			),
			description: 'Allows for adjustment on two axis.',
		},
		_add: {
			type: require('./element.schema.js'),
			description:
				'Power adjustment for multifocal lenses measured in dioptres (0.25 units).',
		},
		add: {
			type: GraphQLFloat,
			description:
				'Power adjustment for multifocal lenses measured in dioptres (0.25 units).',
		},
		_power: {
			type: require('./element.schema.js'),
			description: 'Contact lens power measured in dioptres (0.25 units).',
		},
		power: {
			type: GraphQLFloat,
			description: 'Contact lens power measured in dioptres (0.25 units).',
		},
		_backCurve: {
			type: require('./element.schema.js'),
			description: 'Back curvature measured in millimetres.',
		},
		backCurve: {
			type: GraphQLFloat,
			description: 'Back curvature measured in millimetres.',
		},
		_diameter: {
			type: require('./element.schema.js'),
			description: 'Contact lens diameter measured in millimetres.',
		},
		diameter: {
			type: GraphQLFloat,
			description: 'Contact lens diameter measured in millimetres.',
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

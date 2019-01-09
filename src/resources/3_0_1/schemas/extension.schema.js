const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Extension Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Extension',
	description: 'Base StructureDefinition for Extension Type',
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
		_url: {
			type: require('./element.schema.js'),
			description:
				'Source of the definition for the extension code - a logical name or a URL.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'Source of the definition for the extension code - a logical name or a URL.',
		},
		_valueBase64Binary: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueCode: {
			type: CodeScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueDate: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueDate: {
			type: DateScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueDecimal: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueDecimal: {
			type: GraphQLFloat,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueId: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueId: {
			type: IdScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueInstant: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueInstant: {
			type: InstantScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueInteger: {
			type: GraphQLInt,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueMarkdown: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueMarkdown: {
			type: GraphQLString,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueOid: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueOid: {
			type: OidScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valuePositiveInt: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueString: {
			type: GraphQLString,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueTime: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueTime: {
			type: TimeScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		_valueUri: {
			type: require('./element.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueUri: {
			type: UriScalar,
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueAddress: {
			type: require('./address.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueAge: {
			type: require('./age.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueAnnotation: {
			type: require('./annotation.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueCoding: {
			type: require('./coding.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueContactPoint: {
			type: require('./contactpoint.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueCount: {
			type: require('./count.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueDistance: {
			type: require('./distance.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueDuration: {
			type: require('./duration.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueHumanName: {
			type: require('./humanname.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueMoney: {
			type: require('./money.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valuePeriod: {
			type: require('./period.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueRange: {
			type: require('./range.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueRatio: {
			type: require('./ratio.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueReference: {
			type: require('./resourcelist.schema'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueSampledData: {
			type: require('./sampleddata.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueSignature: {
			type: require('./signature.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueTiming: {
			type: require('./timing.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
		valueMeta: {
			type: require('./meta.schema.js'),
			description:
				'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
		},
	}),
});

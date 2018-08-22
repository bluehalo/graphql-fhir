const UriScalar = require('../scalars/uri.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const OidScalar = require('../scalars/oid.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const TimeScalar = require('../scalars/time.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Extension Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Extension_Input',
	description: 'Base StructureDefinition for Extension Type.',
	fields: () => extendSchema(require('./element.input'), {
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Source of the definition for the extension code - a logical name or a URL.'
		},
		_url: {
			type: require('./element.input'),
			description: 'Source of the definition for the extension code - a logical name or a URL.'
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueBase64Binary: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCode: {
			type: CodeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueCode: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDate: {
			type: DateScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDate: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDecimal: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueId: {
			type: IdScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueId: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueInstant: {
			type: InstantScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueInstant: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueInteger: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueMarkdown: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueMarkdown: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueOid: {
			type: OidScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueOid: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valuePositiveInt: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueString: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueTime: {
			type: TimeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueTime: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUnsignedInt: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueUri: {
			type: UriScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUri: {
			type: require('./element.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAddress: {
			type: require('./address.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAge: {
			type: require('./age.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAnnotation: {
			type: require('./annotation.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAttachment: {
			type: require('./attachment.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCoding: {
			type: require('./coding.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueContactPoint: {
			type: require('./contactpoint.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCount: {
			type: require('./count.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDistance: {
			type: require('./distance.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDuration: {
			type: require('./duration.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueHumanName: {
			type: require('./humanname.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueIdentifier: {
			type: require('./identifier.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueMoney: {
			type: require('./money.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valuePeriod: {
			type: require('./period.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueQuantity: {
			type: require('./quantity.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueRange: {
			type: require('./range.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueRatio: {
			type: require('./ratio.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueReference: {
			type: require('./reference.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueSampledData: {
			type: require('./sampleddata.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueSignature: {
			type: require('./signature.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueTiming: {
			type: require('./timing.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueMeta: {
			type: require('./meta.input'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		}
	})
});

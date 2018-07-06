const {
	GraphQLInputObjectType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLFloat,
	// GraphQLList,
	GraphQLInt
} = require('graphql');

// Scalars
const Base64BinaryScalar = require('../scalars/base64.scalar');
const DateScalar = require('../scalars/date.scalar');
const TimeScalar = require('../scalars/time.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const CodeScalar = require('../scalars/code.scalar');
const UuidScalar = require('../scalars/uuid.scalar');
const OidScalar = require('../scalars/oid.scalar');
const IdScalar = require('../scalars/id.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Extension Fields
 */
let ExtensionInput = new GraphQLInputObjectType({
	name: 'ExtensionInput',
	description: 'Optional Extension Element - found in all resources.',
	fields: () => extendSchema(require('./element.input'), {
		url: {
			type: GraphQLString,
			description: 'Source of the definition for the extension code - a logical name or a URL.'
		},
		_url: {
			type: require('./extension.input'),
			description: 'Extensions for url'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueBoolean: {
			type: require('./extension.input'),
			description: 'Extensions for valueBoolean'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueInteger: {
			type: require('./extension.input'),
			description: 'Extensions for valueInteger'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDecimal: {
			type: require('./extension.input'),
			description: 'Extensions for valueDecimal'
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueBase64Binary: {
			type: require('./extension.input'),
			description: 'Extensions for valueBase64Binary'
		},
		valueInstant: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueInstant: {
			type: require('./extension.input'),
			description: 'Extensions for valueInstant'
		},
		valueString: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueString: {
			type: require('./extension.input'),
			description: 'Extensions for valueString'
		},
		valueUri: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUri: {
			type: require('./extension.input'),
			description: 'Extensions for valueUri'
		},
		valueDate: {
			type: DateScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDate: {
			type: require('./extension.input'),
			description: 'Extensions for valueDate'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDateTime: {
			type: require('./extension.input'),
			description: 'Extensions for valueDateTime'
		},
		valueTime: {
			type: TimeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueTime: {
			type: require('./extension.input'),
			description: 'Extensions for valueTime'
		},
		valueCode: {
			type: CodeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueCode: {
			type: require('./extension.input'),
			description: 'Extensions for valueCode'
		},
		valueOid: {
			type: OidScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueOid: {
			type: require('./extension.input'),
			description: 'Extensions for valueOid'
		},
		valueUuid: {
			type: UuidScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUuid: {
			type: require('./extension.input'),
			description: 'Extensions for valueUuid'
		},
		valueId: {
			type: IdScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueId: {
			type: require('./extension.input'),
			description: 'Extensions for valueId'
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUnsignedInt: {
			type: require('./extension.input'),
			description: 'Extensions for valueUnsignedInt'
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valuePositiveInt: {
			type: require('./extension.input'),
			description: 'Extensions for valuePositiveInt'
		},
		valueMarkdown: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueMarkdown: {
			type: require('./extension.input'),
			description: 'Extensions for valueMarkdown'
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

module.exports = ExtensionInput;

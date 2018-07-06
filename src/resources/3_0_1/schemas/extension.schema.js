const {
	GraphQLObjectType,
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
let Extension = new GraphQLObjectType({
	name: 'Extension',
	description: 'Optional Extension Element - found in all resources.',
	fields: () => extendSchema(require('./element.schema'), {
		url: {
			type: GraphQLString,
			description: 'Source of the definition for the extension code - a logical name or a URL.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'Extensions for url'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'Extensions for valueBoolean'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueInteger: {
			type: require('./element.schema'),
			description: 'Extensions for valueInteger'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDecimal: {
			type: require('./element.schema'),
			description: 'Extensions for valueDecimal'
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueBase64Binary: {
			type: require('./element.schema'),
			description: 'Extensions for valueBase64Binary'
		},
		valueInstant: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueInstant: {
			type: require('./element.schema'),
			description: 'Extensions for valueInstant'
		},
		valueString: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'Extensions for valueString'
		},
		valueUri: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUri: {
			type: require('./element.schema'),
			description: 'Extensions for valueUri'
		},
		valueDate: {
			type: DateScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDate: {
			type: require('./element.schema'),
			description: 'Extensions for valueDate'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueDateTime: {
			type: require('./element.schema'),
			description: 'Extensions for valueDateTime'
		},
		valueTime: {
			type: TimeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueTime: {
			type: require('./element.schema'),
			description: 'Extensions for valueTime'
		},
		valueCode: {
			type: CodeScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueCode: {
			type: require('./element.schema'),
			description: 'Extensions for valueCode'
		},
		valueOid: {
			type: OidScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueOid: {
			type: require('./element.schema'),
			description: 'Extensions for valueOid'
		},
		valueUuid: {
			type: UuidScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUuid: {
			type: require('./element.schema'),
			description: 'Extensions for valueUuid'
		},
		valueId: {
			type: IdScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueId: {
			type: require('./element.schema'),
			description: 'Extensions for valueId'
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueUnsignedInt: {
			type: require('./element.schema'),
			description: 'Extensions for valueUnsignedInt'
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valuePositiveInt: {
			type: require('./element.schema'),
			description: 'Extensions for valuePositiveInt'
		},
		valueMarkdown: {
			type: GraphQLString,
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		_valueMarkdown: {
			type: require('./element.schema'),
			description: 'Extensions for valueMarkdown'
		},
		valueAddress: {
			type: require('./address.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAge: {
			type: require('./age.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAnnotation: {
			type: require('./annotation.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueAttachment: {
			type: require('./attachment.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCoding: {
			type: require('./coding.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueContactPoint: {
			type: require('./contactpoint.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueCount: {
			type: require('./count.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDistance: {
			type: require('./distance.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueDuration: {
			type: require('./duration.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueHumanName: {
			type: require('./humanname.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueIdentifier: {
			type: require('./identifier.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueMoney: {
			type: require('./money.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valuePeriod: {
			type: require('./period.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueQuantity: {
			type: require('./quantity.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueRange: {
			type: require('./range.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueRatio: {
			type: require('./ratio.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueReference: {
			type: require('./reference.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueSampledData: {
			type: require('./sampleddata.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueSignature: {
			type: require('./signature.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueTiming: {
			type: require('./timing.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		},
		valueMeta: {
			type: require('./meta.schema'),
			description: 'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).'
		}
	})
});

module.exports = Extension;

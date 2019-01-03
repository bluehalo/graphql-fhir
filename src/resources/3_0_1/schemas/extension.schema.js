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
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLString,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Extension Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Extension',
	description: 'Base StructureDefinition for Extension Type.',
	fields: () =>
		extendSchema(require('./element.schema'), {
			url: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'Source of the definition for the extension code - a logical name or a URL.',
			},
			_url: {
				type: require('./element.schema'),
				description:
					'Source of the definition for the extension code - a logical name or a URL.',
			},
			valueBase64Binary: {
				type: Base64BinaryScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueBase64Binary: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueBoolean: {
				type: GraphQLBoolean,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueBoolean: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueCode: {
				type: CodeScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueCode: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueDate: {
				type: DateScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueDate: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueDateTime: {
				type: DateTimeScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueDateTime: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueDecimal: {
				type: GraphQLFloat,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueDecimal: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueId: {
				type: IdScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueId: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueInstant: {
				type: InstantScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueInstant: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueInteger: {
				type: GraphQLInt,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueInteger: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueMarkdown: {
				type: GraphQLString,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueMarkdown: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueOid: {
				type: OidScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueOid: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valuePositiveInt: {
				type: PositiveIntScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valuePositiveInt: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueString: {
				type: GraphQLString,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueString: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueTime: {
				type: TimeScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueTime: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueUnsignedInt: {
				type: UnsignedIntScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueUnsignedInt: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueUri: {
				type: UriScalar,
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			_valueUri: {
				type: require('./element.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueAddress: {
				type: require('./address.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueAge: {
				type: require('./age.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueAnnotation: {
				type: require('./annotation.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueAttachment: {
				type: require('./attachment.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueCodeableConcept: {
				type: require('./codeableconcept.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueCoding: {
				type: require('./coding.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueContactPoint: {
				type: require('./contactpoint.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueCount: {
				type: require('./count.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueDistance: {
				type: require('./distance.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueDuration: {
				type: require('./duration.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueHumanName: {
				type: require('./humanname.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueIdentifier: {
				type: require('./identifier.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueMoney: {
				type: require('./money.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valuePeriod: {
				type: require('./period.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueQuantity: {
				type: require('./quantity.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueRange: {
				type: require('./range.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueRatio: {
				type: require('./ratio.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueReference: {
				type: require('./reference.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueSampledData: {
				type: require('./sampleddata.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueSignature: {
				type: require('./signature.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueTiming: {
				type: require('./timing.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
			valueMeta: {
				type: require('./meta.schema'),
				description:
					'Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).',
			},
		}),
});

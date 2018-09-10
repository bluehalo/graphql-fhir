const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const TimeScalar = require('../scalars/time.scalar');
const CodeScalar = require('../scalars/code.scalar');
const OidScalar = require('../scalars/oid.scalar');
const IdScalar = require('../scalars/id.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Parameters.parameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ParametersParameter',
	description: 'A parameter passed to or received from the operation.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the parameter (reference to the operation definition).'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of the parameter (reference to the operation definition).'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'If the parameter is a data type.'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'If the parameter is a data type.'
		},
		_valueInteger: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'If the parameter is a data type.'
		},
		_valueDecimal: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'If the parameter is a data type.'
		},
		_valueBase64Binary: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueInstant: {
			type: InstantScalar,
			description: 'If the parameter is a data type.'
		},
		_valueInstant: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueString: {
			type: GraphQLString,
			description: 'If the parameter is a data type.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueUri: {
			type: UriScalar,
			description: 'If the parameter is a data type.'
		},
		_valueUri: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueDate: {
			type: DateScalar,
			description: 'If the parameter is a data type.'
		},
		_valueDate: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'If the parameter is a data type.'
		},
		_valueDateTime: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueTime: {
			type: TimeScalar,
			description: 'If the parameter is a data type.'
		},
		_valueTime: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueCode: {
			type: CodeScalar,
			description: 'If the parameter is a data type.'
		},
		_valueCode: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueOid: {
			type: OidScalar,
			description: 'If the parameter is a data type.'
		},
		_valueOid: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueId: {
			type: IdScalar,
			description: 'If the parameter is a data type.'
		},
		_valueId: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'If the parameter is a data type.'
		},
		_valueUnsignedInt: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description: 'If the parameter is a data type.'
		},
		_valuePositiveInt: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueMarkdown: {
			type: GraphQLString,
			description: 'If the parameter is a data type.'
		},
		_valueMarkdown: {
			type: require('./element.schema'),
			description: 'If the parameter is a data type.'
		},
		valueAnnotation: {
			type: require('./annotation.schema'),
			description: 'If the parameter is a data type.'
		},
		valueAttachment: {
			type: require('./attachment.schema'),
			description: 'If the parameter is a data type.'
		},
		valueIdentifier: {
			type: require('./identifier.schema'),
			description: 'If the parameter is a data type.'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'If the parameter is a data type.'
		},
		valueCoding: {
			type: require('./coding.schema'),
			description: 'If the parameter is a data type.'
		},
		valueQuantity: {
			type: require('./quantity.schema'),
			description: 'If the parameter is a data type.'
		},
		valueRange: {
			type: require('./range.schema'),
			description: 'If the parameter is a data type.'
		},
		valuePeriod: {
			type: require('./period.schema'),
			description: 'If the parameter is a data type.'
		},
		valueRatio: {
			type: require('./ratio.schema'),
			description: 'If the parameter is a data type.'
		},
		valueSampledData: {
			type: require('./sampleddata.schema'),
			description: 'If the parameter is a data type.'
		},
		valueSignature: {
			type: require('./signature.schema'),
			description: 'If the parameter is a data type.'
		},
		valueHumanName: {
			type: require('./humanname.schema'),
			description: 'If the parameter is a data type.'
		},
		valueAddress: {
			type: require('./address.schema'),
			description: 'If the parameter is a data type.'
		},
		valueContactPoint: {
			type: require('./contactpoint.schema'),
			description: 'If the parameter is a data type.'
		},
		valueTiming: {
			type: require('./timing.schema'),
			description: 'If the parameter is a data type.'
		},
		valueReference: {
			type: require('./reference.schema'),
			description: 'If the parameter is a data type.'
		},
		valueMeta: {
			type: require('./meta.schema'),
			description: 'If the parameter is a data type.'
		},
		resource: {
			type: require('./resourcelist.schema'),
			description: 'If the parameter is a whole resource.'
		}
	})
});

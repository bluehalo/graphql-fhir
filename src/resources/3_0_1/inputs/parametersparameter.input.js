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
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ParametersParameter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ParametersParameter_Input',
	description: 'A parameter passed to or received from the operation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the parameter (reference to the operation definition).'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of the parameter (reference to the operation definition).'
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'If the parameter is a data type.'
		},
		_valueBase64Binary: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'If the parameter is a data type.'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueCode: {
			type: CodeScalar,
			description: 'If the parameter is a data type.'
		},
		_valueCode: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueDate: {
			type: DateScalar,
			description: 'If the parameter is a data type.'
		},
		_valueDate: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'If the parameter is a data type.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'If the parameter is a data type.'
		},
		_valueDecimal: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueId: {
			type: IdScalar,
			description: 'If the parameter is a data type.'
		},
		_valueId: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueInstant: {
			type: InstantScalar,
			description: 'If the parameter is a data type.'
		},
		_valueInstant: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'If the parameter is a data type.'
		},
		_valueInteger: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueMarkdown: {
			type: GraphQLString,
			description: 'If the parameter is a data type.'
		},
		_valueMarkdown: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueOid: {
			type: OidScalar,
			description: 'If the parameter is a data type.'
		},
		_valueOid: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description: 'If the parameter is a data type.'
		},
		_valuePositiveInt: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueString: {
			type: GraphQLString,
			description: 'If the parameter is a data type.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueTime: {
			type: TimeScalar,
			description: 'If the parameter is a data type.'
		},
		_valueTime: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'If the parameter is a data type.'
		},
		_valueUnsignedInt: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueUri: {
			type: UriScalar,
			description: 'If the parameter is a data type.'
		},
		_valueUri: {
			type: require('./element.input'),
			description: 'If the parameter is a data type.'
		},
		valueAddress: {
			type: require('./address.input'),
			description: 'If the parameter is a data type.'
		},
		valueAge: {
			type: require('./age.input'),
			description: 'If the parameter is a data type.'
		},
		valueAnnotation: {
			type: require('./annotation.input'),
			description: 'If the parameter is a data type.'
		},
		valueAttachment: {
			type: require('./attachment.input'),
			description: 'If the parameter is a data type.'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'If the parameter is a data type.'
		},
		valueCoding: {
			type: require('./coding.input'),
			description: 'If the parameter is a data type.'
		},
		valueContactPoint: {
			type: require('./contactpoint.input'),
			description: 'If the parameter is a data type.'
		},
		valueCount: {
			type: require('./count.input'),
			description: 'If the parameter is a data type.'
		},
		valueDistance: {
			type: require('./distance.input'),
			description: 'If the parameter is a data type.'
		},
		valueDuration: {
			type: require('./duration.input'),
			description: 'If the parameter is a data type.'
		},
		valueHumanName: {
			type: require('./humanname.input'),
			description: 'If the parameter is a data type.'
		},
		valueIdentifier: {
			type: require('./identifier.input'),
			description: 'If the parameter is a data type.'
		},
		valueMoney: {
			type: require('./money.input'),
			description: 'If the parameter is a data type.'
		},
		valuePeriod: {
			type: require('./period.input'),
			description: 'If the parameter is a data type.'
		},
		valueQuantity: {
			type: require('./quantity.input'),
			description: 'If the parameter is a data type.'
		},
		valueRange: {
			type: require('./range.input'),
			description: 'If the parameter is a data type.'
		},
		valueRatio: {
			type: require('./ratio.input'),
			description: 'If the parameter is a data type.'
		},
		valueReference: {
			type: require('./reference.input'),
			description: 'If the parameter is a data type.'
		},
		valueSampledData: {
			type: require('./sampleddata.input'),
			description: 'If the parameter is a data type.'
		},
		valueSignature: {
			type: require('./signature.input'),
			description: 'If the parameter is a data type.'
		},
		valueTiming: {
			type: require('./timing.input'),
			description: 'If the parameter is a data type.'
		},
		valueMeta: {
			type: require('./meta.input'),
			description: 'If the parameter is a data type.'
		},
		// resource: {
		// 	type: require('./resourcelist.input'),
		// 	description: 'If the parameter is a whole resource.'
		// }
	})
});

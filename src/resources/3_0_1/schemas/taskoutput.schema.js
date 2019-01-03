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
 * @summary Task.output Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TaskOutput',
	description: 'Outputs produced by the Task.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			type: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description: 'The name of the Output parameter.',
			},
			valueBase64Binary: {
				type: new GraphQLNonNull(Base64BinaryScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueBase64Binary: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueBoolean: {
				type: new GraphQLNonNull(GraphQLBoolean),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueBoolean: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueCode: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueCode: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueDate: {
				type: new GraphQLNonNull(DateScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueDate: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueDateTime: {
				type: new GraphQLNonNull(DateTimeScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueDateTime: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueDecimal: {
				type: new GraphQLNonNull(GraphQLFloat),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueDecimal: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueId: {
				type: new GraphQLNonNull(IdScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueId: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueInstant: {
				type: new GraphQLNonNull(InstantScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueInstant: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueInteger: {
				type: new GraphQLNonNull(GraphQLInt),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueInteger: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueMarkdown: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueMarkdown: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueOid: {
				type: new GraphQLNonNull(OidScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueOid: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valuePositiveInt: {
				type: new GraphQLNonNull(PositiveIntScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valuePositiveInt: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueString: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueString: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueTime: {
				type: new GraphQLNonNull(TimeScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueTime: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueUnsignedInt: {
				type: new GraphQLNonNull(UnsignedIntScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueUnsignedInt: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueUri: {
				type: new GraphQLNonNull(UriScalar),
				description: 'The value of the Output parameter as a basic type.',
			},
			_valueUri: {
				type: require('./element.schema'),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueAddress: {
				type: new GraphQLNonNull(require('./address.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueAge: {
				type: new GraphQLNonNull(require('./age.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueAnnotation: {
				type: new GraphQLNonNull(require('./annotation.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueAttachment: {
				type: new GraphQLNonNull(require('./attachment.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueCodeableConcept: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueCoding: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueContactPoint: {
				type: new GraphQLNonNull(require('./contactpoint.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueCount: {
				type: new GraphQLNonNull(require('./count.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueDistance: {
				type: new GraphQLNonNull(require('./distance.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueDuration: {
				type: new GraphQLNonNull(require('./duration.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueHumanName: {
				type: new GraphQLNonNull(require('./humanname.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueIdentifier: {
				type: new GraphQLNonNull(require('./identifier.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueMoney: {
				type: new GraphQLNonNull(require('./money.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valuePeriod: {
				type: new GraphQLNonNull(require('./period.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueQuantity: {
				type: new GraphQLNonNull(require('./quantity.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueRange: {
				type: new GraphQLNonNull(require('./range.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueRatio: {
				type: new GraphQLNonNull(require('./ratio.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueReference: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueSampledData: {
				type: new GraphQLNonNull(require('./sampleddata.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueSignature: {
				type: new GraphQLNonNull(require('./signature.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueTiming: {
				type: new GraphQLNonNull(require('./timing.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
			valueMeta: {
				type: new GraphQLNonNull(require('./meta.schema')),
				description: 'The value of the Output parameter as a basic type.',
			},
		}),
});

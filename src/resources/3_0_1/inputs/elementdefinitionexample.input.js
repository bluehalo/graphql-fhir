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

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ElementDefinition.example Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionExample_Input',
	description: 'A sample value for this element demonstrating the type of information that would typically be found in the element.',
	fields: () => extendSchema(require('./element.input'), {
		label: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Describes the purpose of this example amoung the set of examples.'
		},
		_label: {
			type: require('./element.input'),
			description: 'Describes the purpose of this example amoung the set of examples.'
		},
		valueBase64Binary: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueBase64Binary: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueCode: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueDate: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueDecimal: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueId: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueInstant: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueInstant: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueInteger: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueMarkdown: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueMarkdown: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueOid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueOid: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valuePositiveInt: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valuePositiveInt: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueTime: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueUnsignedInt: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueUnsignedInt: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		_valueUri: {
			type: require('./element.input'),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueAddress: {
			type: new GraphQLNonNull(require('./address.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueAge: {
			type: new GraphQLNonNull(require('./age.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueAnnotation: {
			type: new GraphQLNonNull(require('./annotation.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueAttachment: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueContactPoint: {
			type: new GraphQLNonNull(require('./contactpoint.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueCount: {
			type: new GraphQLNonNull(require('./count.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueDistance: {
			type: new GraphQLNonNull(require('./distance.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueDuration: {
			type: new GraphQLNonNull(require('./duration.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueHumanName: {
			type: new GraphQLNonNull(require('./humanname.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueIdentifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueMoney: {
			type: new GraphQLNonNull(require('./money.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valuePeriod: {
			type: new GraphQLNonNull(require('./period.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueRatio: {
			type: new GraphQLNonNull(require('./ratio.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueSampledData: {
			type: new GraphQLNonNull(require('./sampleddata.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueSignature: {
			type: new GraphQLNonNull(require('./signature.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueTiming: {
			type: new GraphQLNonNull(require('./timing.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		},
		valueMeta: {
			type: new GraphQLNonNull(require('./meta.input')),
			description: 'The actual value for the element, which must be one of the types allowed for this element.'
		}
	})
});

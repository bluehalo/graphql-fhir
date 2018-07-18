const IdScalar = require('../scalars/id.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const OidScalar = require('../scalars/oid.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const TimeScalar = require('../scalars/time.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary StructureMapGroupRuleSource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapGroupRuleSource_Input',
	description: 'Source inputs to the mapping.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		context: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Type or variable this rule applies to.'
		},
		_context: {
			type: require('./element.input'),
			description: 'Type or variable this rule applies to.'
		},
		min: {
			type: GraphQLInt,
			description: 'Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.'
		},
		_min: {
			type: require('./element.input'),
			description: 'Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.'
		},
		max: {
			type: GraphQLString,
			description: 'Specified maximum cardinality for the element - a number or a \'*\'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it\'s the default value).'
		},
		_max: {
			type: require('./element.input'),
			description: 'Specified maximum cardinality for the element - a number or a \'*\'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it\'s the default value).'
		},
		type: {
			type: GraphQLString,
			description: 'Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.'
		},
		defaultValueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueBase64Binary: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueBoolean: {
			type: GraphQLBoolean,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueBoolean: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueCode: {
			type: CodeScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueCode: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueDate: {
			type: DateScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueDate: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueDateTime: {
			type: DateTimeScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueDateTime: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueDecimal: {
			type: GraphQLFloat,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueDecimal: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueId: {
			type: IdScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueId: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueInstant: {
			type: InstantScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueInstant: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueInteger: {
			type: GraphQLInt,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueInteger: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueMarkdown: {
			type: GraphQLString,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueMarkdown: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueOid: {
			type: OidScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueOid: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValuePositiveInt: {
			type: PositiveIntScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValuePositiveInt: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueString: {
			type: GraphQLString,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueString: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueTime: {
			type: TimeScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueTime: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueUnsignedInt: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueUri: {
			type: UriScalar,
			description: 'A value to use if there is no existing value in the source object.'
		},
		_defaultValueUri: {
			type: require('./element.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueAddress: {
			type: require('./address.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueAge: {
			type: require('./age.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueAnnotation: {
			type: require('./annotation.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueAttachment: {
			type: require('./attachment.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueCoding: {
			type: require('./coding.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueContactPoint: {
			type: require('./contactpoint.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueCount: {
			type: require('./count.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueDistance: {
			type: require('./distance.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueDuration: {
			type: require('./duration.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueHumanName: {
			type: require('./humanname.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueIdentifier: {
			type: require('./identifier.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueMoney: {
			type: require('./money.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValuePeriod: {
			type: require('./period.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueQuantity: {
			type: require('./quantity.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueRange: {
			type: require('./range.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueRatio: {
			type: require('./ratio.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueReference: {
			type: require('./reference.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueSampledData: {
			type: require('./sampleddata.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueSignature: {
			type: require('./signature.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueTiming: {
			type: require('./timing.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		defaultValueMeta: {
			type: require('./meta.input'),
			description: 'A value to use if there is no existing value in the source object.'
		},
		element: {
			type: GraphQLString,
			description: 'Optional field for this source.'
		},
		_element: {
			type: require('./element.input'),
			description: 'Optional field for this source.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/map-source-list-mode
		listMode: {
			type: CodeScalar,
			description: 'How to handle the list mode for this element.'
		},
		_listMode: {
			type: require('./element.input'),
			description: 'How to handle the list mode for this element.'
		},
		variable: {
			type: IdScalar,
			description: 'Named context for field, if a field is specified.'
		},
		_variable: {
			type: require('./element.input'),
			description: 'Named context for field, if a field is specified.'
		},
		condition: {
			type: GraphQLString,
			description: 'FHIRPath expression  - must be true or the rule does not apply.'
		},
		_condition: {
			type: require('./element.input'),
			description: 'FHIRPath expression  - must be true or the rule does not apply.'
		},
		check: {
			type: GraphQLString,
			description: 'FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.'
		},
		_check: {
			type: require('./element.input'),
			description: 'FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.'
		}
	})
});

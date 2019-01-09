const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary StructureMapgrouprulesource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapgrouprulesource_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_context: {
			type: require('./element.input.js'),
			description: 'Type or variable this rule applies to.',
		},
		context: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Type or variable this rule applies to.',
		},
		_min: {
			type: require('./element.input.js'),
			description:
				'Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.',
		},
		min: {
			type: GraphQLInt,
			description:
				'Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.',
		},
		_max: {
			type: require('./element.input.js'),
			description:
				"Specified maximum cardinality for the element - a number or a '*'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).",
		},
		max: {
			type: GraphQLString,
			description:
				"Specified maximum cardinality for the element - a number or a '*'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).",
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.',
		},
		type: {
			type: GraphQLString,
			description:
				'Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.',
		},
		_defaultValueBase64Binary: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueBoolean: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueBoolean: {
			type: GraphQLBoolean,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueCode: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCode: {
			type: CodeScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueDate: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDate: {
			type: DateScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueDateTime: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDateTime: {
			type: DateTimeScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueDecimal: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDecimal: {
			type: GraphQLFloat,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueId: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueId: {
			type: IdScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueInstant: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueInstant: {
			type: InstantScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueInteger: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueInteger: {
			type: GraphQLInt,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueMarkdown: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueMarkdown: {
			type: GraphQLString,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueOid: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueOid: {
			type: OidScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValuePositiveInt: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueString: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueString: {
			type: GraphQLString,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueTime: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueTime: {
			type: TimeScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueUnsignedInt: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueUri: {
			type: require('./element.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUri: {
			type: UriScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAddress: {
			type: require('./address.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAge: {
			type: require('./age.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAnnotation: {
			type: require('./annotation.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAttachment: {
			type: require('./attachment.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCoding: {
			type: require('./coding.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueContactPoint: {
			type: require('./contactpoint.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCount: {
			type: require('./count.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDistance: {
			type: require('./distance.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDuration: {
			type: require('./duration.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueHumanName: {
			type: require('./humanname.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueMoney: {
			type: require('./money.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValuePeriod: {
			type: require('./period.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueQuantity: {
			type: require('./quantity.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueRange: {
			type: require('./range.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueRatio: {
			type: require('./ratio.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueReference: {
			type: GraphQLString,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueSampledData: {
			type: require('./sampleddata.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueSignature: {
			type: require('./signature.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueTiming: {
			type: require('./timing.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueMeta: {
			type: require('./meta.input.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_element: {
			type: require('./element.input.js'),
			description: 'Optional field for this source.',
		},
		element: {
			type: GraphQLString,
			description: 'Optional field for this source.',
		},
		_listMode: {
			type: require('./element.input.js'),
			description: 'How to handle the list mode for this element.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-source-list-mode
		listMode: {
			type: CodeScalar,
			description: 'How to handle the list mode for this element.',
		},
		_variable: {
			type: require('./element.input.js'),
			description: 'Named context for field, if a field is specified.',
		},
		variable: {
			type: IdScalar,
			description: 'Named context for field, if a field is specified.',
		},
		_condition: {
			type: require('./element.input.js'),
			description:
				'FHIRPath expression  - must be true or the rule does not apply.',
		},
		condition: {
			type: GraphQLString,
			description:
				'FHIRPath expression  - must be true or the rule does not apply.',
		},
		_check: {
			type: require('./element.input.js'),
			description:
				'FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.',
		},
		check: {
			type: GraphQLString,
			description:
				'FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.',
		},
	}),
});

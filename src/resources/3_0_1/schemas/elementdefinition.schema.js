const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary ElementDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinition',
	description: 'Base StructureDefinition for ElementDefinition Type',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_path: {
			type: require('./element.schema.js'),
			description:
				"The path identifies the element and is expressed as a '.'-separated list of ancestor elements, beginning with the name of the resource or extension.",
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"The path identifies the element and is expressed as a '.'-separated list of ancestor elements, beginning with the name of the resource or extension.",
		},
		_representation: {
			type: require('./element.schema.js'),
			description:
				'Codes that define how this element is represented in instances, when the deviation varies from the normal case.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/property-representation
		representation: {
			type: new GraphQLList(CodeScalar),
			description:
				'Codes that define how this element is represented in instances, when the deviation varies from the normal case.',
		},
		_sliceName: {
			type: require('./element.schema.js'),
			description:
				'The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.',
		},
		sliceName: {
			type: GraphQLString,
			description:
				'The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.',
		},
		_label: {
			type: require('./element.schema.js'),
			description:
				'A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.',
		},
		label: {
			type: GraphQLString,
			description:
				'A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		code: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A code that has the same meaning as the element in a particular terminology.',
		},
		slicing: {
			type: require('./element.schema.js'),
			description:
				'Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).',
		},
		_short: {
			type: require('./element.schema.js'),
			description:
				'A concise description of what this element means (e.g. for use in autogenerated summaries).',
		},
		short: {
			type: GraphQLString,
			description:
				'A concise description of what this element means (e.g. for use in autogenerated summaries).',
		},
		_definition: {
			type: require('./element.schema.js'),
			description:
				'Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource.',
		},
		definition: {
			type: GraphQLString,
			description:
				'Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource.',
		},
		_comment: {
			type: require('./element.schema.js'),
			description:
				'Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.',
		},
		_requirements: {
			type: require('./element.schema.js'),
			description:
				'This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.',
		},
		requirements: {
			type: GraphQLString,
			description:
				'This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.',
		},
		_alias: {
			type: require('./element.schema.js'),
			description:
				'Identifies additional names by which this element might also be known.',
		},
		alias: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies additional names by which this element might also be known.',
		},
		_min: {
			type: require('./element.schema.js'),
			description:
				'The minimum number of times this element SHALL appear in the instance.',
		},
		min: {
			type: UnsignedIntScalar,
			description:
				'The minimum number of times this element SHALL appear in the instance.',
		},
		_max: {
			type: require('./element.schema.js'),
			description:
				'The maximum number of times this element is permitted to appear in the instance.',
		},
		max: {
			type: GraphQLString,
			description:
				'The maximum number of times this element is permitted to appear in the instance.',
		},
		base: {
			type: require('./element.schema.js'),
			description:
				'Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. This information is provided when the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot.',
		},
		_contentReference: {
			type: require('./element.schema.js'),
			description:
				'Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.',
		},
		contentReference: {
			type: UriScalar,
			description:
				'Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.',
		},
		type: {
			type: new GraphQLList(require('./element.schema.js')),
			description:
				'The data type or resource that the value of this element is permitted to be.',
		},
		_defaultValueBase64Binary: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueBase64Binary: {
			type: Base64BinaryScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueBoolean: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueBoolean: {
			type: GraphQLBoolean,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueCode: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCode: {
			type: CodeScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueDate: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDate: {
			type: DateScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueDateTime: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDateTime: {
			type: DateTimeScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueDecimal: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDecimal: {
			type: GraphQLFloat,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueId: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueId: {
			type: IdScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueInstant: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueInstant: {
			type: InstantScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueInteger: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueInteger: {
			type: GraphQLInt,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueMarkdown: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueMarkdown: {
			type: GraphQLString,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueOid: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueOid: {
			type: OidScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValuePositiveInt: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueString: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueString: {
			type: GraphQLString,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueTime: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueTime: {
			type: TimeScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueUri: {
			type: require('./element.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUri: {
			type: UriScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAddress: {
			type: require('./address.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAge: {
			type: require('./age.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAnnotation: {
			type: require('./annotation.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAttachment: {
			type: require('./attachment.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCoding: {
			type: require('./coding.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueContactPoint: {
			type: require('./contactpoint.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCount: {
			type: require('./count.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDistance: {
			type: require('./distance.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDuration: {
			type: require('./duration.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueHumanName: {
			type: require('./humanname.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueMoney: {
			type: require('./money.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValuePeriod: {
			type: require('./period.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueRange: {
			type: require('./range.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueRatio: {
			type: require('./ratio.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueReference: {
			type: require('./resourcelist.schema'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueSampledData: {
			type: require('./sampleddata.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueSignature: {
			type: require('./signature.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueTiming: {
			type: require('./timing.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueMeta: {
			type: require('./meta.schema.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_meaningWhenMissing: {
			type: require('./element.schema.js'),
			description:
				"The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.",
		},
		meaningWhenMissing: {
			type: GraphQLString,
			description:
				"The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.",
		},
		_orderMeaning: {
			type: require('./element.schema.js'),
			description:
				'If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.',
		},
		orderMeaning: {
			type: GraphQLString,
			description:
				'If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.',
		},
		_fixedBase64Binary: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedBoolean: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedBoolean: {
			type: GraphQLBoolean,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedCode: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCode: {
			type: CodeScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedDate: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDate: {
			type: DateScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedDateTime: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDateTime: {
			type: DateTimeScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedDecimal: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDecimal: {
			type: GraphQLFloat,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedId: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedId: {
			type: IdScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedInstant: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedInstant: {
			type: InstantScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedInteger: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedInteger: {
			type: GraphQLInt,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedMarkdown: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedMarkdown: {
			type: GraphQLString,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedOid: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedOid: {
			type: OidScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedPositiveInt: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedPositiveInt: {
			type: PositiveIntScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedString: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedString: {
			type: GraphQLString,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedTime: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedTime: {
			type: TimeScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedUri: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUri: {
			type: UriScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAddress: {
			type: require('./address.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAge: {
			type: require('./age.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAnnotation: {
			type: require('./annotation.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCoding: {
			type: require('./coding.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedContactPoint: {
			type: require('./contactpoint.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCount: {
			type: require('./count.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDistance: {
			type: require('./distance.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDuration: {
			type: require('./duration.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedHumanName: {
			type: require('./humanname.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedMoney: {
			type: require('./money.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedPeriod: {
			type: require('./period.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedRange: {
			type: require('./range.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedRatio: {
			type: require('./ratio.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedReference: {
			type: require('./resourcelist.schema'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedSampledData: {
			type: require('./sampleddata.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedSignature: {
			type: require('./signature.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedTiming: {
			type: require('./timing.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedMeta: {
			type: require('./meta.schema.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_patternBase64Binary: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternBoolean: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternBoolean: {
			type: GraphQLBoolean,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternCode: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternCode: {
			type: CodeScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternDate: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternDate: {
			type: DateScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternDateTime: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternDateTime: {
			type: DateTimeScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternDecimal: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternDecimal: {
			type: GraphQLFloat,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternId: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternId: {
			type: IdScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternInstant: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternInstant: {
			type: InstantScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternInteger: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternInteger: {
			type: GraphQLInt,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternMarkdown: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternMarkdown: {
			type: GraphQLString,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternOid: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternOid: {
			type: OidScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternPositiveInt: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternPositiveInt: {
			type: PositiveIntScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternString: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternString: {
			type: GraphQLString,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternTime: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternTime: {
			type: TimeScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		_patternUri: {
			type: require('./element.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternUri: {
			type: UriScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternAddress: {
			type: require('./address.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternAge: {
			type: require('./age.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternAnnotation: {
			type: require('./annotation.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternCoding: {
			type: require('./coding.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternContactPoint: {
			type: require('./contactpoint.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternCount: {
			type: require('./count.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternDistance: {
			type: require('./distance.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternDuration: {
			type: require('./duration.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternHumanName: {
			type: require('./humanname.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternMoney: {
			type: require('./money.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternPeriod: {
			type: require('./period.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternRange: {
			type: require('./range.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternRatio: {
			type: require('./ratio.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternReference: {
			type: require('./resourcelist.schema'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternSampledData: {
			type: require('./sampleddata.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternSignature: {
			type: require('./signature.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternTiming: {
			type: require('./timing.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		patternMeta: {
			type: require('./meta.schema.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).',
		},
		example: {
			type: new GraphQLList(require('./element.schema.js')),
			description:
				'A sample value for this element demonstrating the type of information that would typically be found in the element.',
		},
		_minValueDate: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueDate: {
			type: DateScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueDateTime: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueDateTime: {
			type: DateTimeScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueInstant: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueInstant: {
			type: InstantScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueTime: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueTime: {
			type: TimeScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueDecimal: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueDecimal: {
			type: GraphQLFloat,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueInteger: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueInteger: {
			type: GraphQLInt,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValuePositiveInt: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueDate: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueDate: {
			type: DateScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueDateTime: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueDateTime: {
			type: DateTimeScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueInstant: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueInstant: {
			type: InstantScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueTime: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueTime: {
			type: TimeScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueDecimal: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueDecimal: {
			type: GraphQLFloat,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueInteger: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueInteger: {
			type: GraphQLInt,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValuePositiveInt: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxLength: {
			type: require('./element.schema.js'),
			description:
				'Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.',
		},
		maxLength: {
			type: GraphQLInt,
			description:
				'Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.',
		},
		_condition: {
			type: require('./element.schema.js'),
			description:
				'A reference to an invariant that may make additional statements about the cardinality or value in the instance.',
		},
		condition: {
			type: new GraphQLList(IdScalar),
			description:
				'A reference to an invariant that may make additional statements about the cardinality or value in the instance.',
		},
		constraint: {
			type: new GraphQLList(require('./element.schema.js')),
			description:
				'Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.',
		},
		_mustSupport: {
			type: require('./element.schema.js'),
			description:
				"If true, implementations that produce or consume resources SHALL provide 'support' for the element in some meaningful way.  If false, the element may be ignored and not supported.",
		},
		mustSupport: {
			type: GraphQLBoolean,
			description:
				"If true, implementations that produce or consume resources SHALL provide 'support' for the element in some meaningful way.  If false, the element may be ignored and not supported.",
		},
		_isModifier: {
			type: require('./element.schema.js'),
			description:
				'If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.',
		},
		isModifier: {
			type: GraphQLBoolean,
			description:
				'If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.',
		},
		_isSummary: {
			type: require('./element.schema.js'),
			description:
				'Whether the element should be included if a client requests a search with the parameter _summary=true.',
		},
		isSummary: {
			type: GraphQLBoolean,
			description:
				'Whether the element should be included if a client requests a search with the parameter _summary=true.',
		},
		binding: {
			type: require('./element.schema.js'),
			description:
				'Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).',
		},
		mapping: {
			type: new GraphQLList(require('./element.schema.js')),
			description:
				'Identifies a concept from an external specification that roughly corresponds to this element.',
		},
	}),
});

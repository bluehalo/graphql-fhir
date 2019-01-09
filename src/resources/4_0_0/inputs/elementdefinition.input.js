const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UrlScalar = require('../scalars/url.scalar.js');
const UuidScalar = require('../scalars/uuid.scalar.js');

/**
 * @name exports
 * @summary ElementDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinition_Input',
	description:
		'Base StructureDefinition for ElementDefinition Type: Captures constraints on each element within the resource, profile, or extension.',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_path: {
			type: require('./element.input.js'),
			description:
				"The path identifies the element and is expressed as a '.'-separated list of ancestor elements, beginning with the name of the resource or extension.",
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"The path identifies the element and is expressed as a '.'-separated list of ancestor elements, beginning with the name of the resource or extension.",
		},
		_representation: {
			type: require('./element.input.js'),
			description:
				'Codes that define how this element is represented in instances, when the deviation varies from the normal case.',
		},
		representation: {
			type: new GraphQLList(CodeScalar),
			description:
				'Codes that define how this element is represented in instances, when the deviation varies from the normal case.',
		},
		_sliceName: {
			type: require('./element.input.js'),
			description:
				'The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.',
		},
		sliceName: {
			type: GraphQLString,
			description:
				'The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.',
		},
		_sliceIsConstraining: {
			type: require('./element.input.js'),
			description:
				'If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.',
		},
		sliceIsConstraining: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.',
		},
		_label: {
			type: require('./element.input.js'),
			description:
				'A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.',
		},
		label: {
			type: GraphQLString,
			description:
				'A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.',
		},
		code: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A code that has the same meaning as the element in a particular terminology.',
		},
		slicing: {
			type: require('./element.input.js'),
			description:
				'Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).',
		},
		_short: {
			type: require('./element.input.js'),
			description:
				'A concise description of what this element means (e.g. for use in autogenerated summaries).',
		},
		short: {
			type: GraphQLString,
			description:
				'A concise description of what this element means (e.g. for use in autogenerated summaries).',
		},
		_definition: {
			type: require('./element.input.js'),
			description:
				'Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).',
		},
		definition: {
			type: GraphQLString,
			description:
				'Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).',
		},
		_comment: {
			type: require('./element.input.js'),
			description:
				'Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).',
		},
		comment: {
			type: GraphQLString,
			description:
				'Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).',
		},
		_requirements: {
			type: require('./element.input.js'),
			description:
				'This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.',
		},
		requirements: {
			type: GraphQLString,
			description:
				'This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.',
		},
		_alias: {
			type: require('./element.input.js'),
			description:
				'Identifies additional names by which this element might also be known.',
		},
		alias: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies additional names by which this element might also be known.',
		},
		_min: {
			type: require('./element.input.js'),
			description:
				'The minimum number of times this element SHALL appear in the instance.',
		},
		min: {
			type: UnsignedIntScalar,
			description:
				'The minimum number of times this element SHALL appear in the instance.',
		},
		_max: {
			type: require('./element.input.js'),
			description:
				'The maximum number of times this element is permitted to appear in the instance.',
		},
		max: {
			type: GraphQLString,
			description:
				'The maximum number of times this element is permitted to appear in the instance.',
		},
		base: {
			type: require('./element.input.js'),
			description:
				'Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same.',
		},
		_contentReference: {
			type: require('./element.input.js'),
			description:
				'Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.',
		},
		contentReference: {
			type: UriScalar,
			description:
				'Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.',
		},
		type: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				'The data type or resource that the value of this element is permitted to be.',
		},
		_defaultValueBase64Binary: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueBase64Binary: {
			type: Base64BinaryScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueBoolean: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueBoolean: {
			type: GraphQLBoolean,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueCanonical: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCanonical: {
			type: CanonicalScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueCode: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCode: {
			type: CodeScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueDate: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDate: {
			type: DateScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueDateTime: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDateTime: {
			type: DateTimeScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueDecimal: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDecimal: {
			type: GraphQLFloat,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueId: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueId: {
			type: IdScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueInstant: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueInstant: {
			type: InstantScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueInteger: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueInteger: {
			type: GraphQLInt,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueMarkdown: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueMarkdown: {
			type: GraphQLString,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueOid: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueOid: {
			type: OidScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValuePositiveInt: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueString: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueString: {
			type: GraphQLString,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueTime: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueTime: {
			type: TimeScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueUnsignedInt: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueUri: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUri: {
			type: UriScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueUrl: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUrl: {
			type: UrlScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_defaultValueUuid: {
			type: require('./element.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUuid: {
			type: UuidScalar,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAddress: {
			type: require('./address.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAge: {
			type: require('./age.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAnnotation: {
			type: require('./annotation.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueAttachment: {
			type: require('./attachment.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCoding: {
			type: require('./coding.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueContactPoint: {
			type: require('./contactpoint.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueCount: {
			type: require('./count.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDistance: {
			type: require('./distance.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDuration: {
			type: require('./duration.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueHumanName: {
			type: require('./humanname.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueIdentifier: {
			type: require('./identifier.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueMoney: {
			type: require('./money.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValuePeriod: {
			type: require('./period.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueQuantity: {
			type: require('./quantity.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueRange: {
			type: require('./range.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueRatio: {
			type: require('./ratio.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueReference: {
			type: GraphQLString,
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueSampledData: {
			type: require('./sampleddata.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueSignature: {
			type: require('./signature.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueTiming: {
			type: require('./timing.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueContactDetail: {
			type: require('./contactdetail.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueContributor: {
			type: require('./contributor.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDataRequirement: {
			type: require('./datarequirement.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueExpression: {
			type: require('./expression.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueParameterDefinition: {
			type: require('./parameterdefinition.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueRelatedArtifact: {
			type: require('./relatedartifact.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueTriggerDefinition: {
			type: require('./triggerdefinition.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueUsageContext: {
			type: require('./usagecontext.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		defaultValueDosage: {
			type: require('./dosage.input.js'),
			description:
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		},
		_meaningWhenMissing: {
			type: require('./element.input.js'),
			description:
				"The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').",
		},
		meaningWhenMissing: {
			type: GraphQLString,
			description:
				"The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').",
		},
		_orderMeaning: {
			type: require('./element.input.js'),
			description:
				'If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.',
		},
		orderMeaning: {
			type: GraphQLString,
			description:
				'If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.',
		},
		_fixedBase64Binary: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedBoolean: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedBoolean: {
			type: GraphQLBoolean,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedCanonical: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCanonical: {
			type: CanonicalScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedCode: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCode: {
			type: CodeScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedDate: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDate: {
			type: DateScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedDateTime: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDateTime: {
			type: DateTimeScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedDecimal: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDecimal: {
			type: GraphQLFloat,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedId: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedId: {
			type: IdScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedInstant: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedInstant: {
			type: InstantScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedInteger: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedInteger: {
			type: GraphQLInt,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedMarkdown: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedMarkdown: {
			type: GraphQLString,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedOid: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedOid: {
			type: OidScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedPositiveInt: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedPositiveInt: {
			type: PositiveIntScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedString: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedString: {
			type: GraphQLString,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedTime: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedTime: {
			type: TimeScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedUnsignedInt: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedUri: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUri: {
			type: UriScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedUrl: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUrl: {
			type: UrlScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_fixedUuid: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUuid: {
			type: UuidScalar,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAddress: {
			type: require('./address.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAge: {
			type: require('./age.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAnnotation: {
			type: require('./annotation.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedAttachment: {
			type: require('./attachment.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCoding: {
			type: require('./coding.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedContactPoint: {
			type: require('./contactpoint.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedCount: {
			type: require('./count.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDistance: {
			type: require('./distance.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDuration: {
			type: require('./duration.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedHumanName: {
			type: require('./humanname.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedMoney: {
			type: require('./money.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedPeriod: {
			type: require('./period.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedQuantity: {
			type: require('./quantity.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedRange: {
			type: require('./range.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedRatio: {
			type: require('./ratio.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedReference: {
			type: GraphQLString,
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedSampledData: {
			type: require('./sampleddata.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedSignature: {
			type: require('./signature.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedTiming: {
			type: require('./timing.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedContactDetail: {
			type: require('./contactdetail.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedContributor: {
			type: require('./contributor.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDataRequirement: {
			type: require('./datarequirement.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedExpression: {
			type: require('./expression.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedParameterDefinition: {
			type: require('./parameterdefinition.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedRelatedArtifact: {
			type: require('./relatedartifact.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedTriggerDefinition: {
			type: require('./triggerdefinition.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedUsageContext: {
			type: require('./usagecontext.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		fixedDosage: {
			type: require('./dosage.input.js'),
			description:
				'Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.',
		},
		_patternBase64Binary: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternBoolean: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternBoolean: {
			type: GraphQLBoolean,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternCanonical: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternCanonical: {
			type: CanonicalScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternCode: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternCode: {
			type: CodeScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternDate: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDate: {
			type: DateScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternDateTime: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDateTime: {
			type: DateTimeScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternDecimal: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDecimal: {
			type: GraphQLFloat,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternId: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternId: {
			type: IdScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternInstant: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternInstant: {
			type: InstantScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternInteger: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternInteger: {
			type: GraphQLInt,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternMarkdown: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternMarkdown: {
			type: GraphQLString,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternOid: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternOid: {
			type: OidScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternPositiveInt: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternPositiveInt: {
			type: PositiveIntScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternString: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternString: {
			type: GraphQLString,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternTime: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternTime: {
			type: TimeScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternUnsignedInt: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternUri: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternUri: {
			type: UriScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternUrl: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternUrl: {
			type: UrlScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		_patternUuid: {
			type: require('./element.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternUuid: {
			type: UuidScalar,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternAddress: {
			type: require('./address.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternAge: {
			type: require('./age.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternAnnotation: {
			type: require('./annotation.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternAttachment: {
			type: require('./attachment.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternCoding: {
			type: require('./coding.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternContactPoint: {
			type: require('./contactpoint.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternCount: {
			type: require('./count.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDistance: {
			type: require('./distance.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDuration: {
			type: require('./duration.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternHumanName: {
			type: require('./humanname.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternMoney: {
			type: require('./money.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternPeriod: {
			type: require('./period.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternQuantity: {
			type: require('./quantity.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternRange: {
			type: require('./range.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternRatio: {
			type: require('./ratio.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternReference: {
			type: GraphQLString,
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternSampledData: {
			type: require('./sampleddata.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternSignature: {
			type: require('./signature.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternTiming: {
			type: require('./timing.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternContactDetail: {
			type: require('./contactdetail.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternContributor: {
			type: require('./contributor.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDataRequirement: {
			type: require('./datarequirement.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternExpression: {
			type: require('./expression.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternParameterDefinition: {
			type: require('./parameterdefinition.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternRelatedArtifact: {
			type: require('./relatedartifact.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternTriggerDefinition: {
			type: require('./triggerdefinition.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternUsageContext: {
			type: require('./usagecontext.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		patternDosage: {
			type: require('./dosage.input.js'),
			description:
				'Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.    When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.  When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.  When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,  1. If primitive: it must match exactly the pattern value 2. If a complex object: it must match (recursively) the pattern value 3. If an array: it must match (recursively) the pattern value.',
		},
		example: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				'A sample value for this element demonstrating the type of information that would typically be found in the element.',
		},
		_minValueDate: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueDate: {
			type: DateScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueDateTime: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueDateTime: {
			type: DateTimeScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueInstant: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueInstant: {
			type: InstantScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueTime: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueTime: {
			type: TimeScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueDecimal: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueDecimal: {
			type: GraphQLFloat,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueInteger: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueInteger: {
			type: GraphQLInt,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValuePositiveInt: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_minValueUnsignedInt: {
			type: require('./element.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		minValueQuantity: {
			type: require('./quantity.input.js'),
			description:
				'The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueDate: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueDate: {
			type: DateScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueDateTime: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueDateTime: {
			type: DateTimeScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueInstant: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueInstant: {
			type: InstantScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueTime: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueTime: {
			type: TimeScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueDecimal: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueDecimal: {
			type: GraphQLFloat,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueInteger: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueInteger: {
			type: GraphQLInt,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValuePositiveInt: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxValueUnsignedInt: {
			type: require('./element.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		maxValueQuantity: {
			type: require('./quantity.input.js'),
			description:
				'The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.',
		},
		_maxLength: {
			type: require('./element.input.js'),
			description:
				'Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.',
		},
		maxLength: {
			type: GraphQLInt,
			description:
				'Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.',
		},
		_condition: {
			type: require('./element.input.js'),
			description:
				'A reference to an invariant that may make additional statements about the cardinality or value in the instance.',
		},
		condition: {
			type: new GraphQLList(IdScalar),
			description:
				'A reference to an invariant that may make additional statements about the cardinality or value in the instance.',
		},
		constraint: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				'Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.',
		},
		_mustSupport: {
			type: require('./element.input.js'),
			description:
				"If true, implementations that produce or consume resources SHALL provide 'support' for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.",
		},
		mustSupport: {
			type: GraphQLBoolean,
			description:
				"If true, implementations that produce or consume resources SHALL provide 'support' for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.",
		},
		_isModifier: {
			type: require('./element.input.js'),
			description:
				'If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.',
		},
		isModifier: {
			type: GraphQLBoolean,
			description:
				'If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.',
		},
		_isModifierReason: {
			type: require('./element.input.js'),
			description:
				'Explains how that element affects the interpretation of the resource or element that contains it.',
		},
		isModifierReason: {
			type: GraphQLString,
			description:
				'Explains how that element affects the interpretation of the resource or element that contains it.',
		},
		_isSummary: {
			type: require('./element.input.js'),
			description:
				'Whether the element should be included if a client requests a search with the parameter _summary=true.',
		},
		isSummary: {
			type: GraphQLBoolean,
			description:
				'Whether the element should be included if a client requests a search with the parameter _summary=true.',
		},
		binding: {
			type: require('./element.input.js'),
			description:
				'Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).',
		},
		mapping: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				'Identifies a concept from an external specification that roughly corresponds to this element.',
		},
	}),
});

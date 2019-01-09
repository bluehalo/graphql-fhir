const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const UrlScalar = require('../scalars/url.scalar.js');
const UuidScalar = require('../scalars/uuid.scalar.js');

/**
 * @name exports
 * @summary StructureMapgrouprulesource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapgrouprulesource',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_context: {
			type: require('./element.schema.js'),
			description: 'Type or variable this rule applies to.',
		},
		context: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Type or variable this rule applies to.',
		},
		_min: {
			type: require('./element.schema.js'),
			description:
				'Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.',
		},
		min: {
			type: GraphQLInt,
			description:
				'Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.',
		},
		_max: {
			type: require('./element.schema.js'),
			description:
				"Specified maximum cardinality for the element - a number or a '*'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).",
		},
		max: {
			type: GraphQLString,
			description:
				"Specified maximum cardinality for the element - a number or a '*'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).",
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.',
		},
		type: {
			type: GraphQLString,
			description:
				'Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.',
		},
		_defaultValueBase64Binary: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueBoolean: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueBoolean: {
			type: GraphQLBoolean,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueCanonical: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCanonical: {
			type: CanonicalScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueCode: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCode: {
			type: CodeScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueDate: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDate: {
			type: DateScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueDateTime: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDateTime: {
			type: DateTimeScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueDecimal: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDecimal: {
			type: GraphQLFloat,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueId: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueId: {
			type: IdScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueInstant: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueInstant: {
			type: InstantScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueInteger: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueInteger: {
			type: GraphQLInt,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueMarkdown: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueMarkdown: {
			type: GraphQLString,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueOid: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueOid: {
			type: OidScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValuePositiveInt: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueString: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueString: {
			type: GraphQLString,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueTime: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueTime: {
			type: TimeScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueUri: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUri: {
			type: UriScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueUrl: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUrl: {
			type: UrlScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_defaultValueUuid: {
			type: require('./element.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUuid: {
			type: UuidScalar,
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAddress: {
			type: require('./address.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAge: {
			type: require('./age.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAnnotation: {
			type: require('./annotation.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCoding: {
			type: require('./coding.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueContactPoint: {
			type: require('./contactpoint.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueCount: {
			type: require('./count.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDistance: {
			type: require('./distance.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDuration: {
			type: require('./duration.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueHumanName: {
			type: require('./humanname.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueMoney: {
			type: require('./money.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValuePeriod: {
			type: require('./period.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueRange: {
			type: require('./range.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueRatio: {
			type: require('./ratio.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueReference: {
			type: require('./resourcelist.schema'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueSampledData: {
			type: require('./sampleddata.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueSignature: {
			type: require('./signature.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueTiming: {
			type: require('./timing.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueContactDetail: {
			type: require('./contactdetail.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueContributor: {
			type: require('./contributor.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDataRequirement: {
			type: require('./datarequirement.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueExpression: {
			type: require('./expression.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueParameterDefinition: {
			type: require('./parameterdefinition.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueRelatedArtifact: {
			type: require('./relatedartifact.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueTriggerDefinition: {
			type: require('./triggerdefinition.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueUsageContext: {
			type: require('./usagecontext.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		defaultValueDosage: {
			type: require('./dosage.schema.js'),
			description:
				'A value to use if there is no existing value in the source object.',
		},
		_element: {
			type: require('./element.schema.js'),
			description: 'Optional field for this source.',
		},
		element: {
			type: GraphQLString,
			description: 'Optional field for this source.',
		},
		_listMode: {
			type: require('./element.schema.js'),
			description: 'How to handle the list mode for this element.',
		},
		listMode: {
			type: CodeScalar,
			description: 'How to handle the list mode for this element.',
		},
		_variable: {
			type: require('./element.schema.js'),
			description: 'Named context for field, if a field is specified.',
		},
		variable: {
			type: IdScalar,
			description: 'Named context for field, if a field is specified.',
		},
		_condition: {
			type: require('./element.schema.js'),
			description:
				'FHIRPath expression  - must be true or the rule does not apply.',
		},
		condition: {
			type: GraphQLString,
			description:
				'FHIRPath expression  - must be true or the rule does not apply.',
		},
		_check: {
			type: require('./element.schema.js'),
			description:
				'FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.',
		},
		check: {
			type: GraphQLString,
			description:
				'FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.',
		},
		_logMessage: {
			type: require('./element.schema.js'),
			description:
				'A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.',
		},
		logMessage: {
			type: GraphQLString,
			description:
				'A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.',
		},
	}),
});

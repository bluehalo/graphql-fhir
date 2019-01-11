const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');
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
 * @summary Extension Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Extension_Input',
	description:
		'Base StructureDefinition for Extension Type: Optional Extension Element - found in all resources.',
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
		_url: {
			type: require('./element.input.js'),
			description:
				'Source of the definition for the extension code - a logical name or a URL.',
		},
		url: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Source of the definition for the extension code - a logical name or a URL.',
		},
		_valueBase64Binary: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueBoolean: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueCanonical: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueCanonical: {
			type: CanonicalScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueCode: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueCode: {
			type: CodeScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueDate: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDate: {
			type: DateScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueDateTime: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueDecimal: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDecimal: {
			type: GraphQLFloat,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueId: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueId: {
			type: IdScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueInstant: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueInstant: {
			type: InstantScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueInteger: {
			type: GraphQLInt,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueMarkdown: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueMarkdown: {
			type: GraphQLString,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueOid: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueOid: {
			type: OidScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valuePositiveInt: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueString: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueString: {
			type: GraphQLString,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueTime: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueTime: {
			type: TimeScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueUnsignedInt: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueUri: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueUri: {
			type: UriScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueUrl: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueUrl: {
			type: UrlScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		_valueUuid: {
			type: require('./element.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueUuid: {
			type: UuidScalar,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueAddress: {
			type: require('./address.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueAge: {
			type: require('./age.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueAnnotation: {
			type: require('./annotation.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueAttachment: {
			type: require('./attachment.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueCoding: {
			type: require('./coding.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueContactPoint: {
			type: require('./contactpoint.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueCount: {
			type: require('./count.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDistance: {
			type: require('./distance.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDuration: {
			type: require('./duration.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueHumanName: {
			type: require('./humanname.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueMoney: {
			type: require('./money.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valuePeriod: {
			type: require('./period.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueQuantity: {
			type: require('./quantity.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueRange: {
			type: require('./range.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueRatio: {
			type: require('./ratio.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueReference: {
			type: GraphQLString,
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueSampledData: {
			type: require('./sampleddata.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueSignature: {
			type: require('./signature.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueTiming: {
			type: require('./timing.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueContactDetail: {
			type: require('./contactdetail.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueContributor: {
			type: require('./contributor.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDataRequirement: {
			type: require('./datarequirement.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueExpression: {
			type: require('./expression.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueParameterDefinition: {
			type: require('./parameterdefinition.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueRelatedArtifact: {
			type: require('./relatedartifact.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueTriggerDefinition: {
			type: require('./triggerdefinition.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueUsageContext: {
			type: require('./usagecontext.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
		valueDosage: {
			type: require('./dosage.input.js'),
			description:
				'Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).',
		},
	}),
});

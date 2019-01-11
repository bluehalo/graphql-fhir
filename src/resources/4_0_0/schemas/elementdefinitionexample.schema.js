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
 * @summary ElementDefinitionexample Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionexample',
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
		_label: {
			type: require('./element.schema.js'),
			description:
				'Describes the purpose of this example amoung the set of examples.',
		},
		label: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Describes the purpose of this example amoung the set of examples.',
		},
		_valueBase64Binary: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueBase64Binary: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueCanonical: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueCanonical: {
			type: new GraphQLNonNull(CanonicalScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueDate: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueDecimal: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueId: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueId: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueInstant: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueInstant: {
			type: new GraphQLNonNull(InstantScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueMarkdown: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueMarkdown: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueOid: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueOid: {
			type: new GraphQLNonNull(OidScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valuePositiveInt: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valuePositiveInt: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueTime: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueUnsignedInt: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueUnsignedInt: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueUri: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueUri: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueUrl: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueUrl: {
			type: new GraphQLNonNull(UrlScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		_valueUuid: {
			type: require('./element.schema.js'),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueUuid: {
			type: new GraphQLNonNull(UuidScalar),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueAddress: {
			type: new GraphQLNonNull(require('./address.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueAge: {
			type: new GraphQLNonNull(require('./age.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueAnnotation: {
			type: new GraphQLNonNull(require('./annotation.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueContactPoint: {
			type: new GraphQLNonNull(require('./contactpoint.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueCount: {
			type: new GraphQLNonNull(require('./count.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDistance: {
			type: new GraphQLNonNull(require('./distance.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDuration: {
			type: new GraphQLNonNull(require('./duration.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueHumanName: {
			type: new GraphQLNonNull(require('./humanname.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueIdentifier: {
			type: new GraphQLNonNull(require('./identifier.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueMoney: {
			type: new GraphQLNonNull(require('./money.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valuePeriod: {
			type: new GraphQLNonNull(require('./period.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueRatio: {
			type: new GraphQLNonNull(require('./ratio.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueReference: {
			type: new GraphQLNonNull(require('./resourcelist.schema')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueSampledData: {
			type: new GraphQLNonNull(require('./sampleddata.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueSignature: {
			type: new GraphQLNonNull(require('./signature.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueTiming: {
			type: new GraphQLNonNull(require('./timing.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueContactDetail: {
			type: new GraphQLNonNull(require('./contactdetail.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueContributor: {
			type: new GraphQLNonNull(require('./contributor.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDataRequirement: {
			type: new GraphQLNonNull(require('./datarequirement.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueExpression: {
			type: new GraphQLNonNull(require('./expression.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueParameterDefinition: {
			type: new GraphQLNonNull(require('./parameterdefinition.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueRelatedArtifact: {
			type: new GraphQLNonNull(require('./relatedartifact.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueTriggerDefinition: {
			type: new GraphQLNonNull(require('./triggerdefinition.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueUsageContext: {
			type: new GraphQLNonNull(require('./usagecontext.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
		valueDosage: {
			type: new GraphQLNonNull(require('./dosage.schema.js')),
			description:
				'The actual value for the element, which must be one of the types allowed for this element.',
		},
	}),
});

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
 * @summary Taskinput Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Taskinput',
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
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'A code or description indicating how the input is intended to be used as part of the task execution.',
		},
		_valueBase64Binary: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueBase64Binary: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueCanonical: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueCanonical: {
			type: new GraphQLNonNull(CanonicalScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueDate: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueDecimal: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueId: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueInstant: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueInstant: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueMarkdown: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueMarkdown: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueOid: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueOid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valuePositiveInt: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valuePositiveInt: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueTime: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueUnsignedInt: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueUnsignedInt: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueUri: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueUrl: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueUrl: {
			type: new GraphQLNonNull(UrlScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		_valueUuid: {
			type: require('./element.schema.js'),
			description: 'The value of the input parameter as a basic type.',
		},
		valueUuid: {
			type: new GraphQLNonNull(UuidScalar),
			description: 'The value of the input parameter as a basic type.',
		},
		valueAddress: {
			type: new GraphQLNonNull(require('./address.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueAge: {
			type: new GraphQLNonNull(require('./age.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueAnnotation: {
			type: new GraphQLNonNull(require('./annotation.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueContactPoint: {
			type: new GraphQLNonNull(require('./contactpoint.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueCount: {
			type: new GraphQLNonNull(require('./count.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDistance: {
			type: new GraphQLNonNull(require('./distance.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDuration: {
			type: new GraphQLNonNull(require('./duration.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueHumanName: {
			type: new GraphQLNonNull(require('./humanname.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueIdentifier: {
			type: new GraphQLNonNull(require('./identifier.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueMoney: {
			type: new GraphQLNonNull(require('./money.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valuePeriod: {
			type: new GraphQLNonNull(require('./period.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueRatio: {
			type: new GraphQLNonNull(require('./ratio.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueReference: {
			type: new GraphQLNonNull(require('./resourcelist.schema')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueSampledData: {
			type: new GraphQLNonNull(require('./sampleddata.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueSignature: {
			type: new GraphQLNonNull(require('./signature.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueTiming: {
			type: new GraphQLNonNull(require('./timing.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueContactDetail: {
			type: new GraphQLNonNull(require('./contactdetail.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueContributor: {
			type: new GraphQLNonNull(require('./contributor.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDataRequirement: {
			type: new GraphQLNonNull(require('./datarequirement.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueExpression: {
			type: new GraphQLNonNull(require('./expression.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueParameterDefinition: {
			type: new GraphQLNonNull(require('./parameterdefinition.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueRelatedArtifact: {
			type: new GraphQLNonNull(require('./relatedartifact.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueTriggerDefinition: {
			type: new GraphQLNonNull(require('./triggerdefinition.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueUsageContext: {
			type: new GraphQLNonNull(require('./usagecontext.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
		valueDosage: {
			type: new GraphQLNonNull(require('./dosage.schema.js')),
			description: 'The value of the input parameter as a basic type.',
		},
	}),
});

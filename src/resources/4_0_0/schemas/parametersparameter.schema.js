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
 * @summary Parametersparameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Parametersparameter',
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
		_name: {
			type: require('./element.schema.js'),
			description:
				'The name of the parameter (reference to the operation definition).',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The name of the parameter (reference to the operation definition).',
		},
		_valueBase64Binary: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'If the parameter is a data type.',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'If the parameter is a data type.',
		},
		_valueCanonical: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueCanonical: {
			type: CanonicalScalar,
			description: 'If the parameter is a data type.',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueCode: {
			type: CodeScalar,
			description: 'If the parameter is a data type.',
		},
		_valueDate: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDate: {
			type: DateScalar,
			description: 'If the parameter is a data type.',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'If the parameter is a data type.',
		},
		_valueDecimal: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'If the parameter is a data type.',
		},
		_valueId: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueId: {
			type: IdScalar,
			description: 'If the parameter is a data type.',
		},
		_valueInstant: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueInstant: {
			type: InstantScalar,
			description: 'If the parameter is a data type.',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'If the parameter is a data type.',
		},
		_valueMarkdown: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueMarkdown: {
			type: GraphQLString,
			description: 'If the parameter is a data type.',
		},
		_valueOid: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueOid: {
			type: OidScalar,
			description: 'If the parameter is a data type.',
		},
		_valuePositiveInt: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valuePositiveInt: {
			type: PositiveIntScalar,
			description: 'If the parameter is a data type.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueString: {
			type: GraphQLString,
			description: 'If the parameter is a data type.',
		},
		_valueTime: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueTime: {
			type: TimeScalar,
			description: 'If the parameter is a data type.',
		},
		_valueUnsignedInt: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'If the parameter is a data type.',
		},
		_valueUri: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueUri: {
			type: UriScalar,
			description: 'If the parameter is a data type.',
		},
		_valueUrl: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueUrl: {
			type: UrlScalar,
			description: 'If the parameter is a data type.',
		},
		_valueUuid: {
			type: require('./element.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueUuid: {
			type: UuidScalar,
			description: 'If the parameter is a data type.',
		},
		valueAddress: {
			type: require('./address.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueAge: {
			type: require('./age.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueAnnotation: {
			type: require('./annotation.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueAttachment: {
			type: require('./attachment.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueCoding: {
			type: require('./coding.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueContactPoint: {
			type: require('./contactpoint.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueCount: {
			type: require('./count.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDistance: {
			type: require('./distance.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDuration: {
			type: require('./duration.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueHumanName: {
			type: require('./humanname.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueIdentifier: {
			type: require('./identifier.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueMoney: {
			type: require('./money.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valuePeriod: {
			type: require('./period.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueQuantity: {
			type: require('./quantity.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueRange: {
			type: require('./range.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueRatio: {
			type: require('./ratio.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueReference: {
			type: require('./resourcelist.schema'),
			description: 'If the parameter is a data type.',
		},
		valueSampledData: {
			type: require('./sampleddata.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueSignature: {
			type: require('./signature.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueTiming: {
			type: require('./timing.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueContactDetail: {
			type: require('./contactdetail.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueContributor: {
			type: require('./contributor.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDataRequirement: {
			type: require('./datarequirement.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueExpression: {
			type: require('./expression.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueParameterDefinition: {
			type: require('./parameterdefinition.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueRelatedArtifact: {
			type: require('./relatedartifact.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueTriggerDefinition: {
			type: require('./triggerdefinition.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueUsageContext: {
			type: require('./usagecontext.schema.js'),
			description: 'If the parameter is a data type.',
		},
		valueDosage: {
			type: require('./dosage.schema.js'),
			description: 'If the parameter is a data type.',
		},
		resource: {
			type: require('./resourcelist.schema'),
			description: 'If the parameter is a whole resource.',
		},
	}),
});

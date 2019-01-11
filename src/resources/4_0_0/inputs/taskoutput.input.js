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
 * @summary Taskoutput Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Taskoutput_Input',
	description: '',
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
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'The name of the Output parameter.',
		},
		_valueBase64Binary: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueBase64Binary: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueBoolean: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueCanonical: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueCanonical: {
			type: new GraphQLNonNull(CanonicalScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueCode: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueDate: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueDateTime: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueDecimal: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueId: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueInstant: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueInstant: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueMarkdown: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueMarkdown: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueOid: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueOid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valuePositiveInt: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valuePositiveInt: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueString: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueTime: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueUnsignedInt: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueUnsignedInt: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueUri: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueUrl: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueUrl: {
			type: new GraphQLNonNull(UrlScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		_valueUuid: {
			type: require('./element.input.js'),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueUuid: {
			type: new GraphQLNonNull(UuidScalar),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueAddress: {
			type: new GraphQLNonNull(require('./address.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueAge: {
			type: new GraphQLNonNull(require('./age.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueAnnotation: {
			type: new GraphQLNonNull(require('./annotation.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueAttachment: {
			type: new GraphQLNonNull(require('./attachment.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueContactPoint: {
			type: new GraphQLNonNull(require('./contactpoint.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueCount: {
			type: new GraphQLNonNull(require('./count.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDistance: {
			type: new GraphQLNonNull(require('./distance.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDuration: {
			type: new GraphQLNonNull(require('./duration.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueHumanName: {
			type: new GraphQLNonNull(require('./humanname.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueIdentifier: {
			type: new GraphQLNonNull(require('./identifier.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueMoney: {
			type: new GraphQLNonNull(require('./money.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valuePeriod: {
			type: new GraphQLNonNull(require('./period.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueRatio: {
			type: new GraphQLNonNull(require('./ratio.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueReference: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueSampledData: {
			type: new GraphQLNonNull(require('./sampleddata.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueSignature: {
			type: new GraphQLNonNull(require('./signature.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueTiming: {
			type: new GraphQLNonNull(require('./timing.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueContactDetail: {
			type: new GraphQLNonNull(require('./contactdetail.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueContributor: {
			type: new GraphQLNonNull(require('./contributor.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDataRequirement: {
			type: new GraphQLNonNull(require('./datarequirement.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueExpression: {
			type: new GraphQLNonNull(require('./expression.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueParameterDefinition: {
			type: new GraphQLNonNull(require('./parameterdefinition.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueRelatedArtifact: {
			type: new GraphQLNonNull(require('./relatedartifact.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueTriggerDefinition: {
			type: new GraphQLNonNull(require('./triggerdefinition.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueUsageContext: {
			type: new GraphQLNonNull(require('./usagecontext.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
		valueDosage: {
			type: new GraphQLNonNull(require('./dosage.input.js')),
			description: 'The value of the Output parameter as a basic type.',
		},
	}),
});

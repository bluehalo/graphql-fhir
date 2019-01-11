const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Schedule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Schedule',
	description:
		'A container for slots of time that may be available for booking appointments.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Schedule_Enum_schema',
					values: { Schedule: { value: 'Schedule' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'External Ids for this item.',
		},
		_active: {
			type: require('./element.schema.js'),
			description:
				'Whether this schedule record is in active use or should not be used (such as was entered in error).',
		},
		active: {
			type: GraphQLBoolean,
			description:
				'Whether this schedule record is in active use or should not be used (such as was entered in error).',
		},
		serviceCategory: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A broad categorization of the service that is to be performed during this appointment.',
		},
		serviceType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The specific service that is to be performed during this appointment.',
		},
		specialty: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The specialty of a practitioner that would be required to perform the service requested in this appointment.',
		},
		actor: {
			type: new GraphQLList(
				new GraphQLNonNull(
					new GraphQLUnionType({
						name: 'Scheduleactor_actor_Union',
						description:
							'Slots that reference this schedule resource provide the availability details to these referenced resource(s).',
						types: () => [
							require('./patient.schema.js'),
							require('./practitioner.schema.js'),
							require('./practitionerrole.schema.js'),
							require('./relatedperson.schema.js'),
							require('./device.schema.js'),
							require('./healthcareservice.schema.js'),
							require('./location.schema.js'),
						],
						resolveType(data) {
							if (data && data.resourceType === 'Patient') {
								return require('./patient.schema.js');
							}
							if (data && data.resourceType === 'Practitioner') {
								return require('./practitioner.schema.js');
							}
							if (data && data.resourceType === 'PractitionerRole') {
								return require('./practitionerrole.schema.js');
							}
							if (data && data.resourceType === 'RelatedPerson') {
								return require('./relatedperson.schema.js');
							}
							if (data && data.resourceType === 'Device') {
								return require('./device.schema.js');
							}
							if (data && data.resourceType === 'HealthcareService') {
								return require('./healthcareservice.schema.js');
							}
							if (data && data.resourceType === 'Location') {
								return require('./location.schema.js');
							}
						},
					}),
				),
			),
			description:
				'Slots that reference this schedule resource provide the availability details to these referenced resource(s).',
		},
		planningHorizon: {
			type: require('./period.schema.js'),
			description:
				"The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a 'template' for planning outside these dates.",
		},
		_comment: {
			type: require('./element.schema.js'),
			description:
				'Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.',
		},
	}),
});

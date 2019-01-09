const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ProcedureRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedureRequest',
	description: 'Base StructureDefinition for ProcedureRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ProcedureRequest_Enum_schema',
					values: { ProcedureRequest: { value: 'ProcedureRequest' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
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
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifiers assigned to this order by the order or by the receiver.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ProcedureRequestsubject_subject_Union',
					description:
						'The person, animal or group that should receive the procedure.',
					types: () => [
						require('./patient.schema.js'),
						require('./group.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
					},
				}),
			),
			description:
				'The person, animal or group that should receive the procedure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonReference: {
			type: new GraphQLUnionType({
				name: 'ProcedureRequestreasonReference_reasonReference_Union',
				description:
					'The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.',
				types: () => [require('./condition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Condition') {
						return require('./condition.schema.js');
					}
				},
			}),
			description:
				'The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.',
		},
		_scheduledDateTime: {
			type: require('./element.schema.js'),
			description:
				"The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		scheduledDateTime: {
			type: DateTimeScalar,
			description:
				"The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		scheduledPeriod: {
			type: require('./period.schema.js'),
			description:
				"The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		scheduledTiming: {
			type: require('./timing.schema.js'),
			description:
				"The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'ProcedureRequestencounter_encounter_Union',
				description:
					'The encounter within which the procedure proposal or request was created.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The encounter within which the procedure proposal or request was created.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'ProcedureRequestperformer_performer_Union',
				description: 'For example, the surgeon, anaethetist, endoscopist, etc.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'For example, the surgeon, anaethetist, endoscopist, etc.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-request-status
		status: {
			type: CodeScalar,
			description: 'The status of the order.',
		},
		notes: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Any other notes associated with this proposal or order - e.g. provider instructions.',
		},
		_asNeededBoolean: {
			type: require('./element.schema.js'),
			description:
				'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.',
		},
		asNeededBoolean: {
			type: GraphQLBoolean,
			description:
				'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.',
		},
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.',
		},
		_orderedOn: {
			type: require('./element.schema.js'),
			description: 'The time when the request was made.',
		},
		orderedOn: {
			type: DateTimeScalar,
			description: 'The time when the request was made.',
		},
		orderer: {
			type: new GraphQLUnionType({
				name: 'ProcedureRequestorderer_orderer_Union',
				description:
					'The healthcare professional responsible for proposing or ordering the procedure.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'The healthcare professional responsible for proposing or ordering the procedure.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description: 'The clinical priority associated with this order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-request-priority
		priority: {
			type: CodeScalar,
			description: 'The clinical priority associated with this order.',
		},
	}),
});

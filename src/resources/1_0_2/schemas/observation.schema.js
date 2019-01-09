const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary Observation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Observation',
	description: 'Base StructureDefinition for Observation Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Observation_Enum_schema',
					values: { Observation: { value: 'Observation' } },
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
			description: 'A unique identifier for the simple observation instance.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the result value.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the result value.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code that classifies the general type of observation being made.  This is used  for searching, sorting and display purposes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				"Describes what was observed. Sometimes this is called the observation 'name'.",
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Observationsubject_subject_Union',
				description:
					'The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
					require('./device.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Observationencounter_encounter_Union',
				description:
					'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.',
		},
		_effectiveDateTime: {
			type: require('./element.schema.js'),
			description:
				"The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the 'physiologically relevant time'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.",
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description:
				"The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the 'physiologically relevant time'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.",
		},
		effectivePeriod: {
			type: require('./period.schema.js'),
			description:
				"The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the 'physiologically relevant time'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.",
		},
		_issued: {
			type: require('./element.schema.js'),
			description:
				'The date and time this observation was made available to providers, typically after the results have been reviewed and verified.',
		},
		issued: {
			type: InstantScalar,
			description:
				'The date and time this observation was made available to providers, typically after the results have been reviewed and verified.',
		},
		performer: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Observationperformer_performer_Union',
					description:
						"Who was responsible for asserting the observed value as 'true'.",
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
			),
			description:
				"Who was responsible for asserting the observed value as 'true'.",
		},
		valueQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueString: {
			type: GraphQLString,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueRange: {
			type: require('./range.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueRatio: {
			type: require('./ratio.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueSampledData: {
			type: require('./sampleddata.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueTime: {
			type: require('./element.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueTime: {
			type: TimeScalar,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valuePeriod: {
			type: require('./period.schema.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
		dataAbsentReason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Provides a reason why the expected value in the element Observation.value[x] is missing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-interpretation
		interpretation: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.',
		},
		_comments: {
			type: require('./element.schema.js'),
			description:
				'May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.',
		},
		comments: {
			type: GraphQLString,
			description:
				'May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Indicates the site on the subject's body where the observation was made (i.e. the target site).",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-methods
		method: {
			type: require('./codeableconcept.schema.js'),
			description: 'Indicates the mechanism used to perform the observation.',
		},
		specimen: {
			type: new GraphQLUnionType({
				name: 'Observationspecimen_specimen_Union',
				description:
					'The specimen that was used when this observation was made.',
				types: () => [require('./specimen.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Specimen') {
						return require('./specimen.schema.js');
					}
				},
			}),
			description: 'The specimen that was used when this observation was made.',
		},
		device: {
			type: new GraphQLUnionType({
				name: 'Observationdevice_device_Union',
				description: 'The device used to generate the observation data.',
				types: () => [
					require('./device.schema.js'),
					require('./devicemetric.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'DeviceMetric') {
						return require('./devicemetric.schema.js');
					}
				},
			}),
			description: 'The device used to generate the observation data.',
		},
		referenceRange: {
			type: new GraphQLList(require('./observationreferencerange.schema.js')),
			description:
				'Guidance on how to interpret the value by comparison to a normal or recommended range.',
		},
		related: {
			type: new GraphQLList(require('./observationrelated.schema.js')),
			description:
				'A  reference to another resource (usually another Observation but could  also be a QuestionnaireAnswer) whose relationship is defined by the relationship type code.',
		},
		component: {
			type: new GraphQLList(require('./observationcomponent.schema.js')),
			description:
				'Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.',
		},
	}),
});

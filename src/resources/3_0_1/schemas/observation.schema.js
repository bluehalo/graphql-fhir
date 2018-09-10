const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const TimeScalar = require('../scalars/time.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ObservationResourceType = new GraphQLEnumType({
	name: 'ObservationResourceType',
	values: {
		Observation: { value: 'Observation' }
	}
});

/**
 * @name exports
 * @summary Observation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Observation',
	description: 'Base StructureDefinition for Observation Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ObservationResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A unique identifier assigned to this observation.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A plan, proposal or order that is fulfilled in whole or in part by this event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the result value.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the result value.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code that classifies the general type of observation being made.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Describes what was observed. Sometimes this is called the observation \'name\'.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.'
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
		},
		_effectiveDateTime: {
			type: require('./element.schema'),
			description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
		},
		effectivePeriod: {
			type: require('./period.schema'),
			description: 'The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.'
		},
		issued: {
			type: InstantScalar,
			description: 'The date and time this observation was made available to providers, typically after the results have been reviewed and verified.'
		},
		_issued: {
			type: require('./element.schema'),
			description: 'The date and time this observation was made available to providers, typically after the results have been reviewed and verified.'
		},
		performer: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Who was responsible for asserting the observed value as \'true\'.'
		},
		valueQuantity: {
			type: require('./quantity.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueString: {
			type: GraphQLString,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueRange: {
			type: require('./range.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueRatio: {
			type: require('./ratio.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueSampledData: {
			type: require('./sampleddata.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueAttachment: {
			type: require('./attachment.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueTime: {
			type: TimeScalar,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueTime: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueDateTime: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valuePeriod: {
			type: require('./period.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
		dataAbsentReason: {
			type: require('./codeableconcept.schema'),
			description: 'Provides a reason why the expected value in the element Observation.value[x] is missing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-interpretation
		interpretation: {
			type: require('./codeableconcept.schema'),
			description: 'The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.'
		},
		comment: {
			type: GraphQLString,
			description: 'May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the site on the subject\'s body where the observation was made (i.e. the target site).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-methods
		method: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the mechanism used to perform the observation.'
		},
		specimen: {
			type: require('./reference.schema'),
			description: 'The specimen that was used when this observation was made.'
		},
		device: {
			type: require('./reference.schema'),
			description: 'The device used to generate the observation data.'
		},
		referenceRange: {
			type: new GraphQLList(require('./observationreferencerange.schema')),
			description: 'Guidance on how to interpret the value by comparison to a normal or recommended range.'
		},
		related: {
			type: new GraphQLList(require('./observationrelated.schema')),
			description: 'A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code.'
		},
		component: {
			type: new GraphQLList(require('./observationcomponent.schema')),
			description: 'Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.'
		}
	})
});

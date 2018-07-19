const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let EncounterResourceInputType = new GraphQLEnumType({
	name: 'EncounterResourceInputType',
	values: {
		Encounter: { value: 'Encounter' }
	}
});

/**
 * @name exports
 * @summary Encounter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Encounter_Input',
	description: 'Base StructureDefinition for Encounter Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(EncounterResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier(s) by which this encounter is known.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-state
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'planned | arrived | in-progress | onleave | finished | cancelled.'
		},
		_status: {
			type: require('./element.input'),
			description: 'planned | arrived | in-progress | onleave | finished | cancelled.'
		},
		statusHistory: {
			type: new GraphQLList(require('./encounterstatushistory.input')),
			description: 'The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-class
		class: {
			type: CodeScalar,
			description: 'inpatient | outpatient | ambulatory | emergency +.'
		},
		_class: {
			type: require('./element.input'),
			description: 'inpatient | outpatient | ambulatory | emergency +.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-type
		type: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-priority
		priority: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the urgency of the encounter.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'The patient present at the encounter.'
		},
		episodeOfCare: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).'
		},
		incomingReferral: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The referral request this encounter satisfies (incoming referral).'
		},
		participant: {
			type: new GraphQLList(require('./encounterparticipant.input')),
			description: 'The list of people responsible for providing the service.'
		},
		appointment: {
			type: require('./reference.input'),
			description: 'The appointment that scheduled this encounter.'
		},
		period: {
			type: require('./period.input'),
			description: 'The start and end time of the encounter.'
		},
		length: {
			type: require('./quantity.input'),
			description: 'Quantity of time the encounter lasted. This excludes the time during leaves of absence.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-reason
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.'
		},
		indication: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.'
		},
		hospitalization: {
			type: require('./encounterhospitalization.input'),
			description: 'Details about the admission to a healthcare service.'
		},
		location: {
			type: new GraphQLList(require('./encounterlocation.input')),
			description: 'List of locations where  the patient has been during this encounter.'
		},
		serviceProvider: {
			type: require('./reference.input'),
			description: 'An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location\'s Organization.'
		},
		partOf: {
			type: require('./reference.input'),
			description: 'Another Encounter of which this encounter is a part of (administratively or in time).'
		}
	})
});

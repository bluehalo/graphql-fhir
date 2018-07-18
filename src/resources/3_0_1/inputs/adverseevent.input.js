const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary AdverseEvent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AdverseEvent_Input',
	description: 'Base StructureDefinition for AdverseEvent Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-category
		category: {
			type: CodeScalar,
			description: 'The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.'
		},
		_category: {
			type: require('./element.input'),
			description: 'The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'This element defines the specific type of event that occurred or that was prevented from occurring.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the adverse event occurred.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date (and perhaps time) when the adverse event occurred.'
		},
		reaction: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).'
		},
		location: {
			type: require('./reference.input'),
			description: 'The information about where the adverse event occurred.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-seriousness
		seriousness: {
			type: require('./codeableconcept.input'),
			description: 'Describes the seriousness or severity of the adverse event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-outcome
		outcome: {
			type: require('./codeableconcept.input'),
			description: 'Describes the type of outcome from the adverse event.'
		},
		recorder: {
			type: require('./reference.input'),
			description: 'Information on who recorded the adverse event.  May be the patient or a practitioner.'
		},
		eventParticipant: {
			type: require('./reference.input'),
			description: 'Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness).'
		},
		description: {
			type: GraphQLString,
			description: 'Describes the adverse event in text.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Describes the adverse event in text.'
		},
		suspectEntity: {
			type: new GraphQLList(require('./adverseeventsuspectentity.input')),
			description: 'Describes the entity that is suspected to have caused the adverse event.'
		},
		subjectMedicalHistory: {
			type: new GraphQLList(require('./reference.input')),
			description: 'AdverseEvent.subjectMedicalHistory.'
		},
		referenceDocument: {
			type: new GraphQLList(require('./reference.input')),
			description: 'AdverseEvent.referenceDocument.'
		},
		study: {
			type: new GraphQLList(require('./reference.input')),
			description: 'AdverseEvent.study.'
		}
	})
});

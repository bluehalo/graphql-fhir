const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let AdverseEventResourceType = new GraphQLEnumType({
	name: 'AdverseEventResourceType',
	values: {
		AdverseEvent: { value: 'AdverseEvent' },
	},
});

/**
 * @name exports
 * @summary AdverseEvent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AdverseEvent',
	description: 'Base StructureDefinition for AdverseEvent Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(AdverseEventResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: require('./identifier.schema'),
				description:
					'The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-category
			category: {
				type: CodeScalar,
				description:
					'The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.',
			},
			_category: {
				type: require('./element.schema'),
				description:
					'The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-type
			type: {
				type: require('./codeableconcept.schema'),
				description:
					'This element defines the specific type of event that occurred or that was prevented from occurring.',
			},
			subject: {
				type: require('./reference.schema'),
				description:
					'This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'The date (and perhaps time) when the adverse event occurred.',
			},
			_date: {
				type: require('./element.schema'),
				description:
					'The date (and perhaps time) when the adverse event occurred.',
			},
			reaction: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).',
			},
			location: {
				type: require('./reference.schema'),
				description: 'The information about where the adverse event occurred.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-seriousness
			seriousness: {
				type: require('./codeableconcept.schema'),
				description:
					'Describes the seriousness or severity of the adverse event.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-outcome
			outcome: {
				type: require('./codeableconcept.schema'),
				description: 'Describes the type of outcome from the adverse event.',
			},
			recorder: {
				type: require('./reference.schema'),
				description:
					'Information on who recorded the adverse event.  May be the patient or a practitioner.',
			},
			eventParticipant: {
				type: require('./reference.schema'),
				description:
					'Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness).',
			},
			description: {
				type: GraphQLString,
				description: 'Describes the adverse event in text.',
			},
			_description: {
				type: require('./element.schema'),
				description: 'Describes the adverse event in text.',
			},
			suspectEntity: {
				type: new GraphQLList(require('./adverseeventsuspectentity.schema')),
				description:
					'Describes the entity that is suspected to have caused the adverse event.',
			},
			subjectMedicalHistory: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'AdverseEvent.subjectMedicalHistory.',
			},
			referenceDocument: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'AdverseEvent.referenceDocument.',
			},
			study: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'AdverseEvent.study.',
			},
		}),
});

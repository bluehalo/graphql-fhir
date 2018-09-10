const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ClinicalImpressionResourceType = new GraphQLEnumType({
	name: 'ClinicalImpressionResourceType',
	values: {
		ClinicalImpression: { value: 'ClinicalImpression' }
	}
});

/**
 * @name exports
 * @summary ClinicalImpression Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClinicalImpression',
	description: 'Base StructureDefinition for ClinicalImpression Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ClinicalImpressionResourceType),
			description: 'Type of this resource.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient being assessed.'
		},
		assessor: {
			type: require('./reference.schema'),
			description: 'The clinician performing the assessment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-impression-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the workflow status of the assessment.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Identifies the workflow status of the assessment.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The point in time at which the assessment was concluded (not when it was recorded).'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The point in time at which the assessment was concluded (not when it was recorded).'
		},
		description: {
			type: GraphQLString,
			description: 'A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.'
		},
		previous: {
			type: require('./reference.schema'),
			description: 'A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient\'s conditions changes.'
		},
		problem: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'This a list of the general problems/conditions for a patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		triggerCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		triggerReference: {
			type: require('./reference.schema'),
			description: 'The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.'
		},
		investigations: {
			type: new GraphQLList(require('./clinicalimpressioninvestigations.schema')),
			description: 'One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.'
		},
		protocol: {
			type: UriScalar,
			description: 'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.'
		},
		_protocol: {
			type: require('./element.schema'),
			description: 'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.'
		},
		summary: {
			type: GraphQLString,
			description: 'A text summary of the investigations and the diagnosis.'
		},
		_summary: {
			type: require('./element.schema'),
			description: 'A text summary of the investigations and the diagnosis.'
		},
		finding: {
			type: new GraphQLList(require('./clinicalimpressionfinding.schema')),
			description: 'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		resolved: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Diagnoses/conditions resolved since the last assessment.'
		},
		ruledOut: {
			type: new GraphQLList(require('./clinicalimpressionruledout.schema')),
			description: 'Diagnosis considered not possible.'
		},
		prognosis: {
			type: GraphQLString,
			description: 'Estimate of likely outcome.'
		},
		_prognosis: {
			type: require('./element.schema'),
			description: 'Estimate of likely outcome.'
		},
		plan: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Plan of action after assessment.'
		},
		action: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Actions taken during assessment.'
		}
	})
});

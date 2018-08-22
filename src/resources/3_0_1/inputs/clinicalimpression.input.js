const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ClinicalImpressionResourceInputType = new GraphQLEnumType({
	name: 'ClinicalImpressionResourceInputType',
	values: {
		ClinicalImpression: { value: 'ClinicalImpression' }
	}
});

/**
 * @name exports
 * @summary ClinicalImpression Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClinicalImpression_Input',
	description: 'Base StructureDefinition for ClinicalImpression Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ClinicalImpressionResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A unique identifier assigned to the clinical impression that remains consistent regardless of what server the impression is stored on.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-impression-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the workflow status of the assessment.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Identifies the workflow status of the assessment.'
		},
		code: {
			type: require('./codeableconcept.input'),
			description: 'Categorizes the type of clinical assessment performed.'
		},
		description: {
			type: GraphQLString,
			description: 'A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient or group of individuals assessed as part of this record.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care this impression was created as part of.'
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description: 'The point in time or period over which the subject was assessed.'
		},
		_effectiveDateTime: {
			type: require('./element.input'),
			description: 'The point in time or period over which the subject was assessed.'
		},
		effectivePeriod: {
			type: require('./period.input'),
			description: 'The point in time or period over which the subject was assessed.'
		},
		date: {
			type: DateTimeScalar,
			description: 'Indicates when the documentation of the assessment was complete.'
		},
		_date: {
			type: require('./element.input'),
			description: 'Indicates when the documentation of the assessment was complete.'
		},
		assessor: {
			type: require('./reference.input'),
			description: 'The clinician performing the assessment.'
		},
		previous: {
			type: require('./reference.input'),
			description: 'A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient\'s conditions changes.'
		},
		problem: {
			type: new GraphQLList(require('./reference.input')),
			description: 'This a list of the relevant problems/conditions for a patient.'
		},
		investigation: {
			type: new GraphQLList(require('./clinicalimpressioninvestigation.input')),
			description: 'One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.'
		},
		protocol: {
			type: new GraphQLList(UriScalar),
			description: 'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.'
		},
		_protocol: {
			type: require('./element.input'),
			description: 'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.'
		},
		summary: {
			type: GraphQLString,
			description: 'A text summary of the investigations and the diagnosis.'
		},
		_summary: {
			type: require('./element.input'),
			description: 'A text summary of the investigations and the diagnosis.'
		},
		finding: {
			type: new GraphQLList(require('./clinicalimpressionfinding.input')),
			description: 'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinicalimpression-prognosis
		prognosisCodeableConcept: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Estimate of likely outcome.'
		},
		prognosisReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'RiskAssessment expressing likely outcome.'
		},
		action: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Action taken as part of assessment procedure.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.'
		}
	})
});

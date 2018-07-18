const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ProcedureRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcedureRequest_Input',
	description: 'Base StructureDefinition for ProcedureRequest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.'
		},
		definition: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Protocol or definition followed by this request.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Plan/proposal/order fulfilled by this request.'
		},
		replaces: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The request takes the place of the referenced completed or terminated request(s).'
		},
		requisition: {
			type: require('./identifier.input'),
			description: 'A shared identifier common to all procedure or diagnostic requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the order.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the order.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the request is a proposal, plan, an original order or a reflex order.'
		},
		_intent: {
			type: require('./element.input'),
			description: 'Whether the request is a proposal, plan, an original order or a reflex order.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.input'),
			description: 'Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.'
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description: 'Set this to true if the record is saying that the procedure should NOT be performed.'
		},
		_doNotPerform: {
			type: require('./element.input'),
			description: 'Set this to true if the record is saying that the procedure should NOT be performed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A code that classifies the procedure for searching, sorting and display purposes (e.g. \'Surgical Procedure\').'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'A code that identifies a particular procedure, diagnostic investigation, or panel of investigations, that have been requested.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).'
		},
		context: {
			type: require('./reference.input'),
			description: 'An encounter or episode of care that provides additional information about the healthcare context in which this request is made.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date/time at which the diagnostic testing should occur.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'The date/time at which the diagnostic testing should occur.'
		},
		occurrencePeriod: {
			type: require('./period.input'),
			description: 'The date/time at which the diagnostic testing should occur.'
		},
		occurrenceTiming: {
			type: require('./timing.input'),
			description: 'The date/time at which the diagnostic testing should occur.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededBoolean: {
			type: GraphQLBoolean,
			description: 'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example \'pain\', \'on flare-up\', etc.'
		},
		_asNeededBoolean: {
			type: require('./element.input'),
			description: 'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example \'pain\', \'on flare-up\', etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example \'pain\', \'on flare-up\', etc.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request transitioned to being actionable.'
		},
		_authoredOn: {
			type: require('./element.input'),
			description: 'When the request transitioned to being actionable.'
		},
		requester: {
			type: require('./procedurerequestrequester.input'),
			description: 'The individual who initiated the request and has responsibility for its activation.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		performerType: {
			type: require('./codeableconcept.input'),
			description: 'Desired type of performer for doing the diagnostic testing.'
		},
		performer: {
			type: require('./reference.input'),
			description: 'The desired perfomer for doing the diagnostic testing.  For example, the surgeon, dermatopathologist, endoscopist, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'An explanation or justification for why this diagnostic investigation is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Indicates another resource that provides a justification for why this diagnostic investigation is being requested.   May relate to the resources referred to in supportingInformation.'
		},
		supportingInfo: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as \'ask at order entry questions (AOEs)\'.  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.'
		},
		specimen: {
			type: new GraphQLList(require('./reference.input')),
			description: 'One or more specimens that the laboratory procedure will use.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Anatomic location where the procedure should be performed. This is the target site.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Any other notes and comments made about the service request. For example, letting provider know that \'patient hates needles\' or other provider instructions.'
		},
		relevantHistory: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Key events in the history of the request.'
		}
	})
});

const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ProcedureResourceInputType = new GraphQLEnumType({
	name: 'ProcedureResourceInputType',
	values: {
		Procedure: { value: 'Procedure' }
	}
});

/**
 * @name exports
 * @summary Procedure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Procedure_Input',
	description: 'Base StructureDefinition for Procedure Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ProcedureResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		definition: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A reference to a resource that contains details of the request for this procedure.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A larger event of which this particular procedure is a component or step.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/event-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code specifying the state of the procedure. Generally this will be in-progress or completed state.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code specifying the state of the procedure. Generally this will be in-progress or completed state.'
		},
		notDone: {
			type: GraphQLBoolean,
			description: 'Set this to true if the record is saying that the procedure was NOT performed.'
		},
		_notDone: {
			type: require('./element.input'),
			description: 'Set this to true if the record is saying that the procedure was NOT performed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-not-performed-reason
		notDoneReason: {
			type: require('./codeableconcept.input'),
			description: 'A code indicating why the procedure was not performed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-category
		category: {
			type: require('./codeableconcept.input'),
			description: 'A code that classifies the procedure for searching, sorting and display purposes (e.g. \'Surgical Procedure\').'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: require('./codeableconcept.input'),
			description: 'The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. \'Laparoscopic Appendectomy\').'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The person, animal or group on which the procedure was performed.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter during which the procedure was performed.'
		},
		performedDateTime: {
			type: DateTimeScalar,
			description: 'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.'
		},
		_performedDateTime: {
			type: require('./element.input'),
			description: 'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.'
		},
		performedPeriod: {
			type: require('./period.input'),
			description: 'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.'
		},
		performer: {
			type: new GraphQLList(require('./procedureperformer.input')),
			description: 'Limited to \'real\' people rather than equipment.'
		},
		location: {
			type: require('./reference.input'),
			description: 'The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The condition that is the reason why the procedure was performed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-outcome
		outcome: {
			type: require('./codeableconcept.input'),
			description: 'The outcome of the procedure - did it resolve reasons for the procedure being performed?.'
		},
		report: {
			type: new GraphQLList(require('./reference.input')),
			description: 'This could be a histology result, pathology report, surgical report, etc..'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		complication: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any \'post procedure\' issues.'
		},
		complicationDetail: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Any complications that occurred during the procedure, or in the immediate post-performance period.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-followup
		followUp: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Any other notes about the procedure.  E.g. the operative notes.'
		},
		focalDevice: {
			type: new GraphQLList(require('./procedurefocaldevice.input')),
			description: 'A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.'
		},
		usedReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies medications, devices and any other substance used as part of the procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		usedCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies coded items that were used as part of the procedure.'
		}
	})
});

const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Procedure Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Procedure',
	description: 'Base StructureDefinition for Procedure Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person, animal or group on which the procedure was performed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code specifying the state of the procedure. Generally this will be in-progress or completed state.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code specifying the state of the procedure. Generally this will be in-progress or completed state.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'A code that classifies the procedure for searching, sorting and display purposes (e.g. \'Surgical Procedure\').'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. \'Laparoscopic Appendectomy\').'
		},
		notPerformed: {
			type: GraphQLBoolean,
			description: 'Set this to true if the record is saying that the procedure was NOT performed.'
		},
		_notPerformed: {
			type: require('./element.schema'),
			description: 'Set this to true if the record is saying that the procedure was NOT performed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-not-performed-reason
		reasonNotPerformed: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code indicating why the procedure was not performed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonReference: {
			type: require('./reference.schema'),
			description: 'The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.'
		},
		performer: {
			type: new GraphQLList(require('./procedureperformer.schema')),
			description: 'Limited to \'real\' people rather than equipment.'
		},
		performedDateTime: {
			type: DateTimeScalar,
			description: 'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.'
		},
		_performedDateTime: {
			type: require('./element.schema'),
			description: 'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.'
		},
		performedPeriod: {
			type: require('./period.schema'),
			description: 'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The encounter during which the procedure was performed.'
		},
		location: {
			type: require('./reference.schema'),
			description: 'The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-outcome
		outcome: {
			type: require('./codeableconcept.schema'),
			description: 'The outcome of the procedure - did it resolve reasons for the procedure being performed?.'
		},
		report: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'This could be a histology result, pathology report, surgical report, etc..'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		complication: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any \'post procedure\' issues.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-followup
		followUp: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'A reference to a resource that contains details of the request for this procedure.'
		},
		notes: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Any other notes about the procedure.  E.g. the operative notes.'
		},
		focalDevice: {
			type: new GraphQLList(require('./procedurefocaldevice.schema')),
			description: 'A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.'
		},
		used: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies medications, devices and any other substance used as part of the procedure.'
		}
	})
});

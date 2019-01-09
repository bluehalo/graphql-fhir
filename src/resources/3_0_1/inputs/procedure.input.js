const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Procedure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Procedure_Input',
	description: 'Base StructureDefinition for Procedure Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Procedure_Enum_input',
					values: { Procedure: { value: 'Procedure' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description:
				'A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'A reference to a resource that contains details of the request for this procedure.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description:
				'A larger event of which this particular procedure is a component or step.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'A code specifying the state of the procedure. Generally this will be in-progress or completed state.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code specifying the state of the procedure. Generally this will be in-progress or completed state.',
		},
		_notDone: {
			type: require('./element.input.js'),
			description:
				'Set this to true if the record is saying that the procedure was NOT performed.',
		},
		notDone: {
			type: GraphQLBoolean,
			description:
				'Set this to true if the record is saying that the procedure was NOT performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-not-performed-reason
		notDoneReason: {
			type: require('./codeableconcept.input.js'),
			description: 'A code indicating why the procedure was not performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-category
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				"A code that classifies the procedure for searching, sorting and display purposes (e.g. 'Surgical Procedure').",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: require('./codeableconcept.input.js'),
			description:
				"The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. 'Laparoscopic Appendectomy').",
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The person, animal or group on which the procedure was performed.',
		},
		context: {
			type: GraphQLString,
			description: 'The encounter during which the procedure was performed.',
		},
		_performedDateTime: {
			type: require('./element.input.js'),
			description:
				'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedDateTime: {
			type: DateTimeScalar,
			description:
				'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedPeriod: {
			type: require('./period.input.js'),
			description:
				'The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performer: {
			type: new GraphQLList(require('./procedureperformer.input.js')),
			description: "Limited to 'real' people rather than equipment.",
		},
		location: {
			type: GraphQLString,
			description:
				'The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'The condition that is the reason why the procedure was performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-outcome
		outcome: {
			type: require('./codeableconcept.input.js'),
			description:
				'The outcome of the procedure - did it resolve reasons for the procedure being performed?',
		},
		report: {
			type: new GraphQLList(GraphQLString),
			description:
				'This could be a histology result, pathology report, surgical report, etc..',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		complication: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				"Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.",
		},
		complicationDetail: {
			type: new GraphQLList(GraphQLString),
			description:
				'Any complications that occurred during the procedure, or in the immediate post-performance period.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-followup
		followUp: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Any other notes about the procedure.  E.g. the operative notes.',
		},
		focalDevice: {
			type: new GraphQLList(require('./procedurefocaldevice.input.js')),
			description:
				'A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.',
		},
		usedReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies medications, devices and any other substance used as part of the procedure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		usedCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Identifies coded items that were used as part of the procedure.',
		},
	}),
});

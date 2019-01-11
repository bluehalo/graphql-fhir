const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Procedure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Procedure_Input',
	description:
		'An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.',
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server.',
		},
		_instantiatesCanonical: {
			type: require('./element.input.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.',
		},
		_instantiatesUri: {
			type: require('./element.input.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.',
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
				'A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.',
		},
		statusReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Captures the reason for the current state of the procedure.',
		},
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				"A code that classifies the procedure for searching, sorting and display purposes (e.g. 'Surgical Procedure').",
		},
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
		encounter: {
			type: GraphQLString,
			description:
				'The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.',
		},
		_performedDateTime: {
			type: require('./element.input.js'),
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedDateTime: {
			type: DateTimeScalar,
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedPeriod: {
			type: require('./period.input.js'),
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		_performedString: {
			type: require('./element.input.js'),
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedString: {
			type: GraphQLString,
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedAge: {
			type: require('./age.input.js'),
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		performedRange: {
			type: require('./range.input.js'),
			description:
				'Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.',
		},
		recorder: {
			type: GraphQLString,
			description:
				'Individual who recorded the record and takes responsibility for its content.',
		},
		asserter: {
			type: GraphQLString,
			description: 'Individual who is making the procedure statement.',
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
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description: 'The justification of why the procedure was performed.',
		},
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.',
		},
		outcome: {
			type: require('./codeableconcept.input.js'),
			description:
				'The outcome of the procedure - did it resolve the reasons for the procedure being performed?',
		},
		report: {
			type: new GraphQLList(GraphQLString),
			description:
				'This could be a histology result, pathology report, surgical report, etc.',
		},
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
		followUp: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description: 'Any other notes and comments about the procedure.',
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
		usedCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Identifies coded items that were used as part of the procedure.',
		},
	}),
});

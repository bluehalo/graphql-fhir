const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary DocumentReferencecontext Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferencecontext_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		encounter: {
			type: new GraphQLList(GraphQLString),
			description:
				'Describes the clinical encounter or type of care that the document content is associated with.',
		},
		event: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				"This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a 'History and Physical Report' in which the procedure being documented is necessarily a 'History and Physical' act.",
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The time period over which the service that is described by the document was provided.',
		},
		facilityType: {
			type: require('./codeableconcept.input.js'),
			description: 'The kind of facility where the patient was seen.',
		},
		practiceSetting: {
			type: require('./codeableconcept.input.js'),
			description:
				'This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.',
		},
		sourcePatientInfo: {
			type: GraphQLString,
			description:
				'The Patient Information as known when the document was published. May be a reference to a version specific, or contained.',
		},
		related: {
			type: new GraphQLList(GraphQLString),
			description:
				'Related identifiers or resources associated with the DocumentReference.',
		},
	}),
});

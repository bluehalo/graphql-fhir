const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Compositionsection Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Compositionsection_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_title: {
			type: require('./element.input.js'),
			description:
				'The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.',
		},
		title: {
			type: GraphQLString,
			description:
				'The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/doc-section-codes
		code: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code identifying the kind of content contained within the section. This must be consistent with the section title.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative.",
		},
		_mode: {
			type: require('./element.input.js'),
			description:
				'How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-mode
		mode: {
			type: CodeScalar,
			description:
				'How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-order
		orderedBy: {
			type: require('./codeableconcept.input.js'),
			description:
				'Specifies the order applied to the items in the section entries.',
		},
		entry: {
			type: new GraphQLList(GraphQLString),
			description:
				'A reference to the actual resource from which the narrative in the section is derived.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-empty-reason
		emptyReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.',
		},
	}),
});

const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Composition.section Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CompositionSection_Input',
	description: 'The root of the sections that make up the composition.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		title: {
			type: GraphQLString,
			description: 'The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.'
		},
		_title: {
			type: require('./element.input'),
			description: 'The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/doc-section-codes
		code: {
			type: require('./codeableconcept.input'),
			description: 'A code identifying the kind of content contained within the section. This must be consistent with the section title.'
		},
		text: {
			type: require('./narrative.input'),
			description: 'A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \'clinically safe\' for a human to just read the narrative.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-mode
		mode: {
			type: CodeScalar,
			description: 'How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-order
		orderedBy: {
			type: require('./codeableconcept.input'),
			description: 'Specifies the order applied to the items in the section entries.'
		},
		entry: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A reference to the actual resource from which the narrative in the section is derived.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-empty-reason
		emptyReason: {
			type: require('./codeableconcept.input'),
			description: 'If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.'
		}
	})
});

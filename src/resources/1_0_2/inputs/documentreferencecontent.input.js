const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary DocumentReferencecontent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferencecontent_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		attachment: {
			type: new GraphQLNonNull(require('./attachment.input.js')),
			description:
				'The document or url of the document along with critical metadata to prove content has integrity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/formatcodes
		format: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.',
		},
	}),
});

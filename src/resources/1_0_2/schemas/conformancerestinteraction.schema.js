const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Conformancerestinteraction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformancerestinteraction',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'A coded identifier of the operation, supported by the system.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/system-restful-interaction
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A coded identifier of the operation, supported by the system.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description:
				'Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.',
		},
	}),
});

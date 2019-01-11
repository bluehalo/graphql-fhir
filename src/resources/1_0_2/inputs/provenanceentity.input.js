const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Provenanceentity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Provenanceentity_Input',
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
		_role: {
			type: require('./element.input.js'),
			description: 'How the entity was used during the activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/provenance-entity-role
		role: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the entity was used during the activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'The type of the entity. If the entity is a resource, then this is a resource type.',
		},
		_reference: {
			type: require('./element.input.js'),
			description:
				'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
		},
		reference: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
		},
		_display: {
			type: require('./element.input.js'),
			description: 'Human-readable description of the entity.',
		},
		display: {
			type: GraphQLString,
			description: 'Human-readable description of the entity.',
		},
	}),
});

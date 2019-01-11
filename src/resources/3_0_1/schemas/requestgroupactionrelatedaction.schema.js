const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary RequestGroupactionrelatedAction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RequestGroupactionrelatedAction',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_actionId: {
			type: require('./element.schema.js'),
			description: 'The element id of the action this is related to.',
		},
		actionId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The element id of the action this is related to.',
		},
		_relationship: {
			type: require('./element.schema.js'),
			description: 'The relationship of this action to the related action.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-relationship-type
		relationship: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The relationship of this action to the related action.',
		},
		offsetDuration: {
			type: require('./duration.schema.js'),
			description:
				'A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.',
		},
		offsetRange: {
			type: require('./range.schema.js'),
			description:
				'A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.',
		},
	}),
});

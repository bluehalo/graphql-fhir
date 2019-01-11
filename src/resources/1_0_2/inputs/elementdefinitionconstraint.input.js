const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionconstraint Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionconstraint_Input',
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
		_key: {
			type: require('./element.input.js'),
			description:
				'Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.',
		},
		key: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.',
		},
		_requirements: {
			type: require('./element.input.js'),
			description:
				'Description of why this constraint is necessary or appropriate.',
		},
		requirements: {
			type: GraphQLString,
			description:
				'Description of why this constraint is necessary or appropriate.',
		},
		_severity: {
			type: require('./element.input.js'),
			description:
				'Identifies the impact constraint violation has on the conformance of the instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/constraint-severity
		severity: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies the impact constraint violation has on the conformance of the instance.',
		},
		_human: {
			type: require('./element.input.js'),
			description:
				'Text that can be used to describe the constraint in messages identifying that the constraint has been violated.',
		},
		human: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Text that can be used to describe the constraint in messages identifying that the constraint has been violated.',
		},
		_xpath: {
			type: require('./element.input.js'),
			description:
				'An XPath expression of constraint that can be executed to see if this constraint is met.',
		},
		xpath: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'An XPath expression of constraint that can be executed to see if this constraint is met.',
		},
	}),
});

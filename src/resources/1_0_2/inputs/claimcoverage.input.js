const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Claimcoverage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Claimcoverage_Input',
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
		_sequence: {
			type: require('./element.input.js'),
			description: 'A service line item.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line item.',
		},
		_focal: {
			type: require('./element.input.js'),
			description:
				'The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.',
		},
		focal: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.',
		},
		coverage: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Reference to the program or plan identification, underwriter or payor.',
		},
		_businessArrangement: {
			type: require('./element.input.js'),
			description:
				'The contract number of a business agreement which describes the terms and conditions.',
		},
		businessArrangement: {
			type: GraphQLString,
			description:
				'The contract number of a business agreement which describes the terms and conditions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/relationship
		relationship: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'The relationship of the patient to the subscriber.',
		},
		_preAuthRef: {
			type: require('./element.input.js'),
			description:
				'A list of references from the Insurer to which these services pertain.',
		},
		preAuthRef: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of references from the Insurer to which these services pertain.',
		},
		claimResponse: {
			type: GraphQLString,
			description: 'The Coverages adjudication details.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input.js'),
			description:
				'The style (standard) and version of the original material which was converted into this resource.',
		},
	}),
});

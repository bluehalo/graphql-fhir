const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ClaimcareTeam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimcareTeam_Input',
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
		_sequence: {
			type: require('./element.input.js'),
			description: 'A number to uniquely identify care team entries.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A number to uniquely identify care team entries.',
		},
		provider: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Member of the team who provided the product or service.',
		},
		_responsible: {
			type: require('./element.input.js'),
			description:
				'The party who is billing and/or responsible for the claimed products or services.',
		},
		responsible: {
			type: GraphQLBoolean,
			description:
				'The party who is billing and/or responsible for the claimed products or services.',
		},
		role: {
			type: require('./codeableconcept.input.js'),
			description:
				'The lead, assisting or supervising practitioner and their discipline if a multidisciplinary team.',
		},
		qualification: {
			type: require('./codeableconcept.input.js'),
			description:
				'The qualification of the practitioner which is applicable for this service.',
		},
	}),
});

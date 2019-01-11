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
		_sequence: {
			type: require('./element.input.js'),
			description:
				'Sequence of the careTeam which serves to order and provide a link.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'Sequence of the careTeam which serves to order and provide a link.',
		},
		provider: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Member of the team who provided the overall service.',
		},
		_responsible: {
			type: require('./element.input.js'),
			description:
				'The party who is billing and responsible for the claimed good or service rendered to the patient.',
		},
		responsible: {
			type: GraphQLBoolean,
			description:
				'The party who is billing and responsible for the claimed good or service rendered to the patient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-careteamrole
		role: {
			type: require('./codeableconcept.input.js'),
			description:
				'The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/provider-qualification
		qualification: {
			type: require('./codeableconcept.input.js'),
			description: 'The qualification which is applicable for this service.',
		},
	}),
});

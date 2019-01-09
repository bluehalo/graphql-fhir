const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Contractterm Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contractterm_Input',
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
		identifier: {
			type: require('./identifier.input.js'),
			description: 'Unique identifier for this particular Contract Provision.',
		},
		_issued: {
			type: require('./element.input.js'),
			description: 'When this Contract Provision was issued.',
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this Contract Provision was issued.',
		},
		applies: {
			type: require('./period.input.js'),
			description:
				'Relevant time or time-period when this Contract Provision is applicable.',
		},
		topicCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description: 'The entity that the term applies to.',
		},
		topicReference: {
			type: GraphQLString,
			description: 'The entity that the term applies to.',
		},
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.',
		},
		subType: {
			type: require('./codeableconcept.input.js'),
			description:
				'A specialized legal clause or condition based on overarching contract type.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'Statement of a provision in a policy or a contract.',
		},
		text: {
			type: GraphQLString,
			description: 'Statement of a provision in a policy or a contract.',
		},
		securityLabel: {
			type: new GraphQLList(require('./contracttermsecuritylabel.input.js')),
			description:
				'Security labels that protect the handling of information about the term and its elements, which may be specifically identified..',
		},
		offer: {
			type: new GraphQLNonNull(require('./contracttermoffer.input.js')),
			description:
				'The matter of concern in the context of this provision of the agrement.',
		},
		asset: {
			type: new GraphQLList(require('./contracttermasset.input.js')),
			description: 'Contract Term Asset List.',
		},
		action: {
			type: new GraphQLList(require('./contracttermaction.input.js')),
			description:
				'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
		},
	}),
});

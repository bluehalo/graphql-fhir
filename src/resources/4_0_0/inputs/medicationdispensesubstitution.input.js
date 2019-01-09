const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicationDispensesubstitution Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispensesubstitution_Input',
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
		_wasSubstituted: {
			type: require('./element.input.js'),
			description:
				'True if the dispenser dispensed a different drug or product from what was prescribed.',
		},
		wasSubstituted: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'True if the dispenser dispensed a different drug or product from what was prescribed.',
		},
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code signifying whether a different drug was dispensed from what was prescribed.',
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Indicates the reason for the substitution (or lack of substitution) from what was prescribed.',
		},
		responsibleParty: {
			type: new GraphQLList(GraphQLString),
			description:
				'The person or organization that has primary responsibility for the substitution.',
		},
	}),
});

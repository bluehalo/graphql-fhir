const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ClaimResponseitemadjudication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseitemadjudication',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'A code to indicate the information type of this adjudication record. Information types may include the value submitted, maximum values or percentages allowed or payable under the plan, amounts that: the patient is responsible for in aggregate or pertaining to this item; amounts paid by other coverages; and, the benefit payable for this item.',
		},
		reason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code supporting the understanding of the adjudication result and explaining variance from expected amount.',
		},
		amount: {
			type: require('./money.schema.js'),
			description: 'Monetary amount associated with the category.',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'A non-monetary value associated with the category. Mutually exclusive to the amount element above.',
		},
		value: {
			type: GraphQLFloat,
			description:
				'A non-monetary value associated with the category. Mutually exclusive to the amount element above.',
		},
	}),
});

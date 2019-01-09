const {
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary Listentry Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Listentry_Input',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-item-flag
		flag: {
			type: require('./codeableconcept.input.js'),
			description:
				'The flag allows the system constructing the list to indicate the role and significance of the item in the list.',
		},
		_deleted: {
			type: require('./element.input.js'),
			description: 'True if this item is marked as deleted in the list.',
		},
		deleted: {
			type: GraphQLBoolean,
			description: 'True if this item is marked as deleted in the list.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'When this item was added to the list.',
		},
		date: {
			type: DateTimeScalar,
			description: 'When this item was added to the list.',
		},
		item: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A reference to the actual resource from which data was derived.',
		},
	}),
});

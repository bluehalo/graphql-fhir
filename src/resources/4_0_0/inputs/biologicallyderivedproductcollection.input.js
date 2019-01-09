const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary BiologicallyDerivedProductcollection Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BiologicallyDerivedProductcollection_Input',
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
		collector: {
			type: GraphQLString,
			description: 'Healthcare professional who is performing the collection.',
		},
		source: {
			type: GraphQLString,
			description:
				'The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.',
		},
		_collectedDateTime: {
			type: require('./element.input.js'),
			description: 'Time of product collection.',
		},
		collectedDateTime: {
			type: DateTimeScalar,
			description: 'Time of product collection.',
		},
		collectedPeriod: {
			type: require('./period.input.js'),
			description: 'Time of product collection.',
		},
	}),
});

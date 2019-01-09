const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicinalProductmanufacturingBusinessOperation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicinalProductmanufacturingBusinessOperation_Input',
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
		operationType: {
			type: require('./codeableconcept.input.js'),
			description: 'The type of manufacturing operation.',
		},
		authorisationReferenceNumber: {
			type: require('./identifier.input.js'),
			description: 'Regulatory authorization reference number.',
		},
		_effectiveDate: {
			type: require('./element.input.js'),
			description: 'Regulatory authorization date.',
		},
		effectiveDate: {
			type: DateTimeScalar,
			description: 'Regulatory authorization date.',
		},
		confidentialityIndicator: {
			type: require('./codeableconcept.input.js'),
			description: 'To indicate if this proces is commercially confidential.',
		},
		manufacturer: {
			type: new GraphQLList(GraphQLString),
			description:
				'The manufacturer or establishment associated with the process.',
		},
		regulator: {
			type: GraphQLString,
			description: 'A regulator which oversees the operation.',
		},
	}),
});

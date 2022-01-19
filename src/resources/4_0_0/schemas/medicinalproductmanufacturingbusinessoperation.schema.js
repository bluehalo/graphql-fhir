const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicinalProductmanufacturingBusinessOperation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicinalProductmanufacturingBusinessOperation',
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
		operationType: {
			type: require('./codeableconcept.schema.js'),
			description: 'The type of manufacturing operation.',
		},
		authorisationReferenceNumber: {
			type: require('./identifier.schema.js'),
			description: 'Regulatory authorization reference number.',
		},
		_effectiveDate: {
			type: require('./element.schema.js'),
			description: 'Regulatory authorization date.',
		},
		effectiveDate: {
			type: DateTimeScalar,
			description: 'Regulatory authorization date.',
		},
		confidentialityIndicator: {
			type: require('./codeableconcept.schema.js'),
			description: 'To indicate if this proces is commercially confidential.',
		},
		manufacturer: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductmanufacturingBusinessOperationmanufacturer_manufacturer_Union',
					description:
						'The manufacturer or establishment associated with the process.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'The manufacturer or establishment associated with the process.',
		},
		regulator: {
			type: new GraphQLUnionType({
				name: 'MedicinalProductmanufacturingBusinessOperationregulator_regulator_Union',
				description: 'A regulator which oversees the operation.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'A regulator which oversees the operation.',
		},
	}),
});

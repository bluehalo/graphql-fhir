const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicinalProductPackagedpackageItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicinalProductPackagedpackageItem',
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Including possibly Data Carrier Identifier.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'The physical type of the container of the medicine.',
		},
		quantity: {
			type: new GraphQLNonNull(require('./quantity.schema.js')),
			description:
				'The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.',
		},
		material: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Material type of the package item.',
		},
		alternateMaterial: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'A possible alternate material for the packaging.',
		},
		device: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductPackagedpackageItemdevice_device_Union',
					description: 'A device accompanying a medicinal product.',
					types: () => [require('./devicedefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DeviceDefinition') {
							return require('./devicedefinition.schema.js');
						}
					},
				}),
			),
			description: 'A device accompanying a medicinal product.',
		},
		manufacturedItem: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicinalProductPackagedpackageItemmanufacturedItem_manufacturedItem_Union',
					description:
						'The manufactured item as contained in the packaged medicinal product.',
					types: () => [require('./medicinalproductmanufactured.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'MedicinalProductManufactured') {
							return require('./medicinalproductmanufactured.schema.js');
						}
					},
				}),
			),
			description:
				'The manufactured item as contained in the packaged medicinal product.',
		},
		physicalCharacteristics: {
			type: require('./prodcharacteristic.schema.js'),
			description: 'Dimensions, color etc.',
		},
		otherCharacteristics: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Other codeable characteristics.',
		},
		shelfLifeStorage: {
			type: new GraphQLList(require('./productshelflife.schema.js')),
			description: 'Shelf Life and storage information.',
		},
		manufacturer: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicinalProductPackagedpackageItemmanufacturer_manufacturer_Union',
					description: 'Manufacturer of this Package Item.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description: 'Manufacturer of this Package Item.',
		},
	}),
});

const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary DeviceComponentproductionSpecification Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceComponentproductionSpecification',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/specification-type
		specType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The specification type, such as, serial number, part number, hardware revision, software revision, etc.',
		},
		componentId: {
			type: require('./identifier.schema.js'),
			description:
				'The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.',
		},
		_productionSpec: {
			type: require('./element.schema.js'),
			description: 'The printable string defining the component.',
		},
		productionSpec: {
			type: GraphQLString,
			description: 'The printable string defining the component.',
		},
	}),
});

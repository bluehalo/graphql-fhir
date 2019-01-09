const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Practitionerqualification Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Practitionerqualification',
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				"An identifier that applies to this person's qualification in this role.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v2-2.7-0360
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Coded representation of the qualification.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'Period during which the qualification is valid.',
		},
		issuer: {
			type: new GraphQLUnionType({
				name: 'Practitionerqualificationissuer_issuer_Union',
				description:
					'Organization that regulates and issues the qualification.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'Organization that regulates and issues the qualification.',
		},
	}),
});

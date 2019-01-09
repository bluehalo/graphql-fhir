const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Claimaccident Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claimaccident',
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
		_date: {
			type: require('./element.schema.js'),
			description:
				'Date of an accident event  related to the products and services contained in the claim.',
		},
		date: {
			type: new GraphQLNonNull(DateScalar),
			description:
				'Date of an accident event  related to the products and services contained in the claim.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.',
		},
		locationAddress: {
			type: require('./address.schema.js'),
			description: 'The physical location of the accident event.',
		},
		locationReference: {
			type: new GraphQLUnionType({
				name: 'ClaimaccidentlocationReference_locationReference_Union',
				description: 'The physical location of the accident event.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'The physical location of the accident event.',
		},
	}),
});

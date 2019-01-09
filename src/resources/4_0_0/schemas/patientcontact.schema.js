const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Patientcontact Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Patientcontact',
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
		relationship: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The nature of the relationship between the patient and the contact person.',
		},
		name: {
			type: require('./humanname.schema.js'),
			description: 'A name associated with the contact person.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'A contact detail for the person, e.g. a telephone number or an email address.',
		},
		address: {
			type: require('./address.schema.js'),
			description: 'Address for the contact person.',
		},
		_gender: {
			type: require('./element.schema.js'),
			description:
				'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.',
		},
		gender: {
			type: CodeScalar,
			description:
				'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.',
		},
		organization: {
			type: new GraphQLUnionType({
				name: 'Patientcontactorganization_organization_Union',
				description:
					'Organization on behalf of which the contact is acting or for which the contact is working.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Organization on behalf of which the contact is acting or for which the contact is working.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The period during which this contact person or organization is valid to be contacted relating to this patient.',
		},
	}),
});

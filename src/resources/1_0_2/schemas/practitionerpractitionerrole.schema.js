const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary PractitionerpractitionerRole Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PractitionerpractitionerRole',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		managingOrganization: {
			type: new GraphQLUnionType({
				name:
					'PractitionerpractitionerRolemanagingOrganization_managingOrganization_Union',
				description:
					'The organization where the Practitioner performs the roles associated.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization where the Practitioner performs the roles associated.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/practitioner-role
		role: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Roles which this practitioner is authorized to perform for the organization.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
		specialty: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Specific specialty of the practitioner.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The period during which the person is authorized to act as a practitioner in these role(s) for the organization.',
		},
		location: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'PractitionerpractitionerRolelocation_location_Union',
					description:
						'The location(s) at which this practitioner provides care.',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description: 'The location(s) at which this practitioner provides care.',
		},
		healthcareService: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'PractitionerpractitionerRolehealthcareService_healthcareService_Union',
					description:
						"The list of healthcare services that this worker provides for this role's Organization/Location(s).",
					types: () => [require('./healthcareservice.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'HealthcareService') {
							return require('./healthcareservice.schema.js');
						}
					},
				}),
			),
			description:
				"The list of healthcare services that this worker provides for this role's Organization/Location(s).",
		},
	}),
});

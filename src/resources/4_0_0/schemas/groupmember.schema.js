const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Groupmember Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Groupmember',
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
		entity: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Groupmemberentity_entity_Union',
					description:
						'A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.',
					types: () => [
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./device.schema.js'),
						require('./medication.schema.js'),
						require('./substance.schema.js'),
						require('./group.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
						if (data && data.resourceType === 'Substance') {
							return require('./substance.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'The period that the member was in the group, if known.',
		},
		_inactive: {
			type: require('./element.schema.js'),
			description:
				'A flag to indicate that the member is no longer in the group, but previously may have been a member.',
		},
		inactive: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that the member is no longer in the group, but previously may have been a member.',
		},
	}),
});

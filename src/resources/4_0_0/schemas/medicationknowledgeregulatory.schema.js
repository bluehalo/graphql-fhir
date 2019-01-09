const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicationKnowledgeregulatory Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationKnowledgeregulatory',
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
		regulatoryAuthority: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'MedicationKnowledgeregulatoryregulatoryAuthority_regulatoryAuthority_Union',
					description: 'The authority that is specifying the regulations.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description: 'The authority that is specifying the regulations.',
		},
		substitution: {
			type: new GraphQLList(
				require('./medicationknowledgeregulatorysubstitution.schema.js'),
			),
			description:
				'Specifies if changes are allowed when dispensing a medication from a regulatory perspective.',
		},
		schedule: {
			type: new GraphQLList(
				require('./medicationknowledgeregulatoryschedule.schema.js'),
			),
			description: 'Specifies the schedule of a medication in jurisdiction.',
		},
		maxDispense: {
			type: require('./medicationknowledgeregulatorymaxdispense.schema.js'),
			description:
				'The maximum number of units of the medication that can be dispensed in a period.',
		},
	}),
});

const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Taskrestriction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Taskrestriction',
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
		_repetitions: {
			type: require('./element.schema.js'),
			description:
				'Indicates the number of times the requested action should occur.',
		},
		repetitions: {
			type: PositiveIntScalar,
			description:
				'Indicates the number of times the requested action should occur.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'Over what time-period is fulfillment sought.',
		},
		recipient: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Taskrestrictionrecipient_recipient_Union',
					description:
						'For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?',
					types: () => [
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./relatedperson.schema.js'),
						require('./group.schema.js'),
						require('./organization.schema.js'),
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
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?',
		},
	}),
});

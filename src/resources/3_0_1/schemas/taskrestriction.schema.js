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

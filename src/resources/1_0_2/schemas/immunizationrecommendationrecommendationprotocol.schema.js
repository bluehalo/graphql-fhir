const {
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary ImmunizationRecommendationrecommendationprotocol Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationRecommendationrecommendationprotocol',
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
		_doseSequence: {
			type: require('./element.schema.js'),
			description:
				'Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.',
		},
		doseSequence: {
			type: GraphQLInt,
			description:
				'Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'Contains the description about the protocol under which the vaccine was administered.',
		},
		description: {
			type: GraphQLString,
			description:
				'Contains the description about the protocol under which the vaccine was administered.',
		},
		authority: {
			type: new GraphQLUnionType({
				name:
					'ImmunizationRecommendationrecommendationprotocolauthority_authority_Union',
				description:
					'Indicates the authority who published the protocol.  For example, ACIP.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Indicates the authority who published the protocol.  For example, ACIP.',
		},
		_series: {
			type: require('./element.schema.js'),
			description:
				'One possible path to achieve presumed immunity against a disease - within the context of an authority.',
		},
		series: {
			type: GraphQLString,
			description:
				'One possible path to achieve presumed immunity against a disease - within the context of an authority.',
		},
	}),
});

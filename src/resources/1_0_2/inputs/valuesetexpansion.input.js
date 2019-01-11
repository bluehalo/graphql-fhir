const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ValueSetexpansion Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetexpansion_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_identifier: {
			type: require('./element.input.js'),
			description:
				'An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.',
		},
		identifier: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.',
		},
		_timestamp: {
			type: require('./element.input.js'),
			description:
				'The time at which the expansion was produced by the expanding system.',
		},
		timestamp: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The time at which the expansion was produced by the expanding system.',
		},
		_total: {
			type: require('./element.input.js'),
			description:
				'The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.',
		},
		total: {
			type: GraphQLInt,
			description:
				'The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.',
		},
		_offset: {
			type: require('./element.input.js'),
			description:
				'If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.',
		},
		offset: {
			type: GraphQLInt,
			description:
				'If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.',
		},
		parameter: {
			type: new GraphQLList(require('./valuesetexpansionparameter.input.js')),
			description:
				'A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.',
		},
		contains: {
			type: new GraphQLList(require('./valuesetexpansioncontains.input.js')),
			description: 'The codes that are contained in the value set expansion.',
		},
	}),
});

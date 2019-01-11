const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ValueSetcompose Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetcompose',
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
		_lockedDate: {
			type: require('./element.schema.js'),
			description:
				'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.',
		},
		lockedDate: {
			type: DateScalar,
			description:
				'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.',
		},
		_inactive: {
			type: require('./element.schema.js'),
			description:
				'Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included).',
		},
		inactive: {
			type: GraphQLBoolean,
			description:
				'Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included).',
		},
		include: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./valuesetcomposeinclude.schema.js')),
			),
			description:
				'Include one or more codes from a code system or other value set(s).',
		},
	}),
});

const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLBoolean, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSetCompose Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetCompose_Input',
	description: 'A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the \'Content Logical Definition\' (CLD).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		lockedDate: {
			type: DateScalar,
			description: 'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.'
		},
		_lockedDate: {
			type: require('./element.input'),
			description: 'If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.'
		},
		inactive: {
			type: GraphQLBoolean,
			description: 'Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included).'
		},
		_inactive: {
			type: require('./element.input'),
			description: 'Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included).'
		},
		include: {
			type: new GraphQLList(new GraphQLNonNull(require('./valuesetcomposeinclude.input'))),
			description: 'Include one or more codes from a code system or other value set(s).'
		}
	})
});

const { GraphQLList, GraphQLNonNull, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseitemdetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseitemdetail',
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
		_sequenceLinkId: {
			type: require('./element.schema.js'),
			description: 'A service line number.',
		},
		sequenceLinkId: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.',
		},
		adjudication: {
			type: new GraphQLList(
				require('./claimresponseitemdetailadjudication.schema.js'),
			),
			description: 'The adjudications results.',
		},
		subDetail: {
			type: new GraphQLList(
				require('./claimresponseitemdetailsubdetail.schema.js'),
			),
			description:
				'The third tier service adjudications for submitted services.',
		},
	}),
});

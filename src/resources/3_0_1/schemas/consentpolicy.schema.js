const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Consentpolicy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Consentpolicy',
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
		_authority: {
			type: require('./element.schema.js'),
			description:
				'Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.',
		},
		authority: {
			type: UriScalar,
			description:
				'Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.',
		},
		_uri: {
			type: require('./element.schema.js'),
			description:
				'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.',
		},
		uri: {
			type: UriScalar,
			description:
				'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.',
		},
	}),
});

const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Bundleentry Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundleentry',
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
		_fullUrl: {
			type: require('./element.schema.js'),
			description:
				'The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.',
		},
		fullUrl: {
			type: UriScalar,
			description:
				'The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.',
		},
		resource: {
			type: require('./resourcelist.schema'),
			description: 'The Resources for the entry.',
		},
		search: {
			type: require('./bundleentrysearch.schema.js'),
			description:
				'Information about the search process that lead to the creation of this entry.',
		},
		request: {
			type: require('./bundleentryrequest.schema.js'),
			description:
				'Additional information about how this entry should be processed as part of a transaction.',
		},
		response: {
			type: require('./bundleentryresponse.schema.js'),
			description:
				'Additional information about how this entry should be processed as part of a transaction.',
		},
	}),
});

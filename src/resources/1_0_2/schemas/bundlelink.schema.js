const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Bundlelink Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundlelink',
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
		_relation: {
			type: require('./element.schema.js'),
			description:
				'A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].',
		},
		relation: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].',
		},
		_url: {
			type: require('./element.schema.js'),
			description: 'The reference details for the link.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The reference details for the link.',
		},
	}),
});

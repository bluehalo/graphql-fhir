const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const OidScalar = require('../scalars/oid.scalar.js');

/**
 * @name exports
 * @summary ImagingManifeststudyseriesinstance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingManifeststudyseriesinstance',
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
		_sopClass: {
			type: require('./element.schema.js'),
			description: 'SOP class UID of the selected instance.',
		},
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'SOP class UID of the selected instance.',
		},
		_uid: {
			type: require('./element.schema.js'),
			description: 'SOP Instance UID of the selected instance.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'SOP Instance UID of the selected instance.',
		},
	}),
});

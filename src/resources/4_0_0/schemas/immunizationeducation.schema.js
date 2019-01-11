const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Immunizationeducation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Immunizationeducation',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_documentType: {
			type: require('./element.schema.js'),
			description: 'Identifier of the material presented to the patient.',
		},
		documentType: {
			type: GraphQLString,
			description: 'Identifier of the material presented to the patient.',
		},
		_reference: {
			type: require('./element.schema.js'),
			description:
				'Reference pointer to the educational material given to the patient if the information was on line.',
		},
		reference: {
			type: UriScalar,
			description:
				'Reference pointer to the educational material given to the patient if the information was on line.',
		},
		_publicationDate: {
			type: require('./element.schema.js'),
			description: 'Date the educational material was published.',
		},
		publicationDate: {
			type: DateTimeScalar,
			description: 'Date the educational material was published.',
		},
		_presentationDate: {
			type: require('./element.schema.js'),
			description: 'Date the educational material was given to the patient.',
		},
		presentationDate: {
			type: DateTimeScalar,
			description: 'Date the educational material was given to the patient.',
		},
	}),
});

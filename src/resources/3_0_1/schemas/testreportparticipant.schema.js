const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary TestReportparticipant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportparticipant',
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
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of participant.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/report-participant-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of participant.',
		},
		_uri: {
			type: require('./element.schema.js'),
			description: 'The uri of the participant. An absolute URL is preferred.',
		},
		uri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The uri of the participant. An absolute URL is preferred.',
		},
		_display: {
			type: require('./element.schema.js'),
			description: 'The display name of the participant.',
		},
		display: {
			type: GraphQLString,
			description: 'The display name of the participant.',
		},
	}),
});

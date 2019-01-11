const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ValueSetexpansionparameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetexpansionparameter',
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
		_name: {
			type: require('./element.schema.js'),
			description:
				'Name of the input parameter to the $expand operation; may be a server-assigned name for additional default or other server-supplied parameters used to control the expansion process.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Name of the input parameter to the $expand operation; may be a server-assigned name for additional default or other server-supplied parameters used to control the expansion process.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueString: {
			type: GraphQLString,
			description: 'The value of the parameter.',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The value of the parameter.',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'The value of the parameter.',
		},
		_valueDecimal: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'The value of the parameter.',
		},
		_valueUri: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueUri: {
			type: UriScalar,
			description: 'The value of the parameter.',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueCode: {
			type: CodeScalar,
			description: 'The value of the parameter.',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The value of the parameter.',
		},
	}),
});

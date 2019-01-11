const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary SpecimenDefinitiontypeTested Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SpecimenDefinitiontypeTested',
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
		_isDerived: {
			type: require('./element.schema.js'),
			description: 'Primary of secondary specimen.',
		},
		isDerived: {
			type: GraphQLBoolean,
			description: 'Primary of secondary specimen.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The kind of specimen conditioned for testing expected by lab.',
		},
		_preference: {
			type: require('./element.schema.js'),
			description: 'The preference for this type of conditioned specimen.',
		},
		preference: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The preference for this type of conditioned specimen.',
		},
		container: {
			type: require('./specimendefinitiontypetestedcontainer.schema.js'),
			description: "The specimen's container.",
		},
		_requirement: {
			type: require('./element.schema.js'),
			description:
				'Requirements for delivery and special handling of this kind of conditioned specimen.',
		},
		requirement: {
			type: GraphQLString,
			description:
				'Requirements for delivery and special handling of this kind of conditioned specimen.',
		},
		retentionTime: {
			type: require('./duration.schema.js'),
			description:
				'The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.',
		},
		rejectionCriterion: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Criterion for rejection of the specimen in its container by the laboratory.',
		},
		handling: {
			type: new GraphQLList(
				require('./specimendefinitiontypetestedhandling.schema.js'),
			),
			description:
				'Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.',
		},
	}),
});

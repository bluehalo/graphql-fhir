const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary DataRequirement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DataRequirement_Input',
	description:
		'Base StructureDefinition for DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.',
		},
		_profile: {
			type: require('./element.input.js'),
			description:
				'The profile of the required data, specified as the uri of the profile definition.',
		},
		profile: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The profile of the required data, specified as the uri of the profile definition.',
		},
		subjectCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.',
		},
		subjectReference: {
			type: GraphQLString,
			description:
				'The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.',
		},
		_mustSupport: {
			type: require('./element.input.js'),
			description:
				'Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.   The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).',
		},
		mustSupport: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.   The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).',
		},
		codeFilter: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				"Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.",
		},
		dateFilter: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				"Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.",
		},
		_limit: {
			type: require('./element.input.js'),
			description:
				'Specifies a maximum number of results that are required (uses the _count search parameter).',
		},
		limit: {
			type: PositiveIntScalar,
			description:
				'Specifies a maximum number of results that are required (uses the _count search parameter).',
		},
		sort: {
			type: new GraphQLList(require('./element.input.js')),
			description: 'Specifies the order of the results to be returned.',
		},
	}),
});

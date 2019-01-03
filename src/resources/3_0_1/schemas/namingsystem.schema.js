const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let NamingSystemResourceType = new GraphQLEnumType({
	name: 'NamingSystemResourceType',
	values: {
		NamingSystem: { value: 'NamingSystem' },
	},
});

/**
 * @name exports
 * @summary NamingSystem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NamingSystem',
	description: 'Base StructureDefinition for NamingSystem Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(NamingSystemResourceType),
				description: 'Type of this resource.',
			},
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'A natural language name identifying the naming system. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'A natural language name identifying the naming system. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The status of this naming system. Enables tracking the life-cycle of the content.',
			},
			_status: {
				type: require('./element.schema'),
				description:
					'The status of this naming system. Enables tracking the life-cycle of the content.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/namingsystem-type
			kind: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'Indicates the purpose for the naming system - what kinds of things does it make unique?.',
			},
			_kind: {
				type: require('./element.schema'),
				description:
					'Indicates the purpose for the naming system - what kinds of things does it make unique?.',
			},
			date: {
				type: new GraphQLNonNull(DateTimeScalar),
				description:
					'The date  (and optionally time) when the naming system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the naming system changes.',
			},
			_date: {
				type: require('./element.schema'),
				description:
					'The date  (and optionally time) when the naming system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the naming system changes.',
			},
			publisher: {
				type: GraphQLString,
				description:
					'The name of the individual or organization that published the naming system.',
			},
			_publisher: {
				type: require('./element.schema'),
				description:
					'The name of the individual or organization that published the naming system.',
			},
			contact: {
				type: new GraphQLList(require('./contactdetail.schema')),
				description:
					'Contact details to assist a user in finding and communicating with the publisher.',
			},
			responsible: {
				type: GraphQLString,
				description:
					'The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.',
			},
			_responsible: {
				type: require('./element.schema'),
				description:
					'The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/identifier-type
			type: {
				type: require('./codeableconcept.schema'),
				description:
					'Categorizes a naming system for easier search by grouping related naming systems.',
			},
			description: {
				type: GraphQLString,
				description:
					"A free text natural language description of the naming system from a consumer's perspective. Details about what the namespace identifies including scope, granularity, version labeling, etc.",
			},
			_description: {
				type: require('./element.schema'),
				description:
					"A free text natural language description of the naming system from a consumer's perspective. Details about what the namespace identifies including scope, granularity, version labeling, etc.",
			},
			useContext: {
				type: new GraphQLList(require('./usagecontext.schema')),
				description:
					'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate naming system instances.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
			jurisdiction: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'A legal or geographic region in which the naming system is intended to be used.',
			},
			usage: {
				type: GraphQLString,
				description:
					'Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.',
			},
			_usage: {
				type: require('./element.schema'),
				description:
					'Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.',
			},
			uniqueId: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./namingsystemuniqueid.schema')),
				),
				description:
					'Indicates how the system may be identified when referenced in electronic exchange.',
			},
			replacedBy: {
				type: require('./reference.schema'),
				description:
					'For naming systems that are retired, indicates the naming system that should be used in their place (if any).',
			},
		}),
});

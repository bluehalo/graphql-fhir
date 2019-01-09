const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary ImplementationGuidedefinitionresource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuidedefinitionresource',
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
		reference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'ImplementationGuidedefinitionresourcereference_reference_Union',
					description: 'Where this resource is found.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description: 'Where this resource is found.',
		},
		_fhirVersion: {
			type: require('./element.schema.js'),
			description:
				'Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are specified, the resource is assumed to apply to all the versions stated in ImplementationGuide.fhirVersion.',
		},
		fhirVersion: {
			type: new GraphQLList(CodeScalar),
			description:
				'Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are specified, the resource is assumed to apply to all the versions stated in ImplementationGuide.fhirVersion.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).',
		},
		name: {
			type: GraphQLString,
			description:
				'A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A description of the reason that a resource has been included in the implementation guide.',
		},
		description: {
			type: GraphQLString,
			description:
				'A description of the reason that a resource has been included in the implementation guide.',
		},
		_exampleBoolean: {
			type: require('./element.schema.js'),
			description:
				'If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.',
		},
		exampleBoolean: {
			type: GraphQLBoolean,
			description:
				'If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.',
		},
		_exampleCanonical: {
			type: require('./element.schema.js'),
			description:
				'If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.',
		},
		exampleCanonical: {
			type: CanonicalScalar,
			description:
				'If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.',
		},
		_groupingId: {
			type: require('./element.schema.js'),
			description:
				'Reference to the id of the grouping this resource appears in.',
		},
		groupingId: {
			type: IdScalar,
			description:
				'Reference to the id of the grouping this resource appears in.',
		},
	}),
});

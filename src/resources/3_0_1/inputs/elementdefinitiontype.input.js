const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitiontype Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitiontype_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				"URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. 'string' is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		code: {
			type: new GraphQLNonNull(UriScalar),
			description:
				"URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. 'string' is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.",
		},
		_profile: {
			type: require('./element.input.js'),
			description:
				'Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
		},
		profile: {
			type: UriScalar,
			description:
				'Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
		},
		_targetProfile: {
			type: require('./element.input.js'),
			description:
				'Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
		},
		targetProfile: {
			type: UriScalar,
			description:
				'Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
		},
		_aggregation: {
			type: require('./element.input.js'),
			description:
				'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-aggregation-mode
		aggregation: {
			type: new GraphQLList(CodeScalar),
			description:
				'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.',
		},
		_versioning: {
			type: require('./element.input.js'),
			description:
				'Whether this reference needs to be version specific or version independent, or whether either can be used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/reference-version-rules
		versioning: {
			type: CodeScalar,
			description:
				'Whether this reference needs to be version specific or version independent, or whether either can be used.',
		},
	}),
});

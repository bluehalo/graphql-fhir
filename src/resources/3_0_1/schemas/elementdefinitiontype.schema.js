const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinitionType Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionType',
	description: 'The data type or resource that the value of this element is permitted to be.',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		code: {
			type: new GraphQLNonNull(UriScalar),
			description: 'URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. \'string\' is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. \'string\' is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.'
		},
		profile: {
			type: UriScalar,
			description: 'Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.'
		},
		_profile: {
			type: require('./element.schema'),
			description: 'Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.'
		},
		targetProfile: {
			type: UriScalar,
			description: 'Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.'
		},
		_targetProfile: {
			type: require('./element.schema'),
			description: 'Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-aggregation-mode
		aggregation: {
			type: new GraphQLList(CodeScalar),
			description: 'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.'
		},
		_aggregation: {
			type: require('./element.schema'),
			description: 'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/reference-version-rules
		versioning: {
			type: CodeScalar,
			description: 'Whether this reference needs to be version specific or version independent, or whether either can be used.'
		},
		_versioning: {
			type: require('./element.schema'),
			description: 'Whether this reference needs to be version specific or version independent, or whether either can be used.'
		}
	})
});

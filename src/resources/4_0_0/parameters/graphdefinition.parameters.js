const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the graphdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/conformance-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.useContext.valueCodeableConcept',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement  * [CodeSystem](codesystem.html): A use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context assigned to the message definition  * [NamingSystem](namingsystem.html): A use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition  * [StructureMap](structuremap.html): A use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'GraphDefinition.useContext.valueQuantity',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement  * [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition  * [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition  * [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.useContext.code',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement  * [CodeSystem](codesystem.html): A type of use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A type of use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition  * [NamingSystem](namingsystem.html): A type of use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition  * [StructureMap](structuremap.html): A type of use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A type of use context assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'GraphDefinition.date',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The capability statement publication date  * [CodeSystem](codesystem.html): The code system publication date  * [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date  * [ConceptMap](conceptmap.html): The concept map publication date  * [GraphDefinition](graphdefinition.html): The graph definition publication date  * [ImplementationGuide](implementationguide.html): The implementation guide publication date  * [MessageDefinition](messagedefinition.html): The message definition publication date  * [NamingSystem](namingsystem.html): The naming system publication date  * [OperationDefinition](operationdefinition.html): The operation definition publication date  * [SearchParameter](searchparameter.html): The search parameter publication date  * [StructureDefinition](structuredefinition.html): The structure definition publication date  * [StructureMap](structuremap.html): The structure map publication date  * [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date  * [ValueSet](valueset.html): The value set publication date  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'GraphDefinition.description',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The description of the capability statement  * [CodeSystem](codesystem.html): The description of the code system  * [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition  * [ConceptMap](conceptmap.html): The description of the concept map  * [GraphDefinition](graphdefinition.html): The description of the graph definition  * [ImplementationGuide](implementationguide.html): The description of the implementation guide  * [MessageDefinition](messagedefinition.html): The description of the message definition  * [NamingSystem](namingsystem.html): The description of the naming system  * [OperationDefinition](operationdefinition.html): The description of the operation definition  * [SearchParameter](searchparameter.html): The description of the search parameter  * [StructureDefinition](structuredefinition.html): The description of the structure definition  * [StructureMap](structuremap.html): The description of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities  * [ValueSet](valueset.html): The description of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.jurisdiction',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement  * [CodeSystem](codesystem.html): Intended jurisdiction for the code system  * [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map  * [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition  * [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide  * [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition  * [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system  * [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition  * [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter  * [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition  * [StructureMap](structuremap.html): Intended jurisdiction for the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities  * [ValueSet](valueset.html): Intended jurisdiction for the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'GraphDefinition.name',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement  * [CodeSystem](codesystem.html): Computationally friendly name of the code system  * [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition  * [ConceptMap](conceptmap.html): Computationally friendly name of the concept map  * [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition  * [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide  * [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition  * [NamingSystem](namingsystem.html): Computationally friendly name of the naming system  * [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition  * [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter  * [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition  * [StructureMap](structuremap.html): Computationally friendly name of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities  * [ValueSet](valueset.html): Computationally friendly name of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'GraphDefinition.publisher',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement  * [CodeSystem](codesystem.html): Name of the publisher of the code system  * [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition  * [ConceptMap](conceptmap.html): Name of the publisher of the concept map  * [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition  * [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide  * [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition  * [NamingSystem](namingsystem.html): Name of the publisher of the naming system  * [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition  * [SearchParameter](searchparameter.html): Name of the publisher of the search parameter  * [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition  * [StructureMap](structuremap.html): Name of the publisher of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities  * [ValueSet](valueset.html): Name of the publisher of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.status',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The current status of the capability statement  * [CodeSystem](codesystem.html): The current status of the code system  * [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition  * [ConceptMap](conceptmap.html): The current status of the concept map  * [GraphDefinition](graphdefinition.html): The current status of the graph definition  * [ImplementationGuide](implementationguide.html): The current status of the implementation guide  * [MessageDefinition](messagedefinition.html): The current status of the message definition  * [NamingSystem](namingsystem.html): The current status of the naming system  * [OperationDefinition](operationdefinition.html): The current status of the operation definition  * [SearchParameter](searchparameter.html): The current status of the search parameter  * [StructureDefinition](structuredefinition.html): The current status of the structure definition  * [StructureMap](structuremap.html): The current status of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities  * [ValueSet](valueset.html): The current status of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'GraphDefinition.url',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The uri that identifies the capability statement  * [CodeSystem](codesystem.html): The uri that identifies the code system  * [CompartmentDefinition](compartmentdefinition.html): The uri that identifies the compartment definition  * [ConceptMap](conceptmap.html): The uri that identifies the concept map  * [GraphDefinition](graphdefinition.html): The uri that identifies the graph definition  * [ImplementationGuide](implementationguide.html): The uri that identifies the implementation guide  * [MessageDefinition](messagedefinition.html): The uri that identifies the message definition  * [OperationDefinition](operationdefinition.html): The uri that identifies the operation definition  * [SearchParameter](searchparameter.html): The uri that identifies the search parameter  * [StructureDefinition](structuredefinition.html): The uri that identifies the structure definition  * [StructureMap](structuremap.html): The uri that identifies the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The uri that identifies the terminology capabilities  * [ValueSet](valueset.html): The uri that identifies the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.version',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The business version of the capability statement  * [CodeSystem](codesystem.html): The business version of the code system  * [CompartmentDefinition](compartmentdefinition.html): The business version of the compartment definition  * [ConceptMap](conceptmap.html): The business version of the concept map  * [GraphDefinition](graphdefinition.html): The business version of the graph definition  * [ImplementationGuide](implementationguide.html): The business version of the implementation guide  * [MessageDefinition](messagedefinition.html): The business version of the message definition  * [OperationDefinition](operationdefinition.html): The business version of the operation definition  * [SearchParameter](searchparameter.html): The business version of the search parameter  * [StructureDefinition](structuredefinition.html): The business version of the structure definition  * [StructureMap](structuremap.html): The business version of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The business version of the terminology capabilities  * [ValueSet](valueset.html): The business version of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context type and quantity- or range-based value assigned to the capability statement  * [CodeSystem](codesystem.html): A use context type and quantity- or range-based value assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context type and quantity- or range-based value assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context type and quantity- or range-based value assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context type and quantity- or range-based value assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context type and quantity- or range-based value assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context type and quantity- or range-based value assigned to the message definition  * [NamingSystem](namingsystem.html): A use context type and quantity- or range-based value assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context type and quantity- or range-based value assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context type and quantity- or range-based value assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context type and quantity- or range-based value assigned to the structure definition  * [StructureMap](structuremap.html): A use context type and quantity- or range-based value assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context type and quantity- or range-based value assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context type and quantity- or range-based value assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context type and value assigned to the capability statement  * [CodeSystem](codesystem.html): A use context type and value assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context type and value assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context type and value assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context type and value assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context type and value assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context type and value assigned to the message definition  * [NamingSystem](namingsystem.html): A use context type and value assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context type and value assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context type and value assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context type and value assigned to the structure definition  * [StructureMap](structuremap.html): A use context type and value assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context type and value assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context type and value assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-start
	start: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.start',
		description: 'Type of resource at which the graph starts',
	},
};

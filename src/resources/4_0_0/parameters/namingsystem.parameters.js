const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the namingsystem query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/conformance-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.useContext.valueCodeableConcept',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A use context assigned to the capability statement  * [CodeSystem](codesystem.html): A use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A use context assigned to the message definition  * [NamingSystem](namingsystem.html): A use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A use context assigned to the structure definition  * [StructureMap](structuremap.html): A use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A use context assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'NamingSystem.useContext.valueQuantity',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A quantity- or range-valued use context assigned to the capability statement  * [CodeSystem](codesystem.html): A quantity- or range-valued use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A quantity- or range-valued use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A quantity- or range-valued use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A quantity- or range-valued use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A quantity- or range-valued use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A quantity- or range-valued use context assigned to the message definition  * [NamingSystem](namingsystem.html): A quantity- or range-valued use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A quantity- or range-valued use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A quantity- or range-valued use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A quantity- or range-valued use context assigned to the structure definition  * [StructureMap](structuremap.html): A quantity- or range-valued use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A quantity- or range-valued use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A quantity- or range-valued use context assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.useContext.code',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): A type of use context assigned to the capability statement  * [CodeSystem](codesystem.html): A type of use context assigned to the code system  * [CompartmentDefinition](compartmentdefinition.html): A type of use context assigned to the compartment definition  * [ConceptMap](conceptmap.html): A type of use context assigned to the concept map  * [GraphDefinition](graphdefinition.html): A type of use context assigned to the graph definition  * [ImplementationGuide](implementationguide.html): A type of use context assigned to the implementation guide  * [MessageDefinition](messagedefinition.html): A type of use context assigned to the message definition  * [NamingSystem](namingsystem.html): A type of use context assigned to the naming system  * [OperationDefinition](operationdefinition.html): A type of use context assigned to the operation definition  * [SearchParameter](searchparameter.html): A type of use context assigned to the search parameter  * [StructureDefinition](structuredefinition.html): A type of use context assigned to the structure definition  * [StructureMap](structuremap.html): A type of use context assigned to the structure map  * [TerminologyCapabilities](terminologycapabilities.html): A type of use context assigned to the terminology capabilities  * [ValueSet](valueset.html): A type of use context assigned to the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'NamingSystem.date',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The capability statement publication date  * [CodeSystem](codesystem.html): The code system publication date  * [CompartmentDefinition](compartmentdefinition.html): The compartment definition publication date  * [ConceptMap](conceptmap.html): The concept map publication date  * [GraphDefinition](graphdefinition.html): The graph definition publication date  * [ImplementationGuide](implementationguide.html): The implementation guide publication date  * [MessageDefinition](messagedefinition.html): The message definition publication date  * [NamingSystem](namingsystem.html): The naming system publication date  * [OperationDefinition](operationdefinition.html): The operation definition publication date  * [SearchParameter](searchparameter.html): The search parameter publication date  * [StructureDefinition](structuredefinition.html): The structure definition publication date  * [StructureMap](structuremap.html): The structure map publication date  * [TerminologyCapabilities](terminologycapabilities.html): The terminology capabilities publication date  * [ValueSet](valueset.html): The value set publication date  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.description',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The description of the capability statement  * [CodeSystem](codesystem.html): The description of the code system  * [CompartmentDefinition](compartmentdefinition.html): The description of the compartment definition  * [ConceptMap](conceptmap.html): The description of the concept map  * [GraphDefinition](graphdefinition.html): The description of the graph definition  * [ImplementationGuide](implementationguide.html): The description of the implementation guide  * [MessageDefinition](messagedefinition.html): The description of the message definition  * [NamingSystem](namingsystem.html): The description of the naming system  * [OperationDefinition](operationdefinition.html): The description of the operation definition  * [SearchParameter](searchparameter.html): The description of the search parameter  * [StructureDefinition](structuredefinition.html): The description of the structure definition  * [StructureMap](structuremap.html): The description of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The description of the terminology capabilities  * [ValueSet](valueset.html): The description of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.jurisdiction',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Intended jurisdiction for the capability statement  * [CodeSystem](codesystem.html): Intended jurisdiction for the code system  * [ConceptMap](conceptmap.html): Intended jurisdiction for the concept map  * [GraphDefinition](graphdefinition.html): Intended jurisdiction for the graph definition  * [ImplementationGuide](implementationguide.html): Intended jurisdiction for the implementation guide  * [MessageDefinition](messagedefinition.html): Intended jurisdiction for the message definition  * [NamingSystem](namingsystem.html): Intended jurisdiction for the naming system  * [OperationDefinition](operationdefinition.html): Intended jurisdiction for the operation definition  * [SearchParameter](searchparameter.html): Intended jurisdiction for the search parameter  * [StructureDefinition](structuredefinition.html): Intended jurisdiction for the structure definition  * [StructureMap](structuremap.html): Intended jurisdiction for the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Intended jurisdiction for the terminology capabilities  * [ValueSet](valueset.html): Intended jurisdiction for the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.name',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Computationally friendly name of the capability statement  * [CodeSystem](codesystem.html): Computationally friendly name of the code system  * [CompartmentDefinition](compartmentdefinition.html): Computationally friendly name of the compartment definition  * [ConceptMap](conceptmap.html): Computationally friendly name of the concept map  * [GraphDefinition](graphdefinition.html): Computationally friendly name of the graph definition  * [ImplementationGuide](implementationguide.html): Computationally friendly name of the implementation guide  * [MessageDefinition](messagedefinition.html): Computationally friendly name of the message definition  * [NamingSystem](namingsystem.html): Computationally friendly name of the naming system  * [OperationDefinition](operationdefinition.html): Computationally friendly name of the operation definition  * [SearchParameter](searchparameter.html): Computationally friendly name of the search parameter  * [StructureDefinition](structuredefinition.html): Computationally friendly name of the structure definition  * [StructureMap](structuremap.html): Computationally friendly name of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Computationally friendly name of the terminology capabilities  * [ValueSet](valueset.html): Computationally friendly name of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.publisher',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): Name of the publisher of the capability statement  * [CodeSystem](codesystem.html): Name of the publisher of the code system  * [CompartmentDefinition](compartmentdefinition.html): Name of the publisher of the compartment definition  * [ConceptMap](conceptmap.html): Name of the publisher of the concept map  * [GraphDefinition](graphdefinition.html): Name of the publisher of the graph definition  * [ImplementationGuide](implementationguide.html): Name of the publisher of the implementation guide  * [MessageDefinition](messagedefinition.html): Name of the publisher of the message definition  * [NamingSystem](namingsystem.html): Name of the publisher of the naming system  * [OperationDefinition](operationdefinition.html): Name of the publisher of the operation definition  * [SearchParameter](searchparameter.html): Name of the publisher of the search parameter  * [StructureDefinition](structuredefinition.html): Name of the publisher of the structure definition  * [StructureMap](structuremap.html): Name of the publisher of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): Name of the publisher of the terminology capabilities  * [ValueSet](valueset.html): Name of the publisher of the value set  ',
	},
	// http://hl7.org/fhir/SearchParameter/conformance-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.status',
		description:
			'Multiple Resources:     * [CapabilityStatement](capabilitystatement.html): The current status of the capability statement  * [CodeSystem](codesystem.html): The current status of the code system  * [CompartmentDefinition](compartmentdefinition.html): The current status of the compartment definition  * [ConceptMap](conceptmap.html): The current status of the concept map  * [GraphDefinition](graphdefinition.html): The current status of the graph definition  * [ImplementationGuide](implementationguide.html): The current status of the implementation guide  * [MessageDefinition](messagedefinition.html): The current status of the message definition  * [NamingSystem](namingsystem.html): The current status of the naming system  * [OperationDefinition](operationdefinition.html): The current status of the operation definition  * [SearchParameter](searchparameter.html): The current status of the search parameter  * [StructureDefinition](structuredefinition.html): The current status of the structure definition  * [StructureMap](structuremap.html): The current status of the structure map  * [TerminologyCapabilities](terminologycapabilities.html): The current status of the terminology capabilities  * [ValueSet](valueset.html): The current status of the value set  ',
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
	// http://hl7.org/fhir/SearchParameter/NamingSystem-contact
	contact: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.contact.name',
		description: 'Name of an individual to contact',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-id-type
	id_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.uniqueId.type',
		description: 'oid | uuid | uri | other',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-kind
	kind: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.kind',
		description: 'codesystem | identifier | root',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'NamingSystem.uniqueId.period',
		description: 'When is identifier valid?',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-responsible
	responsible: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.responsible',
		description: 'Who maintains system namespace?',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.contact.telecom',
		description: 'Contact details for individual or organization',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.type',
		description: 'e.g. driver,  provider,  patient, bank etc.',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-value
	value: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.uniqueId.value',
		description: 'The unique identifier',
	},
};

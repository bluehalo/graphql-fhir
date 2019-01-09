const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Contract Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contract',
	description:
		'Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Contract_Enum_schema',
					values: { Contract: { value: 'Contract' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Unique identifier for this Contract or a derivative that references a Source Contract.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'Canonical identifier for this contract, represented as a URI (globally unique).',
		},
		url: {
			type: UriScalar,
			description:
				'Canonical identifier for this contract, represented as a URI (globally unique).',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'An edition identifier used for business purposes to label business significant variants.',
		},
		version: {
			type: GraphQLString,
			description:
				'An edition identifier used for business purposes to label business significant variants.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the resource instance.',
		},
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.',
		},
		legalState: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.',
		},
		instantiatesCanonical: {
			type: new GraphQLUnionType({
				name: 'ContractinstantiatesCanonical_instantiatesCanonical_Union',
				description:
					'The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.',
				types: () => [require('./contract.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Contract') {
						return require('./contract.schema.js');
					}
				},
			}),
			description:
				'The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.',
		},
		instantiatesUri: {
			type: UriScalar,
			description:
				'The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.',
		},
		contentDerivative: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The minimal content derived from the basal information source at a specific stage in its lifecycle.',
		},
		_issued: {
			type: require('./element.schema.js'),
			description: 'When this  Contract was issued.',
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this  Contract was issued.',
		},
		applies: {
			type: require('./period.schema.js'),
			description:
				'Relevant time or time-period when this Contract is applicable.',
		},
		expirationType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.',
		},
		subject: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Contractsubject_subject_Union',
					description:
						'The target entity impacted by or of interest to parties to the agreement.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The target entity impacted by or of interest to parties to the agreement.',
		},
		authority: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Contractauthority_authority_Union',
					description:
						'A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.',
		},
		domain: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Contractdomain_domain_Union',
					description:
						'Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				'Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.',
		},
		site: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Contractsite_site_Union',
					description:
						'Sites in which the contract is complied with,  exercised, or in force.',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				'Sites in which the contract is complied with,  exercised, or in force.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.',
		},
		_subtitle: {
			type: require('./element.schema.js'),
			description:
				'An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.',
		},
		subtitle: {
			type: GraphQLString,
			description:
				'An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.',
		},
		_alias: {
			type: require('./element.schema.js'),
			description:
				'Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.',
		},
		alias: {
			type: new GraphQLList(GraphQLString),
			description:
				'Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.',
		},
		author: {
			type: new GraphQLUnionType({
				name: 'Contractauthor_author_Union',
				description:
					'The individual or organization that authored the Contract definition, derivative, or instance in any legal state.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The individual or organization that authored the Contract definition, derivative, or instance in any legal state.',
		},
		scope: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.',
		},
		topicCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.',
		},
		topicReference: {
			type: new GraphQLUnionType({
				name: 'ContracttopicReference_topicReference_Union',
				description:
					'Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				"A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.",
		},
		subType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.",
		},
		contentDefinition: {
			type: require('./contractcontentdefinition.schema.js'),
			description:
				'Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.',
		},
		term: {
			type: new GraphQLList(require('./contractterm.schema.js')),
			description:
				'One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.',
		},
		supportingInfo: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ContractsupportingInfo_supportingInfo_Union',
					description:
						'Information that may be needed by/relevant to the performer in their execution of this term action.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Information that may be needed by/relevant to the performer in their execution of this term action.',
		},
		relevantHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ContractrelevantHistory_relevantHistory_Union',
					description:
						'Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.',
					types: () => [require('./provenance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Provenance') {
							return require('./provenance.schema.js');
						}
					},
				}),
			),
			description:
				'Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.',
		},
		signer: {
			type: new GraphQLList(require('./contractsigner.schema.js')),
			description:
				'Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.',
		},
		friendly: {
			type: new GraphQLList(require('./contractfriendly.schema.js')),
			description:
				"The 'patient friendly language' versionof the Contract in whole or in parts. 'Patient friendly language' means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.",
		},
		legal: {
			type: new GraphQLList(require('./contractlegal.schema.js')),
			description:
				'List of Legal expressions or representations of this Contract.',
		},
		rule: {
			type: new GraphQLList(require('./contractrule.schema.js')),
			description:
				'List of Computable Policy Rule Language Representations of this Contract.',
		},
		legallyBindingAttachment: {
			type: require('./attachment.schema.js'),
			description:
				"Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the 'source of truth' and which would be the basis for legal action related to enforcement of this Contract.",
		},
		legallyBindingReference: {
			type: new GraphQLUnionType({
				name: 'ContractlegallyBindingReference_legallyBindingReference_Union',
				description:
					"Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the 'source of truth' and which would be the basis for legal action related to enforcement of this Contract.",
				types: () => [
					require('./composition.schema.js'),
					require('./documentreference.schema.js'),
					require('./questionnaireresponse.schema.js'),
					require('./contract.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Composition') {
						return require('./composition.schema.js');
					}
					if (data && data.resourceType === 'DocumentReference') {
						return require('./documentreference.schema.js');
					}
					if (data && data.resourceType === 'QuestionnaireResponse') {
						return require('./questionnaireresponse.schema.js');
					}
					if (data && data.resourceType === 'Contract') {
						return require('./contract.schema.js');
					}
				},
			}),
			description:
				"Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the 'source of truth' and which would be the basis for legal action related to enforcement of this Contract.",
		},
	}),
});

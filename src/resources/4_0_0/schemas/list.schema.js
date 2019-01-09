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
 * @summary List Schema
 */
module.exports = new GraphQLObjectType({
	name: 'List',
	description: 'A list is a curated collection of resources.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'List_Enum_schema',
					values: { List: { value: 'List' } },
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
				'Identifier for the List assigned for business purposes outside the context of FHIR.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Indicates the current state of this list.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current state of this list.',
		},
		_mode: {
			type: require('./element.schema.js'),
			description:
				'How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.',
		},
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.',
		},
		_title: {
			type: require('./element.schema.js'),
			description: 'A label for the list assigned by the author.',
		},
		title: {
			type: GraphQLString,
			description: 'A label for the list assigned by the author.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'This code defines the purpose of the list - why it was created.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Listsubject_subject_Union',
				description:
					'The common subject (or patient) of the resources that are in the list if there is one.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
					require('./device.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'The common subject (or patient) of the resources that are in the list if there is one.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Listencounter_encounter_Union',
				description:
					'The encounter that is the context in which this list was created.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The encounter that is the context in which this list was created.',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'The date that the list was prepared.',
		},
		date: {
			type: DateTimeScalar,
			description: 'The date that the list was prepared.',
		},
		source: {
			type: new GraphQLUnionType({
				name: 'Listsource_source_Union',
				description:
					'The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.',
		},
		orderedBy: {
			type: require('./codeableconcept.schema.js'),
			description: 'What order applies to the items in the list.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description: 'Comments that apply to the overall list.',
		},
		entry: {
			type: new GraphQLList(require('./listentry.schema.js')),
			description: 'Entries in this list.',
		},
		emptyReason: {
			type: require('./codeableconcept.schema.js'),
			description: 'If the list is empty, why the list is empty.',
		},
	}),
});

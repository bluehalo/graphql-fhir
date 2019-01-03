const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let SpecimenResourceInputType = new GraphQLEnumType({
	name: 'SpecimenResourceInputType',
	values: {
		Specimen: { value: 'Specimen' },
	},
});

/**
 * @name exports
 * @summary Specimen Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Specimen_Input',
	description: 'Base StructureDefinition for Specimen Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(SpecimenResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description: 'Id for specimen.',
			},
			accessionIdentifier: {
				type: require('./identifier.input'),
				description:
					'The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-status
			status: {
				type: CodeScalar,
				description: 'The availability of the specimen.',
			},
			_status: {
				type: require('./element.input'),
				description: 'The availability of the specimen.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0487
			type: {
				type: require('./codeableconcept.input'),
				description: 'The kind of material that forms the specimen.',
			},
			subject: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'Where the specimen came from. This may be from the patient(s) or from the environment or a device.',
			},
			receivedTime: {
				type: DateTimeScalar,
				description:
					'Time when specimen was received for processing or testing.',
			},
			_receivedTime: {
				type: require('./element.input'),
				description:
					'Time when specimen was received for processing or testing.',
			},
			parent: {
				type: new GraphQLList(require('./reference.input')),
				description:
					'Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.',
			},
			request: {
				type: new GraphQLList(require('./reference.input')),
				description:
					'Details concerning a test or procedure request that required a specimen to be collected.',
			},
			collection: {
				type: require('./specimencollection.input'),
				description: 'Details concerning the specimen collection.',
			},
			processing: {
				type: new GraphQLList(require('./specimenprocessing.input')),
				description:
					'Details concerning processing and processing steps for the specimen.',
			},
			container: {
				type: new GraphQLList(require('./specimencontainer.input')),
				description:
					'The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.',
			},
			note: {
				type: new GraphQLList(require('./annotation.input')),
				description:
					'To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).',
			},
		}),
});

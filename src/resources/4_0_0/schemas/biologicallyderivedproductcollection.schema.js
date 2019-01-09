const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary BiologicallyDerivedProductcollection Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BiologicallyDerivedProductcollection',
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
		collector: {
			type: new GraphQLUnionType({
				name: 'BiologicallyDerivedProductcollectioncollector_collector_Union',
				description:
					'Healthcare professional who is performing the collection.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description: 'Healthcare professional who is performing the collection.',
		},
		source: {
			type: new GraphQLUnionType({
				name: 'BiologicallyDerivedProductcollectionsource_source_Union',
				description:
					'The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.',
				types: () => [
					require('./patient.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.',
		},
		_collectedDateTime: {
			type: require('./element.schema.js'),
			description: 'Time of product collection.',
		},
		collectedDateTime: {
			type: DateTimeScalar,
			description: 'Time of product collection.',
		},
		collectedPeriod: {
			type: require('./period.schema.js'),
			description: 'Time of product collection.',
		},
	}),
});

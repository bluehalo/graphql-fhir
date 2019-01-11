const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MeasureReportgrouppopulation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportgrouppopulation',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'The identifier of the population being reported, as defined by the population element of the measure.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description: 'The type of the population.',
		},
		_count: {
			type: require('./element.schema.js'),
			description: 'The number of members of the population.',
		},
		count: {
			type: GraphQLInt,
			description: 'The number of members of the population.',
		},
		patients: {
			type: new GraphQLUnionType({
				name: 'MeasureReportgrouppopulationpatients_patients_Union',
				description:
					'This element refers to a List of patient level MeasureReport resources, one for each patient in this population.',
				types: () => [require('./list.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'List') {
						return require('./list.schema.js');
					}
				},
			}),
			description:
				'This element refers to a List of patient level MeasureReport resources, one for each patient in this population.',
		},
	}),
});

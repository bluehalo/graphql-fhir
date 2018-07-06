const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLString
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let NarrativeStatusType = new GraphQLEnumType({
	name: 'NarrativeStatusType',
	values: {
		generated: { value: 'generated' },
		extensions: { value: 'extensions' },
		additional: { value: 'additional' },
		empty: { value: 'empty' }
	}
});

/**
 * @name exports
 * @summary Narrative Fields
 */
let Narrative = new GraphQLObjectType({
	name: 'Narrative',
	description: 'A human-readable formatted text, including images.',
	fields: () => extendSchema(require('./element.schema'), {
		status: {
			type: NarrativeStatusType,
			description: 'Identifies the purpose for this name.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Extensions for status'
		},
		div: {
			type: GraphQLString,
			description: 'The actual narrative content, a stripped down version of XHTML.'
		}
	})
});

module.exports = Narrative;

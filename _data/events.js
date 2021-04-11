require( 'dotenv' ).config();

let dayjs = require( 'dayjs' );
const sanityClient = require( '@sanity/client' );

const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID
	,dataset: process.env.SANITY_DATASET
	,token: process.env.SANITY_TOKEN
	,apiVersion: '2021-03-25'
	,useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "event" ]'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( event => {
				return {
					when: dayjs( event.date ).format( 'dddd, D MMMM YYYY at ' )
					,title: event.title
					,description: event.description
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}

require( 'dotenv' ).config();

let dayjs = require( 'dayjs' );
var AdvancedFormat = require( 'dayjs/plugin/advancedFormat' );
var Timezone = require( 'dayjs/plugin/timezone' );

dayjs.extend( AdvancedFormat );
dayjs.extend( Timezone );

const sanityClient = require( '@sanity/client' );

const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID
	,dataset: process.env.SANITY_DATASET
	,token: process.env.SANITY_TOKEN
	,apiVersion: '2021-03-25'
	,useCdn: false
} );


module.exports = async function() {
	const query = '*[ _type == "event" ] | order( date asc )'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( event => {
				return {
					date: dayjs( event.date ).format( 'dddd, Do MMMM' )
					,time: dayjs( event.date ).format( 'h.mma', 'Europe/London' )
					,speaker: event.date
					,subject: event.subject
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}

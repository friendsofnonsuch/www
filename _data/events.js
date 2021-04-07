let dayjs = require( 'dayjs' );
const sanityClient = require( '@sanity/client' );

const client = sanityClient( {
	projectId: 'bshasczz'
	,dataset: 'production'
	,token: 'skJzkGqtR4dyb9hnRG8uxYts9EXUOGj2fgLN61zutFbrW85mdad29QRJRmQGkGYPlZ6rO3CgPziFacOg085emRzzfHncHCBsVoUsvGu9GupvanzLxyZw9ZaPKptjGx1ddcWTMjFhseTWLp8wJWHPNWsVNU4zyYdrMIh4XfFBw5Wf9qToKKu3'
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

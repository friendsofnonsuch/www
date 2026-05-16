// export default [
module.exports = function () {
	return [
		{
			label: 'Nonsuch Mansion',
			url: 'http://www.nonsuchmansion.com/',
			description: 'Information about Nonsuch Mansion as a social venue, including The Pantry café'
		},
		{
			label: 'Epsom & Ewell Borough Council',
			url: 'https://www.epsom-ewell.gov.uk/residents/venues-sport-and-leisure-facilities/nonsuch-park',
			description: 'Information about Nonsuch Park'
		},
		{
			label: 'London Borough Of Sutton',
			url: 'https://www.sutton.gov.uk/info/200453/parks_trees_and_open_spaces/1149/parks_and_facilities/15',
			description: 'Further Information about Nonsuch Park and Cheam Park'
		},
		{
			label: 'Epsom & Ewell History Society',
			url: 'http://www.epsomewellhistory.org.uk/',
			description: 'The history & archaeology society for Epsom and Ewell'
		},
		{
			label: 'Woodland Trust',
			url: 'https://www.woodlandtrust.org.uk/visiting-woods/woods/warren-farm/',
			description: 'For Information about Warren Farm, a small area of Nonsuch Park'
		},
		{
			label: 'Nonsuch Voles',
			url: 'https://www.facebook.com/nonsuchvoles/',
			description: "Another volunteer group that cares for the park's gardens and woodlands"
		}
	]
};

/*
require( 'dotenv' ).config();

module.exports = async function() {
	const query = '*[ _type == "link"] | order( order asc )'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				return {
					label: record.label
					,description: record.description
					,url: record.url
				}
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
*/

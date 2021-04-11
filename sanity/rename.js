// rename field "title" to "label" for "link" documents
// sanity exec rename.js --with-user-token

require( 'dotenv' ).config( { path: '../.env' } );

const sanityClient = require( '@sanity/client' )
const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID
	,dataset: process.env.SANITY_DATASET
	,token: process.env.SANITY_TOKEN
	,apiVersion: '2021-03-25'
	,useCdn: false
} );

const fetchDocuments = () =>
	client.fetch( `*[_type == 'link' && defined(title)][0...100] {_id, _rev, title}` )

const buildPatches = docs =>
	docs.map( doc => ( {
		id: doc._id,
		patch: {
			set: { label: doc.title },
			unset: ['title'],
			// this will cause the migration to fail if any of the documents has been
			// modified since it was fetched.
			ifRevisionID: doc._rev
		}
	} ) )

const createTransaction = patches =>
	patches.reduce( ( tx, patch ) => tx.patch( patch.id, patch.patch ), client.transaction() )

const commitTransaction = tx => tx.commit()

const migrateNextBatch = async () => {
	const documents = await fetchDocuments()
	const patches = buildPatches( documents )
	if ( patches.length === 0 ) {
		console.log( 'No more documents to migrate!' )
		return null
	}
	console.log(
		`Migrating batch:\n %s`,
		patches.map( patch => `${patch.id} => ${JSON.stringify( patch.patch )}` ).join( '\n' )
	)
	const transaction = createTransaction( patches )
	await commitTransaction( transaction )
	return migrateNextBatch()
}

migrateNextBatch().catch( err => {
	console.error( err )
	process.exit( 1 )
} )

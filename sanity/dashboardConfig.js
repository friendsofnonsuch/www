export default {
	widgets: [
		{
			name: 'netlify',
			options: {
				title: 'Update the website with the changes that have been made'
				,sites: [
					{
						title: 'Friends of Nonsuch'
						,name: 'friendsofnonsuch'
						,apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID
						,buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK
					},
				]
			}
		}
	]
}

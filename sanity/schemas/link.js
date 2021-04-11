export default {
	title: 'Links'
	,name: 'link'
	,type: 'document'
	,fields: [
		{
			title: 'Label'
			,name: 'label'
			,type: 'string'
			,validation: Rule => Rule.required().error( 'A label is required' )
		}
		,{
			title: 'Description'
			,name: 'description'
			,type: 'string'
		}
		,{
			title: 'Web Address'
			,description: 'The web site URL starting "http://" or "https://"'
			,name: 'url'
			,type: 'string'
			,validation: Rule => Rule.required().min( 10 ).error( 'A web address is required' )
		}
		,{
			title: 'Order'
			,name: 'order'
			,type: 'number'
			,hidden: true
		}
	]
	,orderings: [
		{
			title: 'Display Order',
			name: 'displayOrder',
			by: [
				{
					field: 'order'
					,direction: 'asc'
				}
			]
		}
	]
	,preview: {
		select: {
			title: 'label'
			,subtitle: 'url'
		},
	},
}

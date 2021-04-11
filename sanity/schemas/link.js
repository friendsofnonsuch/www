export default {
	title: 'Links'
	,name: 'link'
	,type: 'document'
	,fields: [
		{
			title: 'Title'
			,name: 'title'
			,type: 'string'
		}
		,{
			title: 'Description'
			,name: 'description'
			,type: 'string'
		}
		,{
			title: 'Web Address'
			,name: 'url'
			,type: 'string'
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
}

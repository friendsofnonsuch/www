export default {
	title: 'Events'
	,name: 'event'
	,type: 'document'
	,fields: [
		{
			title: 'Date'
			,name: 'date'
			,type: 'datetime'
		}
		,{
			title: 'Title'
			,name: 'title'
			,type: 'string'
		}
		,{
			title: 'Description'
			,name: 'description'
			,type: 'array'
			,of: [ { type: 'block' } ]
		}
	]
}

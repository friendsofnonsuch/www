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
			title: 'Speaker'
			,name: 'speaker'
			,type: 'string'
		}
		,{
			title: 'Subject'
			,name: 'subject'
			,type: 'string'
		}
		,{
			title: 'Talk Given in the Stable Wing'
			,name: 'isStableWing'
			,type: 'boolean'
		}
	]
	,initialValue: {
		isStableWing: true
	}
	,orderings: [
		{
			title: 'Event Order',
			name: 'eventOrder',
			by: [
				{
					field: 'date'
					,direction: 'asc'
				}
			]
		}
	]
	,preview: {
		select: {
			title: 'date'
			,subtitle: 'speaker'
		},
	},
}

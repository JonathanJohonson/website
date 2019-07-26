
var vue = new Vue({
		//to inherit attributes from parents or not
	inheritAttrs: true,
		//declare the properties for this component
	props:{
		prop1:{
			type: 'type-name',
			default: 'default-value',
			required:'boolean',
		}
	},
		//change the default prop(value) and event(input) to fix the conflict
	model:{
		prop:'value',
		event:'input'
	}
		//declare components in this scope
	components:{
		componentA:{
			/*component*/
		}
	},
	data:{
		/*declare the datas in this scope*/
	},
	watch:{
		value:function watcher(){
			/*listener*/
		}
	},
	methods:{
		method:function (){
			/*method*/
		}
	},
	computed:{
		valX:function(){
			/*computed varians in datas*/
		}
	},
	template:`html template content`
});
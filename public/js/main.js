var btn = Vue.component('gobutton', {
	props: ['apikey', 'type'],
	template: "<button @click='test(apikey)'><slot></slot></buton>",
	methods: {
		test: function(key){
				var that=this;
					that.$emit("newlookup", that.type);
				$.getJSON("/lookup/" + that.type,
					function(data){
						that.$emit("update", data.results);
					});
			}
	}
});

var app = new Vue({
	el: '#main-container',
	data: {
		message: "Hello",
		stuff: [{"title": "nothing here", "image": "http://www.iconsplace.com/icons/preview/white/github-256.png"}],
		types: [{ lookup: "shudder", name: "Shudder"}, {lookup:"amazon_prime",name:"Amazon Prime"}, {lookup:"hbo", name:"HBO GO"}],
		key: '9Rljr5EAozeKjGRZgoXtyWJ9f5Sfor'
	},
	components: {
		btn: btn
	},
	methods: {
		fetch: function(){ alert('hi')},
	    update: function(info){
			var temp=[];
			info.forEach(function(item){
				temp.push({"title": item["original_title"], "image": item["poster_240x342"]});
			});
			this.stuff=temp;
		},
		newheader: function(name){ this.message = name }
	},
	delimiters: ['^^', '^^']
});

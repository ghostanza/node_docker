var btn = Vue.component('gobutton', {
	props: ['type'],
	template: "<button @click='test'><slot></slot></buton>",
	methods: {
		test: function(){
				var that=this;
					that.$emit("newlookup", that.type.name);
			
			$.getJSON("/lookup/" + that.type.lookup,
					function(data){
						that.$emit("update", data.results);
					});
			}
	}
});

var search = Vue.component('search', {
	props: [ 'term' ],
	template: "<form><input type='text' :placeholder='term'></form>"
});

var app = new Vue({
	el: '#main-container',
	data: {
		message: "Hello",
		stuff: [{"title": "nothing here", "image": "http://www.iconsplace.com/icons/preview/white/github-256.png"}],
		types: [{ lookup: "shudder", name: "Shudder"}, {lookup:"amazon_prime",name:"Amazon Prime"}, {lookup:"hbo", name:"HBO GO"}],
		show: { buttons: false, search: true },
		searchterm: 'testing'
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
			this.message=this.message.replace("is Loading...", "");
		},
		search: function(term){
			var searchterm = term,
				that = this;
			this.searchterm="";
			if(searchterm){
				$.getJSON(`/search/${searchterm}`, function(data){ that.update(data.results); });
			}
		},
		newheader: function(name){ this.stuff=[]; this.message = `${name} is Loading...` }
	},
	delimiters: ['^^', '^^']
});

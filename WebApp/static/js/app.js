var app = app || {};

(function(){
	app.controller = {
		init: function(){
			app.sections.init();
			app.router.init();
		}
	};

	app.router = {
		init: function(){
			routie({
    			'about': function() {
    				app.sections.toggle('about');
    			},

   		 		'movies': function() {
   		 			app.sections.toggle('movies');	
    			}
});
		}
	};

	app.sections = {
		init: function(){
			this.about();
			this.movies();
		},
		toggle: function(id){
			var elements = document.getElementsByTagName('section');
			for(var i in elements){
				if(elements[i].classList)
					elements[i].classList.remove('active');
			}
			if(document.getElementById(id))
				document.getElementById(id).classList.add('active');
		},
		about: function(){
			Transparency.render(document.getElementById('about'), app.content.about);
		},
		movies: function(){
			Transparency.render(document.getElementById('render_movies'), app.content.movies, app.directives);
		}
	}

	app.controller.init();
})();
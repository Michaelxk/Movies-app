
var app = new Vue({
	el: '#app',
	data() {
		return {
			query: null,
			results: [],
			apiKey2: '699ba79b'
		}
	},
	methods: {
		getMovies(results) {
			axios.get(`http://www.omdbapi.com/?s=${ this.query }&apikey=${ this.apiKey2 }`)
				.then(response => {
					console.log(response.data.Search)
					
					let respuestas = response.data.Search;
					let html = '';
	
					respuestas.forEach(function(respuesta) {
						html += ` 
						<div class="row">
							<div class="col-lg-4 col-md-6 col-sm-6">
								<img src="${respuesta.Poster}" class="card-img-top img-fluid">
								<h3 class="card-title"><strong>${respuesta.Title}</strong></h3>
								<p class="card-text">Year: ${respuesta.Year}</p>
							</div>
						</div>	
						`
					})
	
					document.getElementById('movies').innerHTML = html;
					
	
				}).catch((err) => {
					console.log(err)
				})
			}
		},
	}); 
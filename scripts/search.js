var search = document.getElementById("search")

search.onfocus = function() {
	this.placeholder = ""
}

search.onblur = function() {
	this.placeholder = "🔍 Search"
}
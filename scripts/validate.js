function validate() {
	var form = document.forms[0]
	if ( form["name"].value === "") {
		alert("Name cannot be blank.")
		return false
	}
}
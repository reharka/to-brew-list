// EXECUTION use <script src="../scripts/script_personal_blog.js"></script> to load it
// EXECUTION the function display_posts() will return with all the html for the posts on the selected page
// EXECUTION use <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> jquery to put the html from display_posts() in the correct location
// EXECUTION ---IMPORTANT--- make sure you acutaly use display_posts() in the script section of the page

// TODO -------------- make sure each page has a page_location_id


var all_posts = [
	// {
	// 	user_name:"Samwise Gamgee",
	// 	post_location:"10002"
	// 	location_id:"10003",
	// 	main_text_field:"Loved it. I had the Belgian and my friend had one of the ciders. They've done a spot-on job with the decor. There's games, plenty of outdoor seating etc. Didn't have a chance to try the food but next I'm in the area I will be back for sure!",
	// 	likes:[ "bob", "john", "ect."]
	// }

]

// TODO -------------------------get all blogs from database and put them in all_blogs var
var page_location_id = ""

// TODO -------------------------get the database of location_id/titles
// {
// 	10002:"Appalachian Mountain Brewery"
// }
// in that format above
// and put them in var post_locations_db = {}
var post_locations_db = {}

function find_posts(location_id,all_posts,indent){
	var posts = []
	all_posts.forEach(function(item){
		if(item.post_location==location_id){
			posts.push(item)
			posts.push(find_posts(item.location_id,all_posts,0))
		}
	});
	return(posts)
}

function into_html(posts){
	var html = ""
	posts.forEach(function(item){
		// TODO -------------------------make sure html is up-to-date
      var html = html+"<div class='w3-container w3-card w3-white w3-round w3-margin'><br>\n <h4>"+post_locations_db[item.post_location]+"</h4><br>\n <hr class='w3-clear'>\n<p>"+item.main_text_field+"</p>\n<div class='w3-row-padding' style='margin:0 -16px'>\n<div class='w3-half'>\n</div>\n</div>\n<button type='button' class='w3-button w3-theme-d1 w3-margin-bottom'><i class='fa fa-thumbs-up'></i>  Like</button>\n<button type='button' class='w3-button w3-theme-d2 w3-margin-bottom'><i class='fa fa-comment'></i>  Comment</button>\n</div>\n"
	})
	return(html)
}
function display_posts(){
	return(into_html(find_posts(page_location_id,all_posts,0)))
}
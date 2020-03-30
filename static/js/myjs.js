$(function() {
  // var t = $("#header");
  var thumbnails_html = $("#root_thumbnails").children("#thumbnail_obj");
  
  console.log("inside myjs");

  $.getJSON("/gallery_json", function(w) {
      w = JSON.parse(w);
      // t.children(".album").text(w.album.name);
      photos = w.photos;

      thumbnails = "";
      for (var v = 0; v < w.photos.length; v++) {
          photo = w.photos[v];
          thumbnails += "<div class='col-lg-3 col-md-4 col-xs-6 thumb'> <a class='thumbnail' href='#' data-image-id='' data-toggle='modal' data-title='' data-image=" +  photo.url + "data-target='#image-gallery'><img class='img-thumbnail' src=" +  photo.thumb_url + "alt='Another alt text'></a></div>";
          console.log("inside loop");
        }
      thumbnails_html.html(thumbnails);
  });
  
});
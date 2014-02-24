function instagramAJAXCall(place) {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: true,
        url: "https://api.instagram.com/v1/locations/search?foursquare_v2_id=" + place + "&client_id=1720573181104199bb04ff29990457c2",
        success: function (data) {
            id = data.data[0].id;
            console.log(data);
            $("#instagram_id span").text(id);
            $("#instagram_name span").text(data.data[0].name);
            $("#instagram_info").fadeIn();
            
    }
    

});
}
$(document).ready(function(){
    $('.form-inline').submit(function(e){
        instagramAJAXCall($("#foursquareID").val());
        e.preventDefault();

    });
});
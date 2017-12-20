function showLbox(url) {
    $("#lboxinner").html('Loading image...');
    $("#lbox").show(300);

    var img = $("<img>");
    img.attr("src", url);
    $("#lboxinner").html(img);
}

function hideLbox() {
    $("#lboxinner").html('');
    $("#lbox").hide(300);
}

$(function() {
    $(".lboxImg").click(function () {
        showLbox($(this).data('full-url'));
    });

    $("#lbox").click(function () {
        hideLbox();
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) hideLbox();
    });
});
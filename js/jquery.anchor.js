$(document).ready(function() {
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 140 + "px"
        }, {
            duration: 700
        });
        return false;
    });
});
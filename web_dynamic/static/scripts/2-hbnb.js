$(document).ready(function (){
    $.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
        if (data.status === "OK") {
            $("#api_status").addClass("available");
        } else {
            $("#api_status").removeClass("available");
        }
    });

    let resultDict = {};
    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');

        if ($(this).is(':checked')) {
            resultDict[amenityId] = amenityName;
        } else {
            delete resultDict[amenityId];
        }
        $('.amenities h4').text(Object.values(resultDict).join(', '))
    });
});

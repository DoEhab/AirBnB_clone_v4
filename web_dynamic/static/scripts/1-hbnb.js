$(document).ready(function(){
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

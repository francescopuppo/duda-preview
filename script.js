$(document).ready(function () {
    $(".submit").click(function () {
        var dudaid = $("#dudaid").val();
        var selected = $('#device').children(":selected").val();
        
console.log($('input[name="iamdesktop"]').is(':checked'));

        if( $('input[name="iamdesktop"]').is(':checked'))
        {
            $("#form").attr('action', 'https://my.duda.co/preview/' + dudaid);   
        }
        else {
            $("#form").attr('action', 'https://my.duda.co/site/' + dudaid + '?showOriginal=true&preview=true&insitepreview=true&dm_device=' + selected);
        }
    });
});
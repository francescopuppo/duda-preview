$(document).ready(function () {
    $(".submit").click(function () {
        var dudaid = $("#dudaid").val();
        var selected = $('#device').children(":selected").val();
        $("#form").attr('action', 'https://my.duda.co/site/' + dudaid + '?showOriginal=true&preview=true&insitepreview=true&dm_device=' + selected);
    });
});
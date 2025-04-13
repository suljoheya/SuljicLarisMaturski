$(document).ready(function(){
    $('.gallery img').click(function(){
        let src = $(this).attr('src');
        let info = $(this).data('info');

        const data = info.split('|');
        let tableHtml = '<table>';
        data.forEach(item => {
            const [label, value] = item.split(':');
            tableHtml += '<tr><td><strong>' + label.trim() + '</strong></td><td>' + value.trim() + '</td></tr>';
        });
        tableHtml += '</table>';

        $('#largeImage').attr('src', src);
        $('#playerInfo').html(tableHtml);
        $('.overlay').fadeIn();
    });

    $('.close').click(function(){
        $('.overlay').fadeOut();
    });
    
$('.overlay').click(function(e) {
    if (!$(e.target).closest('.overlay-content').length) {
        $('.overlay').fadeOut();
    }
});

});

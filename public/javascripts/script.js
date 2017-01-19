
$(function() {
    $('#add-btn').click(function() {
        $.ajax({
            type: 'POST',
            url: '/article',
            data: {
                title: $('#title').val(),
                text: $('#text').val(),
                displayImage: $('#displayImage').val()
            },
            success: function(data){
                //document.write(data);
                //$("#alrticles-list").html(data);
                $( data ).replaceAll( "#body-wrapper" );
            }
        });
        return false;
    });

    $('.edit-btn').click(function() {
        var self = $(this);
        var article = self.closest('.article');
        var title = article.find('.title');
        var text = article.find('.text');
        var displayImage = article.find('.displayImage');

        $.ajax({
            type: 'PUT',
            url: '/article/' + self.data('id'),
            data: {
                title: title.val(),
                text: text.val(),
                displayImage: displayImage.val()
            },
            success: function(data){
                //document.write(data);
                //$("#alrticles-list").html(data);
                $( data ).replaceAll( "#body-wrapper" );
            }
        });
        return false;
    });

    $('.delete-btn').click(function() {
        var self = $(this);
        $.ajax({
            type: 'DELETE',
            url: '/article/' + self.data('id'),
            success: function(data){
                //document.write(data);
                //$("#alrticles-list").html(data);
                $( data ).replaceAll( "#body-wrapper" );
            }
        });
        return false;
    });

    $('.show-edit-btn').click(function() {
        toggleEditMode($(this));
    });

    $('.cancel-btn').click(function() {
        toggleEditMode($(this));
    });

    function toggleEditMode(context) {
        var card = context.closest('.article').find('.card');
        var form = context.closest('.article').find('.edit-form');
        card.toggle();
        form.toggle();
    };
});



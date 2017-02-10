jQuery(function() {
    var endDate = jQuery("#counter").attr('data-finaldate');
    jQuery('.countdown').countdown({
        date: endDate,
        render: function(data) {
            var elDay = document.getElementById('dias'),
                elHour = document.getElementById('horas'),
                elMin = document.getElementById('minutos'),
                elSec = document.getElementById('segundos');

            elDay.textContent = data.days;
            elHour.textContent = data.hours;
            elMin.textContent = data.min;
            elSec.textContent = data.sec;
        },
        onEnd: function() {
            // $(this.el).addClass('ended');
        }
    });

    var styles = [{
        "stylers": []
    }];
    var latLong = [jQuery("#map").attr('data-lat'), jQuery("#map").attr('data-lon')];

    var options = {
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(latLong[0], latLong[1]),
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');
    var map = new google.maps.Map(div, options);

    new google.maps.Marker({
        position: new google.maps.LatLng(latLong[0], latLong[1]),
        map: map
    });

    var styledMapType = new google.maps.StyledMapType(styles, {
        name: 'Styled'
    });
    map.mapTypes.set('Styled', styledMapType);
});

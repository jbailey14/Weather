// simple weather plugin

//Current Location
$.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Current Weather
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
    
    
      // Display Future Weather
       // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
        
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
        
      // Day 3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      
      // Day 4
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high);
        
      // Day 5
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high);
     
      // Day 6
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high);
        
      // Day 7
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high);
        
      // Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
        var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
        var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
        var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
        var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
        var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
        var iconCodeDay6 = 'icon-' + weather.forecast[5].code;
        var iconCodeDay7 = 'icon-' + weather.forecast[6].code;
            
      $('i:nth-child(1)').attr('class', iconCode ); 
      $('.day1 i').attr('class', iconCodeDay1 ); 
      $('.day2 i').attr('class', iconCodeDay2 ); 
      $('.day3 i').attr('class', iconCodeDay3 ); 
      $('.day4 i').attr('class', iconCodeDay4 ); 
      $('.day5 i').attr('class', iconCodeDay5 ); 
      $('.day6 i').attr('class', iconCodeDay6 ); 
      $('.day7 i').attr('class', iconCodeDay7 ); 
        
        
        
      console.log(weather.forecast[0].high);
    },
    
    
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-|');
    }
  
  });

// Seattle
$.simpleWeather({
    location: 'Seattle',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Current Weather
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
    
    
      // Display Future Weather
       // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
        
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
        
      // Day 3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      
      // Day 4
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high);
        
      // Day 5
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high);
     
      // Day 6
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high);
        
      // Day 7
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high);
        
      // Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
        var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
        var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
        var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
        var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
        var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
        var iconCodeDay6 = 'icon-' + weather.forecast[5].code;
        var iconCodeDay7 = 'icon-' + weather.forecast[6].code;
            
      $('i:nth-child(1)').attr('class', iconCode ); 
      $('.day1 i').attr('class', iconCodeDay1 ); 
      $('.day2 i').attr('class', iconCodeDay2 ); 
      $('.day3 i').attr('class', iconCodeDay3 ); 
      $('.day4 i').attr('class', iconCodeDay4 ); 
      $('.day5 i').attr('class', iconCodeDay5 ); 
      $('.day6 i').attr('class', iconCodeDay6 ); 
      $('.day7 i').attr('class', iconCodeDay7 ); 
        
        
        
      console.log(weather.forecast[0].high);
    },
    
    
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-|');
    }
  
  });


// Spokane
$.simpleWeather({
    location: 'Spokane',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Current Weather
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
    
    
      // Display Future Weather
       // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
        
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
        
      // Day 3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      
      // Day 4
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high);
        
      // Day 5
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high);
     
      // Day 6
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high);
        
      // Day 7
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high);
        
      // Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
        var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
        var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
        var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
        var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
        var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
        var iconCodeDay6 = 'icon-' + weather.forecast[5].code;
        var iconCodeDay7 = 'icon-' + weather.forecast[6].code;
            
      $('i:nth-child(1)').attr('class', iconCode ); 
      $('.day1 i').attr('class', iconCodeDay1 ); 
      $('.day2 i').attr('class', iconCodeDay2 ); 
      $('.day3 i').attr('class', iconCodeDay3 ); 
      $('.day4 i').attr('class', iconCodeDay4 ); 
      $('.day5 i').attr('class', iconCodeDay5 ); 
      $('.day6 i').attr('class', iconCodeDay6 ); 
      $('.day7 i').attr('class', iconCodeDay7 ); 
        
        
        
      console.log(weather.forecast[0].high);
    },
    
    
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-|');
    }
  
  });

// Portland
$.simpleWeather({
    location: 'Portland',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Current Weather
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
    
    
      // Display Future Weather
       // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
        
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
        
      // Day 3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      
      // Day 4
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high);
        
      // Day 5
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high);
     
      // Day 6
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high);
        
      // Day 7
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high);
        
      // Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
        var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
        var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
        var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
        var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
        var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
        var iconCodeDay6 = 'icon-' + weather.forecast[5].code;
        var iconCodeDay7 = 'icon-' + weather.forecast[6].code;
            
      $('i:nth-child(1)').attr('class', iconCode ); 
      $('.day1 i').attr('class', iconCodeDay1 ); 
      $('.day2 i').attr('class', iconCodeDay2 ); 
      $('.day3 i').attr('class', iconCodeDay3 ); 
      $('.day4 i').attr('class', iconCodeDay4 ); 
      $('.day5 i').attr('class', iconCodeDay5 ); 
      $('.day6 i').attr('class', iconCodeDay6 ); 
      $('.day7 i').attr('class', iconCodeDay7 ); 
        
        
        
      console.log(weather.forecast[0].high);
    },
    
    
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-|');
    }
  
  });

// Bothell
$.simpleWeather({
    location: 'Bothell',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Current Weather
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
    
    
      // Display Future Weather
       // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
        
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
        
      // Day 3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      
      // Day 4
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      $('aside figure:nth-child(4) .high').text(weather.forecast[3].high);
        
      // Day 5
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      $('aside figure:nth-child(5) .high').text(weather.forecast[4].high);
     
      // Day 6
      $('aside figure:nth-child(6) h2').text(weather.forecast[5].day);
      $('aside figure:nth-child(6) img').attr('src', weather.forecast[5].image);
      $('aside figure:nth-child(6) figcaption').text(weather.forecast[5].text);
      $('aside figure:nth-child(6) .high').text(weather.forecast[5].high);
        
      // Day 7
      $('aside figure:nth-child(7) h2').text(weather.forecast[6].day);
      $('aside figure:nth-child(7) img').attr('src', weather.forecast[6].image);
      $('aside figure:nth-child(7) figcaption').text(weather.forecast[6].text);
      $('aside figure:nth-child(7) .high').text(weather.forecast[6].high);
        
      // Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
        var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
        var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
        var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
        var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
        var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
        var iconCodeDay6 = 'icon-' + weather.forecast[5].code;
        var iconCodeDay7 = 'icon-' + weather.forecast[6].code;
            
      $('i:nth-child(1)').attr('class', iconCode ); 
      $('.day1 i').attr('class', iconCodeDay1 ); 
      $('.day2 i').attr('class', iconCodeDay2 ); 
      $('.day3 i').attr('class', iconCodeDay3 ); 
      $('.day4 i').attr('class', iconCodeDay4 ); 
      $('.day5 i').attr('class', iconCodeDay5 ); 
      $('.day6 i').attr('class', iconCodeDay6 ); 
      $('.day7 i').attr('class', iconCodeDay7 ); 
        
        
        
      console.log(weather.forecast[0].high);
    },
    
    
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside :-|');
    }
  
  });

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
});

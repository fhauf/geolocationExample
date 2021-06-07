function geoFindMe() {

    const status = document.querySelector('#status');
    const myMap = document.querySelector('#map');
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = 'You are here';
      myMap.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDwjfqbhj3Fw8SlwgIuDC5ApbRyhdXrR1Y&q=${latitude}, ${longitude}`;
      myMap.hidden = false;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);
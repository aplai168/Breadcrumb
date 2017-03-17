/* eslint no-bitwise: ["error", { "allow": ["^=", "&"] }] */
/* global TransitionType */

angular.module('breadcrumb')
.controller('CreateTrailCtrl', function ($scope, $state, Trail, Map) {
  const addresses = [
    '727 Mandeville St, New Orleans, LA, 70117',
    '15828 196th Pl NE, Woodinville, WA, 98077',
    '748 Camp St, New Orleans, LA 70130',
    '24700 McBean Pkwy, Valencia, CA 91355',
    '60 Lincoln Center Plaza, New York, NY 10023',
  ];

  const i = () => Math.floor(Math.random() * 5);

  const moveX = (crumb, num) => {
    const move = `${crumb.left += num}%`;

    const style = {
      left: move,
      'transition-duration': '250ms',
    };
    crumb.style = style;
  };

  const moveY = (crumb, num) => {
    const style = {
      'transition-duration': '1000ms',
      transform: `translate(0px, ${num}px)`,
    };
    crumb.style = style;
  };

  const moveReset = (crumb, index) => {
    crumb.left = 100 * index;
    const move = `${crumb.left += 2.5}%`;
    const style = {
      'transition-duration': '1000ms',
      top: '0px',
      left: move,
    };
    crumb.style = style;
  };


  $scope.loading = { display: 'none' };

  $scope.trailTypes = [
    'adventure',
    'mystery',
    'casual',
    'tour',
    'scavenger',
    'nature',
    'history',
  ].sort();

  $scope.step = 0;

  $scope.changeStep = (change) => {
    if (change) {
      $scope.step += 1;
    } else if (!change) {
      $scope.step -= 1;
    }
    if ($scope.step < 0) {
      $scope.step = $scope.trailTypes.length - 1;
    } else if ($scope.step === $scope.trailTypes.length) {
      $scope.step -= $scope.trailTypes.length;
    }
    $scope.trail.type = $scope.trailTypes[$scope.step];
  };

  $scope.location = {}; // this is the shared scope with the directive and is in the View
    // how can I replace this ?

  $scope.obj = {};

  $scope.difficulty = {
    1: 'easy',
    2: 'normal',
    3: 'hard',
  };

  $scope.transport = {
    WALKING: 'walk',
    BICYCLING: 'bicycle',
    TRANSIT: 'bus',
    DRIVING: 'car',
  };

  $scope.money = (boolean) => {
    $scope.trail.requires_money = !boolean;
    if (boolean) $scope.moneyStyle = null;
    else $scope.moneyStyle = { color: '#33CD61' };
  };

  $scope.moneyStyle = null;

  $scope.review = {
    check: false,
    style: { display: 'none' },
  };

  $scope.trail = {
    name: 'Liv\'s trail',
    description: 'A trail that takes you places',
    type: $scope.trailTypes[0],
    map: '',
    time: '',
    length: '',
    requires_money: false,
    transport: '',
    crumbs: 0,
    left: 2.5,
    style: null,
  };
// addresses[i()]
  $scope.crumb = () => {
    const obj = {
      name: '',
      description: '',
      location: '',
      text: '',
      media: '',
      image: '',
      video: '',
      ar: '',
      left: 2.5,
      style: { 'animation-name': 'moveInFromRight' },
    };
    return obj;
  };

  $scope.crumbs = [];

  $scope.add = (arg) => {
    if (!$scope.review.check) {
      $scope.move(-100);
      console.warn($scope.location, '$scope.location in add()')
      $scope.trail.crumbs += 1;
      const crumb = $scope.crumb();
      crumb.location = arg;
      console.warn(arg, 'arg add()')
      console.warn(crumb, 'crumb add()')
      $scope.crumbs.push(crumb);
      console.warn($scope.crumbs, 'mylistofcrumbs');
    }
  };


  $scope.remove = (index) => {
    $scope.crumbs.splice(index, 1);
    if (!$scope.review.check) {
      $scope.trail.crumbs -= 1;
      moveReset($scope.trail, 0);
      $scope.crumbs.forEach((crumb, ind) => {
        moveReset(crumb, ind + 1);
      });
    }
  };

  $scope.cardSwipedLeft = (index) => {
    if (!$scope.crumbs.length || index === $scope.crumbs.length) {
      return null;
    }
    return $scope.move(-100);
  };

  $scope.cardSwipedRight = () => {
    $scope.move(100);
  };

  $scope.move = (num) => {
    if (!$scope.review.check) {
      moveX($scope.trail, num);
      $scope.crumbs.forEach((crumb) => {
        moveX(crumb, num);
      });
    }
  };

  $scope.reviewMap = () => {
    $scope.loading = null;
    $scope.review.check = true;
    console.warn($scope.crumbs, 'array in ReviewMap of Crumbs')
    Map.add($scope.crumbs, $scope.trail.transport)
    .then((data) => {
      $scope.loading = { display: 'none' };
      $scope.trail.map = data.image;
      $scope.trail.time = data.time;
      $scope.trail.length = data.miles;
      moveY($scope.trail, -475);
      $scope.crumbs.forEach((crumb) => {
        moveY(crumb, -400);
      });
      $scope.review.style = {
        'animation-name': 'moveUp',
      };
      $scope.$apply();
      console.warn(data, 'data');
    });
  };


  $scope.reset = () => {
    $scope.review.check = false;
    moveReset($scope.trail, 0);
    $scope.crumbs.forEach((crumb, index) => {
      moveReset(crumb, index + 1);
    });
    $scope.review.style = {
      'animation-name': 'moveDown',
    };
  };

  $scope.submit = () => {
    $scope.loading = null;
    Trail.submit($scope.trail, $scope.crumbs)
    .then(() => {
      $scope.reset();
      $scope.loading = { display: 'none' };
      $state.go('app.dashboard');
    });
  };

  $scope.initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -33.8688,
        lng: 151.2195,
      },
      zoom: 13,
    });
    const card = document.getElementById('pac-card');
    const input = document.getElementById('pac-input');
    const types = document.getElementById('type-selector');
    const strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    const autocomplete = new google.maps.places.Autocomplete(input);

   // Bind the map's bounds (viewport) property to the autocomplete object,
   // so that the autocomplete requests use the current map bounds for the
   // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener('place_changed', () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();
      if (!place.geometry) {
       // User entered the name of a Place that was not suggested and
       // pressed the Enter key, or the Place Details request failed.
        window.alert(`No details available for input: ${place.name}`);
        return;
      }

     // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      let address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map, marker);
    });

   // Sets a listener on a radio button to change the filter type on Places
   // Autocomplete.
    function setupClickListener(id, types) {
      const radioButton = document.getElementById(id);
      radioButton.addEventListener('click', () => {
        autocomplete.setTypes(types);
      });
    }

    setupClickListener('changetype-all', []);
    setupClickListener('changetype-address', ['address']);
    setupClickListener('changetype-establishment', ['establishment']);
    setupClickListener('changetype-geocode', ['geocode']);

    document.getElementById('use-strict-bounds')
       .addEventListener('click', () => {
         console.warn(`Checkbox click! New state=${this.checked}`);
         autocomplete.setOptions({ strictBounds: this.checked });
       });
  };
});

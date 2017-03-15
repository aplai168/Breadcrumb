/* eslint no-bitwise: ["error", { "allow": ["^=", "&"] }] */
/* global TransitionType */

angular.module('breadcrumb')
.controller('ListCtrl', function ($scope, ListFact) {
  // const ListFact.close = {
  //   height: '73px',
  //   'transition-duration': '250ms',
  //   overflow: 'hidden',
  // };
  //
  // const trailmaker = () => {
  //   const tran = Math.floor(Math.random() * 4) + 1;
  //   const stars = Math.floor(Math.random() * 5);
  //   const emptyStars = 5 - stars;
  //   const difficulty = Math.floor(Math.random() * 5) + 1;
  //   return {
  //     name: `Trail ${Math.floor(Math.random() * 100)}`,
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     transport: tran,
  //     rating: ListFact.range(stars),
  //     emptyStars: ListFact.range(emptyStars),
  //     difficulty: ListFact.range(difficulty),
  //     length: (Math.floor(Math.random() * 5) + 2) * tran,
  //     progress: Math.floor(Math.random() * 100),
  //     style: ListFact.close,
  //   };
  // };

  $scope.specificTransport = false;

  $scope.trail = {
    name: 'My first trail',
    transport: 2,
    rating: 3,
    difficulty: 3,
    length: 25,
    progress: 50,
    style: ListFact.close,
  };

  $scope.toggle = index => (
    $scope.trails[index].style.height === '73px' ?
    $scope.open(index) :
    $scope.close(index)
  );

  $scope.open = (index) => {
    $scope.trails[index].style = {
      height: '550px',
      overflow: 'hidden',
      'transition-duration': '250ms',
    };
    $scope.trails.forEach((trail, place) => {
      if (place !== index) {
        $scope.close(place);
      }
    });
  };

  $scope.close = (index) => {
    $scope.trails[index].style = ListFact.close;
  };

  $scope.filter = (type, value) => {
    $scope.trails = ListFact.filter($scope.trails, type, value);
    if (type === 'transport') $scope.specificTransport = true;
  };

  $scope.reset = () => {
    $scope.specificTransport = false;
    $scope.trails = ListFact.filter($scope.trailsCache, 'name');
  };

  $scope.trailsCache = [
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
    ListFact.trail(),
  ];

  $scope.trails = ListFact.filter($scope.trailsCache, 'name');
});

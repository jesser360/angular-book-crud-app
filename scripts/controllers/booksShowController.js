console.log("THIS IS ONE BOOK");
angular
  .module('bookApp')
  .controller('booksShowController', booksShowController);

booksShowController.$inject = ['$http','$routeParams'];

function booksShowController ($http, $routeParams) {
  var vm = this;
  console.log("these those params", $routeParams.id);

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.book = response.data;
    document.body.scrollTop;
    console.log("this is datums",vm.book);
  }, function errorCallback(err) {
    console.log('There was an error getting the data', err);
  });
  function successCallback(response) {
    vm.book = response.data;
    console.log("this is datums",vm.book);
  };


  vm.editBook = function(book){
    console.log("dis dat book", book);
  $http({
    method: "PUT",
    url: 'https://super-crud.herokuapp.com/books/' + book._id,
    data:book
  }).then(function succEdit(res){
    console.log("COOL BRO", res);
  }, function errorCallback(err) {
      console.log('There was an error getting the data', err);
    });
  }


  vm.deleteBook = function(book) {
    console.log("LOOKKILOOKI IMA BOOKI", book);
    $http({
      method:"DELETE",
      url: 'https://super-crud.herokuapp.com/books/' + book._id
    }).then(function succDelete(res){
      // var index = books.indexOf(song);
      // books.splice(index,1);
      window.location.href = '/';
      console.log("deleted THISONE ", res);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }
}

angular
  .module('bookApp')
  .controller('booksIndexController', booksIndexController);

booksIndexController.$inject = ['$http'];

function booksIndexController ($http) {
  var vm = this;

  console.log("Let me show you my index.");
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log("ZIS IZ ZE DATA!", response.data.books);
  }, function errorCallback(err) {
    console.log('There was an error getting the data', err);
  });

vm.createBook = function(title,author,releaseDate,image){
  var newBook = {
    title:title,
    author:author,
    releaseDate:releaseDate,
    image:image
  }
  console.log("created book wiiithh" ,newBook);
  $http({
    method:"POST",
    url: 'https://super-crud.herokuapp.com/books',
    data: newBook
  }).then(function succPost(response){
    vm.books.push(response.data);
    //location.reload();
    console.log("YOU HAVE CREATED THIS!!",response.data);
    window.scrollTo(0,document.body.scrollHeight);
  }, function errorCallback(err) {
    console.log('There was an error getting the data', err);
  });
}

}

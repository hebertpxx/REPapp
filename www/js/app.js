
var app = angular.module('agendaApp', ['ionic', 'firebase']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

  // Tela "Lista"
  $stateProvider.state('lista', {
    url: '/lista',
    templateUrl: 'templates/lista.html',
    controller: 'ListaCtrl'
  });

   // Tela "Login"
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });

    // Tela "Menu"
    $stateProvider.state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    });

      // Tela "Cadastro"
  $stateProvider.state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'CadastroCtrl'
  });

  // Tela "Cadastro de República"
  $stateProvider.state('cadastro_republica', {
    url: '/cadastro_republica',
    templateUrl: 'templates/cadastro_republica.html',
    controller: 'CadastroRepublicaCtrl'
  });

    // Tela "Adicionar Afazer"
    $stateProvider.state('adicionar_afazer', {
      url: '/adicionar_afazer',
      templateUrl: 'templates/adicionar_afazer.html',
      controller: 'AddAfazerCtrl'
    });

    // Tela "Adicionar Conta"
    $stateProvider.state('adicionar_conta', {
      url: '/adicionar_conta',
      templateUrl: 'templates/adicionar_conta.html',
      controller: 'AddContaCtrl'
    });

    // Tela "Dados Pessoais"
    $stateProvider.state('dados_pessoais', {
      url: '/dados_pessoais',
      templateUrl: 'templates/dados_pessoais.html',
      controller: 'DadosPessoaisCtrl'
    });

  // Indicar a tela inicial (Initial State)
  $urlRouterProvider.otherwise('/login');

});

//Controlador da lista
app.controller("ListaCtrl", function($scope, $state) {

  $scope.menu = function() {
    $state.go('menu');

  }
});

//Controlador do cadastro
app.controller('CadastroCtrl', function($scope, $state) {

});

//Controlador do cadastro da república
app.controller('CadastroRepublicaCtrl', function($scope, $state) {

  $scope.addRepublica = function() {
    $state.go('cadastro_republica');
    }

});

//Controlador do login
app.controller('LoginCtrl', function($scope, $state) {
  
 $scope.entrar = function() {
  $state.go('lista');
  }

  $scope.addMorador = function() {
    $state.go('cadastro');
  }

});

//Controlador do menu
app.controller('MenuCtrl', function($scope, $state) {
  
  $scope.addMorador = function() {
    $state.go('cadastro');
  }

  $scope.addRepublica = function() {
    $state.go('cadastro_republica');
  }

  $scope.addAfazer = function() {
    $state.go('adicionar_afazer');
  }

  $scope.addConta = function() {
    $state.go('adicionar_conta');
  }

  $scope.dadosPessoais = function() {
    $state.go('dados_pessoais');
  }

});

//Controlador Tela Adicionar Afazer
app.controller('AddAfazerCtrl', function($scope, $state) {


});

//Controlador Tela Adicionar Conta
app.controller('AddContaCtrl', function($scope, $state) {
  
});

//Controlador Tela Adicionar Conta
app.controller('DadosPessoaisCtrl', function($scope, $state) {
  
});

//Controlador de Afazeres
app.controller('AfazeresCtrl', function($scope, $state, $firebaseArray) {
  var ref = firebase.database().ref('afazeres')
  $scope.afazeres = $firebaseArray(ref);
});

app.factory('AfazerService', function() {

});

// Para cada tela, temos que criar:
// 1. HTML (dentro de templates)
// 2. O Controller
// 3. O Estado ($State) 
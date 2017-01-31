catClickerApp.service('catsService', ['$cookies', function ($cookies) {

  this.disableVoting = function (cats, currentUser) {
    if (currentUser) {
      var savedUsers;
      savedUsers = localStorage.getItem('users');
      savedUsers = JSON.parse(savedUsers);
      for (var i = 0; i < cats.length; i++) {
        cats[i].blockVoting = false;
        for (var j = 0; j < savedUsers[currentUser].votedCats.length; j++) {
          if (cats[i].id == savedUsers[currentUser].votedCats[j]) {
            cats[i].blockVoting = true;
          }
        }
      }
    }
  };

  this.setVoting = function (cats) {
    var catVoting = $cookies.catVoting;
    if (catVoting) {
      catVoting = JSON.parse(catVoting);
      for (var i = 0; i < cats.length; i++) {
        if (catVoting[cats[i].id]) {
          cats[i].vote = catVoting[cats[i].id];
        }
      }
    }
  };

  this.deleteCatFromScope = function (cats, cat) {
    for (var i=0; i<cats.length; i++) {
      if (cats[i]._id == cat._id) {
        cats.splice(i, 1);
      }
    }
  };

  this.voteForCat = function (cat, currentUser) {
    var savedUsers,
      catVoting,
      newVote = {};
    cat.vote++;
    cat.blockVoting = true;

    savedUsers = localStorage.getItem('users');
    savedUsers = JSON.parse(savedUsers);
    savedUsers[currentUser].votedCats.push(cat.id);
    localStorage.setItem('users', JSON.stringify(savedUsers));

    // Retrieving a cookie
    if ($cookies.catVoting) {
      catVoting = $cookies.catVoting;
      catVoting = JSON.parse(catVoting);
      catVoting[cat.id] = cat.vote;
      $cookies.catVoting = JSON.stringify(catVoting);
    }
    else {
      newVote[cat.id] =  cat.vote;
      $cookies.catVoting = JSON.stringify(newVote);
    }
  };

}]);
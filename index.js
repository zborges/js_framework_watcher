/* global axios */
// Vue Stats
async function getData (url) {
  var repoData = await axios.get(url)
    .then(function (response) {
      const repoData = {
        watchers: response["data"]["watchers_count"],
        forks: response["data"]["forks"],
        stars: response["data"]["stargazers_count"]
      }
      return repoData;

    });
    // console.log(repoData);
};

var vueData = getData("https://api.github.com/repos/vuejs/vue");

console.log(vueData);
// getRequest("https://api.github.com/repos/vuejs/vue");
// axios.get("https://api.github.com/repos/vuejs/vue")
//   .then(function (response) {
//     // handle success
//     console.log(response["data"]);
//     let vueWatchers = (response["data"]["watchers_count"]);
//     let vueForks = (response["data"]["forks"]);
//     let vueStars = (response["data"]["stargazers_count"]);
//     console.log(vueWatchers);
//     console.log(vueForks);
//     console.log(vueStars)

//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

// // Angular Stats
// axios.get("https://api.github.com/repos/angular/angular.js")
//   .then(function (response) {
//     // handle success
//     let angularWatchers = (response["data"]["watchers_count"]);
//     let angularForks = (response["data"]["forks"]);
//     let angularStars = (response["data"]["stargazers_count"]);
//     console.log(angularWatchers);
//     console.log(angularForks);
//     console.log(angularStars)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });


// //  Ember Stats
// axios.get("https://api.github.com/repos/emberjs/ember.js")
//   .then(function (response) {
//     // handle success
//     // console.log(response["data"]);
//     let emberWatchers = (response["data"]["watchers_count"]);
//     let emberForks = (response["data"]["forks"]);
//     let emberStars = (response["data"]["stargazers_count"]);
//     console.log(emberWatchers);
//     console.log(emberForks);
//     console.log(emberStars)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
  
// //  Svelte Stats
// axios.get("https://api.github.com/repos/sveltejs/svelte")
//   .then(function (response) {
//     // handle success
//     // console.log(response["data"]);
//     let svelteWatchers = (response["data"]["watchers_count"]);
//     let svelteForks = (response["data"]["forks"]);
//     let svelteStars = (response["data"]["stargazers_count"]);
//     console.log(svelteWatchers);
//     console.log(svelteForks);
//     console.log(svelteStars)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
  
// //  React Stats
// axios.get("https://api.github.com/repos/facebook/react")
//   .then(function (response) {
//     // handle success
//     // console.log(response["data"]);
//     let reactWatchers = (response["data"]["watchers_count"]);
//     let reactForks = (response["data"]["forks"]);
//     let reactStars = (response["data"]["stargazers_count"]);
//     console.log(reactWatchers);
//     console.log(reactForks);
//     console.log(reactStars)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
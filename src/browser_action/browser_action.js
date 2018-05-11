function isLoggedIn(token) {
  // The user is logged in if their token isn't expired
  return jwt_decode(token).exp > Date.now() / 1000;
}

function logout() {
  // Remove the idToken from storage
  localStorage.clear();
  main();
}

// Minimal jQuery
const $$ = document.querySelectorAll.bind(document);
const $  = document.querySelector.bind(document);


function renderProfileView(authResult) {
  $('.default').classList.add('hidden');
  $('.loading').classList.remove('hidden');
  fetch(`https://${env.AUTH0_DOMAIN}/userinfo`, {
    headers: {
      'Authorization': `Bearer ${authResult.access_token}`
    }
  }).then(resp => resp.json()).then((profile) => {
    ['picture', 'name', 'nickname'].forEach((key) => {

       const element = $('.' +  key);
       if( element.nodeName === 'DIV' ) {
         element.style.backgroundImage = 'url(' + profile[key] + ')';
         return;
       }

       element.textContent = profile[key];
    });
    $('.loading').classList.add('hidden');
    $('.profile').classList.remove('hidden');
    $('.logout-button').addEventListener('click', logout);
  }).catch(logout);
}


function renderDefaultView() {
  $('.default').classList.remove('hidden');
  $('.profile').classList.add('hidden');
  $('.loading').classList.add('hidden');

  $('.login-button').addEventListener('click', () => {
    $('.default').classList.add('hidden');
    $('.loading').classList.remove('hidden');
    chrome.runtime.sendMessage({
      type: "authenticate"
    });
  });
}

  /*************   exporting the page    **************/



  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('export-button');
    btn.addEventListener('click', function() {
      var tablink;
      chrome.tabs.getSelected(null,function(tab) {
          tablink = tab.url;
      });

    console.log('the page url is ' + tablink)
      chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
      }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
          console.log('There was an error injecting script : \n' + chrome.runtime.lastError.message);
        }
      });

      chrome.runtime.onMessage.addListener(function(request, sender) {
        if (request.action == "getSource") {
         console.log("the page source isss " + request.source);
         axios.post('http://0.0.0.0:5000/api/pages', {
          html: '<a>riminder</a>',
          title: "riminder",
          url: tablink
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        }
      });
    }, false);
  }, false);


  /*****************************************************/


function main () {
  const authResult = JSON.parse(localStorage.authResult || '{}');
  const token = authResult.id_token;
  if (token && isLoggedIn(token)) {
    renderProfileView(authResult);
  } else {
    renderDefaultView();
  }
}

document.addEventListener('DOMContentLoaded', main);

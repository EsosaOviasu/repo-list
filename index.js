

function displayRepoList(responseJson) {
    console.log(responseJson.length);
    for (i = 0; i < responseJson.length; i++) {
        $('.results').append(`<li class="result-list-item">
        <h2>${responseJson[i].name}</h2>
            <a href="${responseJson[i].html_url}" class="resultsRepos">${responseJson[i].html_url}</a>
    </li>`);
    };
    $('ol').removeClass('hidden');

    
};



function getRepoList() {
    const searchUrl = `https://api.github.com/users/${$('input').val()}/repos`
    fetch(searchUrl)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayRepoList(responseJson))
    .catch(error => alert('User not found'));
};



function wipeResults() {
    $('ol').empty();
};

$(function runRepoList() {
    $('button').click( function(event) {
        event.preventDefault();
        console.log($('input').val());
        wipeResults();
        getRepoList();
    });
});

var posts_result = [];
var steemconnect; 
var loginURL;

$(document).ready(function(){
    init();
});


function init(){
    //readPosts();
    steemconnect.init({
        app: 'caroot',
        //callbackURL: 'http://localhost'
        callbackURL: 'http://95.80.56.96:2329/steemsound/webpage/test.html'
    });

    var isAuth = false;
    loginURL = steemconnect.getLoginURL();

    steemconnect.isAuthenticated(function(err, result) {
        if (!err && result.isAuthenticated) {
            var username = result.username;
            isAuth = true;
            console.log("logged in");
            $("#username").html("Logged in as " + username);
        }
    });
}
    //steemconnect.isAuthenticated(function(err, result) {
        //if (!err && result.isAuthenticated) {
            //isAuth = true;
            //var username = result.username;
            //console.log(result);
            ////do more

            //$("#connect").html("obj:" + steemconnect);

            //steemconnect.comment('saft', permlink_parent, username, 'development-testing-222221233132132132132', 'testing JS lib', 'this is a test', jsondata, function(err, res){
             //   console.log(err,res);
            //});

 //           steemconnect.comment('', tag, username, 'development-testing-2222132', 'testing', 'test', jsondata, function(err, res){
                //console.log(err,res);
            //});
            //steemconnect.comment('', tag, username, 'development-testing-2222132', 'testing JS lib', 'this is a test', jsondata, function(err, res){
                //console.log(err,res);
            //});
//}

function goToLogin() {
    window.location = loginURL;
}

function createPost(){
    var tag = "test-development";
    var permlink_parent = 'popular-google-chrome-extension-caught-mining-cryptocurrency-on-thousands-of-computers';
    var jsondata = {tags: [tag], app:'caroot'};

    steemconnect.comment('', tag, username, 'development-testing-2222132', 'testing', 'test', jsondata, function(err, res){
        console.log(err,res);
    });

}


function readPosts(){
    var query = {
        tag: 'bitshares',
        limit: 10
    };

    steem.api.setOptions({ url: 'tnet.steem.vc' });

    steem.api.getDiscussionsByTrending(query, function(err, result) {
        //console.log(err, result);
        if(err != null){
            console.log(err);
        }

        console.log(result);
        posts_result = result;


        for(var i = 0; i < posts_result.length;i++){
            var post = posts_result[i];
            console.log(post['title']);
        }

    });

}




































    //steem.api.getAccounts(['caroot'], function(err, response){
        //console.log(err, response);
    //});

    //steem.api.getDiscussionsByTrending('steemit', function(err, result) {
      //console.log(err, result);
    //});
    //steem.api.getDiscussionsByTrending('steemit', function(err, result) {
      //console.log(err, result);
    //});


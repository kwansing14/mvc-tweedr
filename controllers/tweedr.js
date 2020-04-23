module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    **/

    let indexControllerCallback = (request, response) => {
        var username = request.cookies['username']

        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        db.tweedr.getAllTweets((error, tweets) => {
            //response.send(tweets)
            data = {
                tweets,
                loggedIn,
                username
            }
            //console.log("data>>>>>>>"+data)
            response.render('tweedr/index', data);
        });
    };
    let postNewTweet = (request, response) => {

        let content = request.body.content
        if (your_string.indexOf('hello') > -1)
        {
          alert("hello found inside your_string");
        }


        let userid = request.cookies['userid']
        values = [request.body.content, userid]
        //console.log(request.body)
        db.tweedr.postNewTweet(values, (error, results) => {
            console.log("data>>>>>>>"+results.rows)
            response.redirect('/');
        });
    };
    let deleteTweet = (request, response) => {
        //let userid = request.params.id
        values = [request.params.id]
        console.log(request.params.id)
        db.tweedr.deleteTweet(values, (error, results) => {
        //     console.log("data>>>>>>>"+results.rows)
             response.redirect('/');
        });
    };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    postNewTweet,
    deleteTweet
  };

}
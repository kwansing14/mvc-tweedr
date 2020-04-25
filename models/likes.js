/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let likesTweet = (request,callback) => {
        let query = "INSERT INTO likes (tweet_id, user_id) VALUES($1, $2) returning *";
        let values = request;
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    console.log(queryResult.rows)
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    return {
        likesTweet
    };
};
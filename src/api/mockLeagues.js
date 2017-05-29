//select * from fantasysports.leagues where  use_login=1 and game_key = 'mlb'

const leagues = [ 
    {
    "query": {
    "count": 1,
    "created": "2017-05-29T01:20:12Z",
    "lang": "en-US",
    "diagnostics": {
    "publiclyCallable": "true",
    "url": {
        "execution-start-time": "2",
        "execution-stop-time": "517",
        "execution-time": "515",
        "content": "http://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=mlb/leagues"
    },
    "user-time": "517",
    "service-time": "515",
    "build-version": "2.0.134"
    },
    "results": {
    "league": {
        "league_key": "370.l.46738",
        "league_id": "46738",
        "name": "Shomer Shabbos",
        "url": "https://baseball.fantasysports.yahoo.com/b1/46738",
        "password": null,
        "draft_status": "postdraft",
        "num_teams": "14",
        "edit_key": "2017-05-29",
        "weekly_deadline": null,
        "league_update_timestamp": "1495952339",
        "scoring_type": "head",
        "league_type": "private",
        "renew": "357_35928",
        "renewed": null,
        "short_invitation_url": "https://yho.com/mlb?l=46738&ikey=824c699890375f12",
        "allow_add_to_dl_extra_pos": "0",
        "is_pro_league": "0",
        "is_cash_league": "0",
        "current_week": "8",
        "start_week": "1",
        "start_date": "2017-04-02",
        "end_week": "24",
        "end_date": "2017-09-24",
        "game_code": "mlb",
        "season": "2017"
    }
    }
    }
    }
];

export default leagues;
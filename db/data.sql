INSERT INTO team (
    team_name,
    city,
    state,
    yr_established,
    wins, 
    losses,
    championships
)
VALUES (
    'atlanta braves',
    'atlanta',
    'georgia',
    '1876',
    11051,
    10890,
    4
);

INSERT INTO player (
    lName, 
    fName, 
    date_of_birth, 
    position, 
    sec_position, 
    batting_stance,
    throwing_hand
) 
VALUES (
    'paige',
    'satchel',
    '1906-07-07',
    'P',
    'P',
    'right',
    'right'
);

INSERT INTO batting (
    player_id,
    batting_avg,
    hits,
    home_runs,
    rbi,
    runs,
    stolen_bases
)
VALUES (
    1,
    .298,
    2935,
    762,
    1996,
    2227,
    514
);

INSERT INTO pitching (
    player_id,
    wins,
    losses,
    strikeouts,
    walks,
    saves,
    era
)
VALUES (
    2,
    124,
    82,
    1501,
    463,
    44,
    2.73
);

UPDATE player 
SET 
yr_began = '1986',
yr_ended = '2007',
imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2H-JexUEDlCrKJz-axGZ-dqra0D2VIpW_DA&usqp=CAU'
WHERE player_id = 1;
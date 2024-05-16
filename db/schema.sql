DROP DATABASE IF EXISTS baseballDB;
CREATE DATABASE baseballDB;
use baseballDB;

-- player table

CREATE TABLE player ( 
    player_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    lName VARCHAR(40) NOT NULL,
    fName VARCHAR(40) NOT NULL,
    date_of_birth DATE NOT NULL,
    position ENUM('P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF', 'OF', 'INF') DEFAULT 'INF',
    sec_position ENUM('P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF', 'OF', 'INF') DEFAULT 'INF',
    batting_stance ENUM('left', 'right', 'switch') DEFAULT 'right',
    throwing_hand ENUM('left', 'right'),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_player PRIMARY KEY (player_id)
);

ALTER TABLE player 
    ADD COLUMN yr_began CHAR(4) DEFAULT 1900,
    ADD COLUMN yr_ended CHAR(4) DEFAULT 1900;

ALTER TABLE player
    ADD COLUMN imgUrl TEXT;

-- team table

CREATE TABLE team (
    team_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    team_name VARCHAR(40) NOT NULL,
    city VARCHAR(40) NOT NULL,
    state VARCHAR(40) NOT NULL, 
    yr_established CHAR(4) DEFAULT '1900',
    wins MEDIUMINT UNSIGNED,
    losses MEDIUMINT UNSIGNED,
    championships TINYINT UNSIGNED,
    CONSTRAINT pk_team PRIMARY KEY (team_id)
); 

ALTER TABLE team 
    ADD COLUMN date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE TEAM 
    ADD COLUMN imgUrl TEXT;

-- pitching table

CREATE TABLE pitching (
    player_id INT UNSIGNED NOT NULL,
    wins SMALLINT UNSIGNED DEFAULT 0,
    losses SMALLINT UNSIGNED DEFAULT 0,
    strikeouts SMALLINT UNSIGNED DEFAULT 0,
    walks SMALLINT UNSIGNED DEFAULT 0,
    saves SMALLINT UNSIGNED DEFAULT 0,
    era FLOAT(4, 2)
);

ALTER TABLE pitching 
    ADD CONSTRAINT fk_player_pitching FOREIGN KEY (player_id) REFERENCES player (player_id);

-- batting table 

CREATE TABLE batting ( 
    player_id INT UNSIGNED NOT NULL,
    batting_avg FLOAT(3, 3) DEFAULT .000,
    hits SMALLINT UNSIGNED DEFAULT 0,
    home_runs SMALLINT UNSIGNED DEFAULT 0,
    rbi SMALLINT UNSIGNED DEFAULT 0,
    runs SMALLINT UNSIGNED DEFAULT 0,
    stolen_bases SMALLINT UNSIGNED DEFAULT 0
);

ALTER TABLE batting 
    ADD CONSTRAINT fk_player_batting FOREIGN KEY (player_id) REFERENCES player (player_id);

CREATE TABLE player_to_team ( 
    player_id INT UNSIGNED NOT NULL,
    team_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES player (player_id),
    CONSTRAINT fk_team FOREIGN KEY (team_id) REFERENCES team (team_id)
);
const daoCommon = require('../daos/common/daoCommon')

const teamDao = {
    ...daoCommon, ...require('../daos/api/teamDao')
}

const playerDao = {
    ...daoCommon, ...require('../daos/api/playerDao')
}

const pitchingDao = {
    ...daoCommon, ...require('../daos/api/pitchingDao')
}

const battingDao = {
    ...daoCommon, ...require('../daos/api/battingDao')
}

module.exports = {
    teamDao,
    playerDao,
    pitchingDao,
    battingDao
}


const { apiKey } = require('../config/keys')
const axios = require('axios')

const url = `https://apiv2.apifootball.com/`

class Game {
  static getPlayers(player_name) {
    return axios.get(url, {
      params: {
        APIkey: apiKey,
        action: 'get_players',
        player_name
      }
    }).then((res) => {
      return res
    })
  }
}

module.exports = Game
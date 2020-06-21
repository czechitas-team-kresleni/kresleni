export const state = () => ({
  games: [],
  kresby: [],
  users: [],
  levels:[],
  handins:[],
})

export const getters = {
  getGames:(state) => {
    return state.games;
  },
  getKresby:(state) => {
    return state.kresby;
  },
  getUsers:(state) => {

    let users = [];
    state.users.forEach(function (user) {

      // state.levels.find(exp => {

      // })

      //moje odevzdane hry
      let myhandins = state.kresby.filter(handin => handin.user_id === user.id);
      let finished_games = [];
      //celkovy pocet lajku za me odevzdane hry
      let likes = 0;
      myhandins.forEach(function(handin) {
          likes += handin.likes;
          finished_games.push(state.games.find(game => handin.game_id === game.id))
      })
      //pocet odevzdanych her
      user.finished_games = myhandins.length;
      //pocet neodevzdanych her
      user.unfinished_games = state.games.length - user.finished_games;


      //celkový počet bodů za všechny odevzdané hry
      let exp = 0;
      finished_games.forEach(function(game) {
        exp += game.exp;
      })

      //přepočet bodů - bonus za likes
      user.exp = exp;
      user.exp += likes * 0.5;
      
      //nalezení nižších úrovní
      let levels = state.levels.filter(level => level.threshold <= user.exp);

      //nalezení úrovně uživatele
      let level = levels.pop();
      user.level = {...level};

      //nalezení nejbližší vyšší úrovně
      let next_level = state.levels.find(lvl => lvl.uroven === (level.uroven + 1))
      if(typeof next_level === 'undefined') {
        user.level.max = true;
      } else {
        //výpočet % postupu v mojí úrovni
        user.level.progress = ((user.exp - level.threshold) * 100) / (next_level.threshold - level.threshold);
        user.level.next_threshold = next_level.threshold;
        user.level.exp_needed = user.level.next_threshold - user.exp;
      }

      users.push(user)

      //
      //user.procento = nejaky vypocet
    })
    return users;

  },


  getLevels:(state) => {
    return state.levels;
  }
 
}

export const mutations = {
  setItems(state, items) {
    state.games = items.games;
    state.kresby = items.kresby;
    state.users = items.users;
    state.levels = items.levels;
  }
}

export const actions = {

  async fetchItems({commit}, params) {
    commit('setItems', {
      games: require('../static/games.json'),
      kresby: require('../static/kresby.json'),
      users: require('../static/users.json'),
      levels: require('../static/levels.json'),
    });
  }

}

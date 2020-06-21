export const state = () => ({
  games: [],
  kresby: [],
  users: [],
  levels:[],
  handins:[],
  likes: []
})

export const getters = { //getters - jen pro čtení
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
      user.exp += likes * 5;
      
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
  },

  hasLiked:(state) => (kresba_id, user_id) => {
    return !!state.likes.find(like => 
      like.user_id === user_id && like.kresba_id === kresba_id
    );
  }
 
}

export const mutations = {


  

  setItems(state, items) {

    items.kresby.forEach(function(kresba) {
      kresba.likes = items.likes.filter(like => like.kresba_id === kresba.id).length;
    })



    state.games = items.games;
    state.kresby = items.kresby;
    state.users = items.users;
    state.levels = items.levels;
  },

  like(state, params) {
    let id = state.likes.slice(-1)[0];
    if(typeof id === 'undefined') {
      id = 0;
    } else {
      id = id.id + 1;
    }
    state.likes.push({
      id: id,
      user_id: params.user_id,
      kresba_id: params.kresba_id
    })
    let kresba = state.kresby.find(kresba => kresba.id === params.kresba_id);
    kresba.likes += 1;
  },

  dislike(state, params) {
    let like = state.likes.find(like => like.user_id === params.user_id && like.kresba_id === params.kresba_id);
    state.likes.splice(state.likes.indexOf(like), 1);
    let kresba = state.kresby.find(kresba => kresba.id === params.kresba_id);
    kresba.likes -= 1;
  },

  addKresba (state, kresba) {
    state.kresby.push(kresba);
  }
}

export const actions = {

  async like({commit}, params) {
    commit('like', params)
  },

  async dislike({commit}, params) {
    commit('dislike', params)
  },

  async fetchItems({commit}, params) {
    commit('setItems', {
      games: require('../static/games.json'),
      kresby: require('../static/kresby.json'),
      users: require('../static/users.json'),
      levels: require('../static/levels.json'),
      likes: require('../static/likes.json'),

    });
  },

  addKresba({commit}, kresba) {
    commit('addKresba', kresba)
  }

}

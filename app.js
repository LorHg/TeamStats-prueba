const team = {
_players: [
  {firstName: 'Harry',
    lastName: 'Potter',
    age: 22},
  {firstName: 'Draco',
    lastName: 'Malfoy',
    age: 21 },
  {firstName: 'Hermione',
    lastName: 'Granger',
    age: 22 },
],
_games: [
  {opponent: 'Ilvemorny',
    teamPoints: 140,
    opponentPoints: 135},
   {opponent: 'Uagadouy',
    teamPoints: 120,
    opponentPoints: 140},
   {opponent: 'Mahoutokoro',
    teamPoints: 140,
    opponentPoints: 140},
],

get players() {
  return this._players;
},

get games() {
  return this._games;
  },

addPlayer(firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age };
    this.players.push(player);
  },
addGame(opponent, teamPoints, opPoints) {
  let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opPoints};
    this.games.push(game);
}
};
team.addPlayer('Ronald', 'Weasley', 21);
team.addPlayer('Lorea', 'Herrero', 28);
team.addPlayer('Isis', 'MyCat', 9);
team.addGame('Astelobruxo', 150, 140);
team.addGame('Ilvermorny', 135, 145);
team.addGame('Beauxbatons', 120, 85);


console.log(team.players);
console.log(team.games);

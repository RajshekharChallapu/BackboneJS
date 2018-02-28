
//Collections

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});
var songs =new Songs([
  new Song({ title: "Song 1"}),
  new Song({ title: "Song 2"}),
  new Song({ title: "Song 3"})
]);
songs.add(new Song({ title: "Song 4" }));


// console method check......provided by Underscore.js
songs
s {length: 4, models: Array(4), _byId: {…}}length: 4models: Array(4)0: s {cid: "c1", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}1: s {cid: "c2", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}2: s {cid: "c3", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}3: s {cid: "c4", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}length: 4__proto__: Array(0)_byId: {c1: s, c2: s, c3: s, c4: s}__proto__: e.Collection
songs.at(0)
s {cid: "c1", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}attributes: {title: "Song 1"}changed: {}cid: "c1"collection: s {length: 4, models: Array(4), _byId: {…}}_changing: false_events: {all: Array(1)}_pending: false_previousAttributes: {}__proto__: e.Model
songs.remove(songs.at(0));
s {cid: "c1", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}attributes: {title: "Song 1"}title: "Song 1"__proto__: Objectchanged: {}cid: "c1"_changing: false_events: {}_pending: false_previousAttributes: {}__proto__: e.Model

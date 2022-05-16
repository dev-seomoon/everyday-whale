import { writable } from 'svelte/store';
import { LEVEL_SCOPE } from './constants.js';

export const name = writable(localStorage.getItem('name'));
export const level = writable(localStorage.getItem('level'));
export const exp = writable(localStorage.getItem('exp'));
export const todoList = writable(JSON.parse(localStorage.getItem('todoList')));
export const doneCount = writable(Number(localStorage.getItem('sumCount')));

export const STORIES = [];

const getWhaleStatus = (currentLevel) => {
  for (var i = 0; i < LEVEL_SCOPE.length; i++) {
    if (currentLevel < LEVEL_SCOPE[i]) break;
  }
  return i;
};

export const status = writable(getWhaleStatus(level));

name.subscribe(value => localStorage.setItem('name', value));
level.subscribe(value => {
  localStorage.setItem('level', value);
  status.set(getWhaleStatus(value));
});
exp.subscribe(value => localStorage.setItem('exp', value));
todoList.subscribe(value => localStorage.setItem('todoList', JSON.stringify(value)));
doneCount.subscribe(value => localStorage.setItem('sumCount', value));
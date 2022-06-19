import { writable } from 'svelte/store';
import { LEVEL_SCOPE, EXP_SCOPE, DEVIDER } from './constants.js';

export const name = writable(localStorage.getItem('name'));
export const level = writable(localStorage.getItem('level'));
export const exp = writable(localStorage.getItem('exp'));
export const todoList = writable(JSON.parse(localStorage.getItem('todoList')));
export const doneCount = writable(Number(localStorage.getItem('sumCount')));

const getWhaleStatus = (currentLevel) => {
  for (var i = 0; i < LEVEL_SCOPE.length; i++) {
    if (currentLevel < LEVEL_SCOPE[i]) break;
  }
  return i;
};

export const status = writable(getWhaleStatus(level));

const getExp = (doneCount) => {
  let exp;

  if (doneCount < EXP_SCOPE[0])
    exp = (doneCount % DEVIDER[0]) / DEVIDER[0];
  else if (doneCount < EXP_SCOPE[1])
    exp = ((doneCount - EXP_SCOPE[0]) % DEVIDER[1]) / DEVIDER[1];
  else if (doneCount < EXP_SCOPE[2])
    exp = ((doneCount - EXP_SCOPE[1]) % DEVIDER[2]) / DEVIDER[2];
  else if (doneCount < EXP_SCOPE[3])
    exp = ((doneCount - EXP_SCOPE[2]) % DEVIDER[3]) / DEVIDER[3];
  else if (doneCount < EXP_SCOPE[4])
    exp = ((doneCount - EXP_SCOPE[3]) % DEVIDER[4]) / DEVIDER[4];
  else if (doneCount < EXP_SCOPE[5])
    exp = ((doneCount - EXP_SCOPE[4]) % DEVIDER[5]) / DEVIDER[5];
  else
    exp = ((doneCount - EXP_SCOPE[5]) % DEVIDER[6]) / DEVIDER[6];

  return (exp * 100).toFixed(1);
}

const getLevel = (doneCount) => {
  let level;

  if (doneCount < EXP_SCOPE[0])
    level = Math.floor(doneCount / DEVIDER[0]) + 1;
  else if (doneCount < EXP_SCOPE[1])
    level = Math.floor((doneCount - EXP_SCOPE[0]) / DEVIDER[1]) + 4;
  else if (doneCount < EXP_SCOPE[2])
    level = Math.floor((doneCount - EXP_SCOPE[1]) / DEVIDER[2]) + 9;
  else if (doneCount < EXP_SCOPE[3])
    level = Math.floor((doneCount - EXP_SCOPE[2]) / DEVIDER[3]) + 12;
  else if (doneCount < EXP_SCOPE[5])
    level = Math.floor((doneCount - EXP_SCOPE[3]) / DEVIDER[4]) + 20;
  else
    level = Math.floor((doneCount - EXP_SCOPE[5]) / DEVIDER[5]) + 27;

  return level;
}

name.subscribe(value => localStorage.setItem('name', value));

level.subscribe(value => {
  localStorage.setItem('level', value);
  status.set(getWhaleStatus(value));
});

exp.subscribe(value => localStorage.setItem('exp', value));

todoList.subscribe(value => localStorage.setItem('todoList', JSON.stringify(value)));

doneCount.subscribe(value => {
  localStorage.setItem('sumCount', value);
  exp.set(getExp(value));
  level.set(getLevel(value, exp));
});
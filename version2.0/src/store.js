import { writable } from 'svelte/store';

export const name = writable(localStorage.getItem('name'));
export const level = writable(localStorage.getItem('level'));
export const exp = writable(localStorage.getItem('exp'));
export const todoList = writable(localStorage.getItem('todoList'));
export const doneCount = writable(localStorage.getItem('sumCount'));

name.subscribe(value => localStorage.setItem('name', value));
level.subscribe(value => localStorage.setItem('level', value));
exp.subscribe(value => localStorage.setItem('exp', value));
todoList.subscribe(value => localStorage.setItem('todoList', value));
doneCount.subscribe(value => localStorage.setItem('sumCount', value));
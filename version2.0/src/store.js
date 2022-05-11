import { readable } from 'svelte/store';

export const name = readable(localStorage.getItem('name'));

export const level = readable(localStorage.getItem('level'));

export const exp = readable(localStorage.getItem('exp'));

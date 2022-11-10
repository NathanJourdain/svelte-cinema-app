import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const bookmarks = writable(
  (browser && JSON.parse(localStorage.getItem("bookmarks"))) || []
);

bookmarks.subscribe((val) => browser && (localStorage.bookmarks = JSON.stringify(val)));


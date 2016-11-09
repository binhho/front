import {Injectable} from '@angular/core';

export class Storage {
	get(key : string){
		return window.localStorage.getItem(key);
	}
	set(key : string, value : any){
		return window.localStorage.setItem(key, value);
	}
	destroy(key : string){
		return window.localStorage.removeItem(key);
  }
  
  static _() {
    return new Storage();
  }
}

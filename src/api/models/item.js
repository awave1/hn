import { parse as urlParse } from 'url';

class Item {
  constructor(id, type, time, by, url) {
    this.id = id;
    this.type = type;
    this.time = time;
    this.by = by;
    this.url = url;
    this.host = !!url ? urlParse(this.url).host : '';

    this.title = '';
    this.text = '';
    this.parent = -1;
    this.kids = [];
    this.score = 0;

    this.poll = -1;
    this.parts = [];

    this.deleted = false;
    this.dead = false;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setText(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  setParent(parent) {
    this.parent = parent;
  }

  setKids(kids) {
    this.kids = kids;
  }

  addKid(kid) {
    this.kids.push(kid);
  }

  addKids(kids) {
    this.kids.push(...kids);
  }

  getKids() {
    return this.kids;
  }

  setScore(score) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }

  deleted(deleted) {
    this.deleted = deleted;
  }

  isDeleted() {
    return this.deleted;
  }
}

const since = (date) => {
  const seconds = Math.floor((new Date().getTime() / 1000) - date);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + 'y';
  }
  
  interval = Math.floor(seconds / 2592000);
  if (interval > 1){ 
    return interval + 'm';
  }
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + 'd';
  }
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + 'h';
  }
  
  interval = Math.floor(seconds / 60);
  if (interval > 1) { 
    return interval + 'm';
  }
  
  return Math.floor(seconds) + 's';
}

class Story extends Item {
  constructor(resp) {
    const { id, by, kids, score, time, title, url, descendants } = resp;
    super(id, 'story', time, by, url);

    this.setTitle(title);
    this.setScore(score);
    this.setKids(kids);
    this.comments = descendants;
    this.since = since(time);
  }
}

export {
  Story,
  Comment,
};
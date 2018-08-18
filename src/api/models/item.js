class Item {
  constructor(id, type, time, by, url) {
    this.id = id;
    this.type = type;
    this.time = time;
    this.by = by;
    this.url = url;

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

class Story extends Item {
  constructor(resp) {
    const { id, by, kids, score, time, title, url } = resp;
    super(id, 'story', time, by, url);

    this.setTitle(title);
    this.setScore(score);
    this.setKids(kids);
  }
}

export {
  Story,
  Comment,
};
// TODO: write your code here
export default class Team {
    constructor(){
        this.members = new Set();
    }

    add(char) {
        if (this.members.has(char)){
          throw new Error ("объект уже существует")
        } else {
          this.members.add(char);
        }
    }

    addAll(...theChars) {
        theChars.forEach(char => this.members.add(char))
    }

    toArray() {
        return  Array.from(this.members);
    }
}

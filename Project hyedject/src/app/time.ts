export class Time {
  hours: number;
  mins: number;
  secs: number;
  ms: number;

  constructor(hours: number, mins: number, secs: number, ms: number) {
    if (ms >= 1000) {
      this.ms = ms % 1000;
      secs += Math.ceil(ms / 1000);
    } else {
      this.ms = ms;
    }
    if (secs >= 60) {
      this.secs = secs % 60;
      mins += Math.ceil(secs / 60);
    } else {
      this.secs = secs;
    }
    if (mins >= 60) {
      this.mins = mins % 60;
      hours += Math.ceil(mins / 60);
    } else {
      this.mins = mins;
    }
    this.hours = hours;
  }
  getHours() {
    return this.hours;
  }
  getMins() {
    return this.mins;
  }
  getSecs() {
    return this.secs;
  }
  getMs() {
    return this.ms;
  }
  print() {
    const str = this.hours + " h " + this.mins + " min " + this.secs + " sec";
    return str;
  }
}

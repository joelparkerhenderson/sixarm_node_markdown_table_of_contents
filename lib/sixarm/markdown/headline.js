class Headline {
  
  constructor(text = null, level = null, anchor = null, link = null) {
    this.text = text;
    this.level = level;
    this.link = link;
    this.anchor = anchor;

    if (this.text == null) {
      this.text = this.defaultText();
    }

    if (this.level == null) {
      this.level = this.defaultLevel();
    }

    if (this.link == null) {
      this.link = this.defaultLink();
    }

    if (this.anchor == null) {
      this.anchor = this.defaultAnchor();
    }

  }

  defaultText() {
    return "Headline";
  }

  defaultLevel() {
    return 1;
  }

  defaultLink() {
    return "[" + this.text + "]" + "(#" + this.anchor + ")";
  }

  defaultAnchor() {
    return this.constructor.textToAnchor(this.text);
  }

  static parseLine(line) {
    let level = Headline.parseLineLevel(line);
    let text = Headline.trimLine(line);
    // TODO Add parser for anchor
    // TODO Add parser for Unicode normalization
    return new Headline(text, level);
  }

  static parseLineLevel(line) {
    var m = line.match(/^\s*([#=]+)/);
    return ((m == null || m.length == 0) ? null : m[0].length);
  }

  static trimLine(line) {
    return line.replace(/^\s*[#=]+\s+/, "").replace(/\s+[#=]+\s*$/, "");
  }

  static textToAnchor(text) {
    return text.trim().toLowerCase().replace(/\W+/g, "-");
  }

}

module.exports = Headline;
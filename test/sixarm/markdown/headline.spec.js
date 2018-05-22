let expect = require('chai').expect;
let Headline = require.main.require('lib/sixarm/markdown/headline');

describe("Headline", () => {
  
  describe("defaultText", () => {
    it("return the headline default text, which is \"Headline\"", () => {
      let headline = new Headline();
      expect(headline.defaultText()).to.be.equal("Headline");
    });
  });

  describe("defaultLevel", () => {
    it("return the headline default level, which is 1", () => {
      let headline = new Headline();
      expect(headline.defaultLevel()).to.be.equal(1);
    });
  });

  describe("defaultLink", () => {
    it("return the headline default link, which is a line of markdown with th etext and anchor", () => {
      let headline = new Headline();
      headline.text = "alpha"
      headline.anchor = "bravo"
      expect(headline.defaultLink()).to.be.equal("[alpha](#bravo)");
    });
  });

  describe("defaultAnchor", () => {
    it("return the headline default anchor", () => {
      //TODO
    });
  });

  describe("parseLine", () => {
    it("parse a line of text to a hew headline", () => {
      let line = "### Alpha ###"
      let headline = Headline.parseLine(line)
      expect(headline.text).to.be.equal("Alpha");
      expect(headline.level).to.be.equal(3);
    });
  });
  
  describe("parseLineLevel", () => {
    it("calculate the headline level, i.e. count the leading hash characters", () => {
      let line = "### Alpha ###"
      expect(Headline.parseLineLevel(line)).to.be.equal(3);
    });
  });
  
  describe("trimLine", () => {
    it("trim any leading/trailing whitespace and/or hash character chunk", () => {
      let line = "  ###  Alpha  ###  "
      expect(Headline.trimLine(line)).to.be.equal("Alpha");
    });
  });

  describe("textToAnchor", () => {
    it("convert text to an anchor format, which is lowercase and uses dash separators", () => {
      let line = "Alpha Bravo Charlie"
      expect(Headline.textToAnchor(line)).to.be.equal("alpha-bravo-charlie");
    });
  });
  
});

const { expect } = require('chai');
var path = require('path');

describe('Mocha', function () {
  it('should execute properly',function (){
    expect(true).to.be.true;
  })
})
describe('meets expectations', function (){
  const fs = require('fs');
  context('Validate instructions 01', function () {
    describe('.gitignore', function () {
      it('file should exist', function () {
        return fs.access(__dirname + '/../.gitignore', fs.F_OK, (err) => {
          const actual =  err ? false : true;
          expect(actual).to.be.true;
        });
      });
      it('file should contain node_modules', function () {
        let actual;
        fs.readFile(__dirname + '/../.gitignore', function (err, data) {
          if (err) throw err;
          actual = data.includes('node_modules');
          expect(actual).to.be.true;
        });
      });
    })
  
  describe('README.md', function () {
    it('file should exist', function () {
      return fs.access(__dirname + '/../README.md', fs.F_OK, (err) => {
        const actual =  err ? false : true;
        expect(actual).to.be.true;
      });
    });
  })
  describe('Express Application Generator', function () {
    it('should have an app.js file', function () {
      return fs.access(__dirname + '/../app.js', fs.F_OK, (err) => {
        const actual =  err ? false : true;
        expect(actual).to.be.true;
      });
    });
    it('should have an bin folder', function () {
      return fs.access(__dirname + '/../bin', fs.F_OK, (err) => {
        const actual =  err ? false : true;
        expect(actual).to.be.true;
      });
    });
    it('should have a www file in the bin folder', function () {
      return fs.access(__dirname + '/../bin/www', fs.F_OK, (err) => {
        const actual =  err ? false : true;
        expect(actual).to.be.true;
      });
    });
  })
});
  context('Validate instructions 02', function () {
    
  });

  context('Validate instructions 03', function () {
    
  });
  context('Validate instructions 04', function () {
    
  });

  context('Validate instructions 05', function () {
    
  });
  context('Validate instructions 06', function () {
    
  });
  context('Validate instructions 07', function () {
    
  });
  context('Validate instructions 08', function () {
    
  });
  context('Validate instructions 09', function () {
    
  });
  context('Validate instructions 10', function () {
    
  });
  context('Validate instructions 11', function () {
    
  });
  context('Validate instructions 12', function () {
    
  });
  context('Validate instructions 13', function () {
    
  });
  context('Validate instructions 14', function () {
    
  });
});

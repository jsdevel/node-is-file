'use strict';

describe('is-file', function(){
  var sut = require('..');

  describe('async', function(){
    it('should send back an error when the path does not exist', function(done){
      sut('asdasdf', function(err, bool){
        err.should.be.an.instanceOf(Error);
        done();
      });
    });

    it('should send back false for directories', function(done){
      sut(__dirname, function(err, bool){
        bool.should.be.false;
        done();
      });
    });

    it('should send back true for files', function(done){
      sut(__filename, function(err, bool){
        bool.should.be.true;
        done();
      });
    });
  });

  describe('sync', function(){
    it('may be invoked with .sync()', function(){
      sut.sync(__filename).should.be.true;
    });

    it('should return false for directories', function(){
      sut(__dirname).should.be.false;
    });

    it('should return true for files', function(){
      sut(__filename).should.be.true;
    });

    it('should send back false when the path does not exist', function(){
      sut('asdasdf').should.be.false;
    });
  });
});

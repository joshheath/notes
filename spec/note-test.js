(function(exports){
  function testNoteDefaultsToFavouriteLanguage(){
    var text = "My favourite language is JavaScript"
    var note = new Note(text);
    assert.isTrue(note.showNote() === text)
  };
  testNoteDefaultsToFavouriteLanguage();
})(this);

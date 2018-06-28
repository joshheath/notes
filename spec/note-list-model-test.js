(function(exports){
  function testStoreArrayOfNoteModels(){
    var noteList = new NoteList();
    noteList.addNote('note');
    assert.isIncluded('note', noteList.viewNotes())
  };
  testStoreArrayOfNoteModels();
})(this);

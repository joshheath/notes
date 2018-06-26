(function(exports){
  function testStoreArrayOfNoteModels(){
    var note = new Note("text");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert.isIncluded(note, noteList.viewNotes())
  };
  testStoreArrayOfNoteModels();
})(this);

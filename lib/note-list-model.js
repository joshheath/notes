(function(exports){
  function NoteList(){
    this.noteArray = []
  };

  exports.NoteList = NoteList;
})(this);

  NoteList.prototype.addNote = function(note){
    this.noteArray.push(note)
  };

  NoteList.prototype.viewNotes = function () {
    return this.noteArray
  };

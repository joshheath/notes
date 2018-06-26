(function(exports){
  function Note(text){
    this.text = text
  }
  Note.prototype.showNote = function() {
    return this.text
  };

  exports.Note = Note;
})(this);

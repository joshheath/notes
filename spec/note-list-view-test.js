function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("First note");
  noteList.addNote("Second note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML().includes("<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>"));
};

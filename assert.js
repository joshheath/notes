var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  isIncluded: function(note, noteList) {
    if (!noteList.includes(note)){
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

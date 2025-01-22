document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.getElementById('notes-list');
    const noteEditor = document.getElementById('note-editor');
    const addNoteBtn = document.getElementById('add-note-btn');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let activeNote = null;

    function renderNotes() {
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note.title || 'New Note';
            li.addEventListener('click', () => {
                activeNote = index;
                noteEditor.value = note.content;
            });
            notesList.appendChild(li);
        });
    }

    function saveNote() {
        if (activeNote !== null) {
            notes[activeNote].content = noteEditor.value;
            notes[activeNote].title = noteEditor.value.split('\n')[0] || 'New Note';
            localStorage.setItem('notes', JSON.stringify(notes));
            renderNotes();
        }
    }

    addNoteBtn.addEventListener('click', () => {
        notes.push({ title: 'New Note', content: '' });
        activeNote = notes.length - 1;
        noteEditor.value = '';
        renderNotes();
    });

    noteEditor.addEventListener('input', saveNote);

    renderNotes();
});
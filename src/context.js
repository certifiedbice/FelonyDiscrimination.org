import React from 'react'

const Context = React.createContext ( {

    folders: [],

    notes: [],
    
    selectFolderHighlight: '',

    error: '',
    
    addNote: () => {},
    
    deleteNote: () => {},
    
    addFolder: () => {},
    
    folderToHighlight: () => {},
    
} )

export default Context
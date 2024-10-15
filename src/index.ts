import {
    FileAction,
    registerFileAction,
} from '@nextcloud/files';
import icon from './static/icon.svg';
import FolderAPI from "./api";
import registerChangeFolderColorAction from "./fileAction";
import {ColorField, FormModal, TextField} from "./forms";



const modal = new FormModal([
    new ColorField('color', "#00679e")
], 'form-modal', 'Elige un color');


const api = new FolderAPI()

registerChangeFolderColorAction(modal, api)

const observer = new MutationObserver((mutationsList, observer) => {
    const rows = document.querySelectorAll('.files-list__row');
    rows.forEach(async row => {
        const fileId = row.getAttribute('data-cy-files-list-row-fileid');
        if(!fileId) return;
        if(api.cache[fileId] === false) return;
        if(api.cache[fileId]) api.changeFolderColorInHtml(api.cache[fileId], fileId )
        else await api.getFolderColorOf(fileId)
    });
});

// Start observing the entire document for changes in the DOM
observer.observe(document, { childList: true, subtree: true });
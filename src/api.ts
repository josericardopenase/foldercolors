import axios from "axios";

export default class FolderAPI{
    public readonly cache : any = {}
    constructor() {
    }

    async saveFolderColorOf(folderId : string, selectedColor : string) {
        const response = await axios.post('/apps/foldercolor/saveColor', {
            folderId: folderId,
            color: selectedColor
        })
        this.changeFolderColorInHtml(selectedColor, folderId)
        this.cache[folderId] = selectedColor
    }

    async getFolderColorOf(folderId : string) {
        const response = await axios.get('/apps/foldercolor/getColor', {
            params: {folderId}
        })
        const color = response.data.color;
        this.cache[folderId] = color
        if(color) this.changeFolderColorInHtml(color, folderId)
    }

    changeFolderColorInHtml(color : string, folderId : string) {
        const folderRow = document.querySelector(`tr[data-cy-files-list-row-fileid="${folderId}"]`);
        if (!folderRow) return;
        const svgIcon = folderRow.querySelector('.folder-icon svg');
        if (svgIcon) svgIcon.setAttribute('fill', color);
    }
}

import {FileAction, registerFileAction} from "@nextcloud/files";
import icon from "./static/icon.svg";
import FolderAPI from "./api";
import {FormModal} from "./forms";

export default function registerChangeFolderColorAction(modal : FormModal, api: FolderAPI){
    registerFileAction(new FileAction({
        id: 'change-folder-color', // Identificador único de la acción
        displayName: (files, view) => {
            return 'Cambiar color'; // Nombre mostrado en el menú
        },
        enabled: (files, view) => {
            return true;
        },
        exec: async (file, view, dir) => {
            modal.show()
            modal.handleSubmit(async (values) => {
                if(file.mime !== "httpd/unix-directory") return false;
                let result = values.color
                if(!result) return false;
                if(!file.fileid) return false;
                await api.saveFolderColorOf(file.fileid.toString(), result ?? "")
                return true;
            })

            return true;
        },
        iconSvgInline: (files, view) => {
            return icon;
        },
        order: 200,
        inline: (file, view) => {
            return false;
        },
        title: (files, view) => {
            return 'Cambiar color'; // Título como tooltip
        },
    }));
}

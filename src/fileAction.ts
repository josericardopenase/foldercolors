import { FileAction, FileType, registerFileAction } from '@nextcloud/files';
import icon from './static/icon.svg';
import FolderAPI from './api';
import { FormModal } from './forms';

function isFolder(file: { mime?: string; type?: FileType }): boolean {
    return file.type === FileType.Folder || file.mime === 'httpd/unix-directory';
}

export default function registerChangeFolderColorAction(modal: FormModal, api: FolderAPI) {
    registerFileAction(new FileAction({
        id: 'change-folder-color',
        displayName: () => 'Cambiar color',
        enabled: (files) => files.length === 1 && isFolder(files[0]),
        exec: async (file) => {
            if (!isFolder(file)) {
                return false;
            }
            modal.show();
            modal.handleSubmit(async (values) => {
                const result = values.color;
                if (!result || !file.fileid) {
                    return false;
                }
                await api.saveFolderColorOf(file.fileid.toString(), result);
                return true;
            });

            return null;
        },
        iconSvgInline: () => icon,
        order: 200,
        inline: () => false,
        title: () => 'Cambiar color',
    }));
}

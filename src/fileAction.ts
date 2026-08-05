import { FileType, registerFileAction, type IFileAction } from '@nextcloud/files';
import icon from './static/icon.svg';
import FolderAPI from './api';
import { FormModal } from './forms';

function isFolder(node: { type?: string; mime?: string }): boolean {
	return node.type === FileType.Folder || node.mime === 'httpd/unix-directory';
}

function getNodeId(node: { id?: string; fileid?: number }): string | undefined {
	return node.id ?? node.fileid?.toString();
}

export default function registerChangeFolderColorAction(modal: FormModal, api: FolderAPI) {
	const action: IFileAction = {
		id: 'change-folder-color',
		displayName: () => 'Cambiar color',
		enabled: ({ nodes }) => nodes.length === 1 && isFolder(nodes[0]),
		exec: async ({ nodes }) => {
			const node = nodes[0];
			if (!isFolder(node)) {
				return false;
			}

			modal.show();
			modal.handleSubmit(async (values) => {
				const result = values.color;
				const folderId = getNodeId(node);
				if (!result || !folderId) {
					return false;
				}
				await api.saveFolderColorOf(folderId, result);
				return true;
			});

			return null;
		},
		iconSvgInline: () => icon,
		order: 200,
		inline: () => false,
		title: () => 'Cambiar color',
	};

	registerFileAction(action);
}

<?php

declare(strict_types=1);

namespace OCA\FolderColor\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IDBConnection;
use OCP\IRequest;

class ColorController extends Controller {
	public function __construct(
		string $AppName,
		IRequest $request,
		private IDBConnection $db,
	) {
		parent::__construct($AppName, $request);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function saveColor(string $folderId, string $color): JSONResponse {
		$query = $this->db->prepare(
			'INSERT INTO `*PREFIX*folder_colors` (`folder_id`, `color`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `color` = ?',
		);
		$query->execute([$folderId, $color, $color]);

		return new JSONResponse(['status' => 'success']);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function getColor(string $folderId): JSONResponse {
		$query = $this->db->prepare(
			'SELECT `color` FROM `*PREFIX*folder_colors` WHERE `folder_id` = ?',
		);
		$query->execute([$folderId]);
		$color = $query->fetchColumn();

		return new JSONResponse(['color' => $color ?: null]);
	}
}

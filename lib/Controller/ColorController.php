<?php

namespace OCA\FolderColor\Controller;

use OCP\AppFramework\Controller;
use OCP\IRequest;
use OCP\IDBConnection;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Annotations\NoAdminRequired;
use OCP\AppFramework\Annotations\NoCSRFRequired;

class ColorController extends Controller {

    private $db;

    public function __construct($AppName, IRequest $request, IDBConnection $db) {
        parent::__construct($AppName, $request);
        $this->db = $db;
    }

    /**
     * Guardar el color de una carpeta de manera segura
     *
     * @NoAdminRequired
     * @NoCSRFRequired
     * @param string $folderId
     * @param string $color
     * @return JSONResponse
     */
    public function saveColor($folderId, $color): JSONResponse {
        $query = $this->db->prepare('INSERT INTO `*PREFIX*folder_colors` (`folder_id`, `color`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `color` = ?');
        $query->execute([$folderId, $color, $color]);
        return new JSONResponse(['status' => 'success']);
    }

    /**
     * Obtener el color de una carpeta
     * @QueryParam(name="folderId", type="string")
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return JSONResponse
     */
    public function getColor($folderId): JSONResponse {
        $query = $this->db->prepare('SELECT `color` FROM `*PREFIX*folder_colors` WHERE `folder_id` = ?');
        $query->execute([$folderId]);
        $color = $query->fetchColumn();
        return new JSONResponse(['color' => $color]);
    }
}

<?php


namespace OCA\FolderColor\AppInfo;

use OCP\AppFramework\App;

class Application extends App
{
    public function __construct(array $urlParams = [])
    {
        parent::__construct('foldercolor');
    }
}

\OCP\Util::addScript('foldercolor', 'foldercolor');
\OCP\Util::addStyle('foldercolor', 'foldercolor');

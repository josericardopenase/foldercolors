<?php

return [
    'routes' => [
        [
            'name' => 'color#get_Color',  // Nombre único para la ruta
            'url' => '/getColor',  // Ruta para obtener el color
            'verb' => 'GET',  // Método HTTP GET
            'controller' => 'FolderColorController',  // Nombre del controlador
            'action' => 'getColor',  // Método en el controlador
        ],
        [
            'name' => 'color#save_color',  // Nombre único para la ruta
            'url' => '/saveColor',  // Ruta para guardar el color
            'verb' => 'POST',  // Método HTTP POST
            'controller' => 'FolderColorController',  // Nombre del controlador
            'action' => 'saveColor',  // Método en el controlador
        ],
    ],
];

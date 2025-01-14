<?php

return [
    'name'     => env('APP_NAME_CN', '清风CMS'),
    'manifest' => [
        'name'             => env('APP_NAME_CN', '清风CMS'),
        'short_name'       => env('APP_NAME_CN', '清风CMS'),
        'start_url'        => '/',
        'background_color' => '#ffffff',
        'theme_color'      => '#000000',
        'display'          => 'standalone',
        'orientation'      => 'any',
        'status_bar'       => 'black',
        'icons'            => [
            '72x72'   => [
                'path'    => '/images/icons/icon-72x72.png',
                'purpose' => 'any maskable',
            ],
            '96x96'   => [
                'path'    => '/images/icons/icon-96x96.png',
                'purpose' => 'any maskable',
            ],
            '128x128' => [
                'path'    => '/images/icons/icon-128x128.png',
                'purpose' => 'any maskable',
            ],
            '144x144' => [
                'path'    => '/images/icons/icon-144x144.png',
                'purpose' => 'any maskable',
            ],
            '152x152' => [
                'path'    => '/images/icons/icon-152x152.png',
                'purpose' => 'any maskable',
            ],
            '192x192' => [
                'path'    => '/images/icons/icon-192x192.png',
                'purpose' => 'any maskable',
            ],
            '384x384' => [
                'path'    => '/images/icons/icon-384x384.png',
                'purpose' => 'any maskable',
            ],
            '512x512' => [
                'path'    => '/images/icons/icon-512x512.png',
                'purpose' => 'any maskable',
            ],
        ],
        'splash'           => [
            '640x1136'  => '/images/icons/splash-640x1136.png',
            '750x1334'  => '/images/icons/splash-750x1334.png',
            '828x1792'  => '/images/icons/splash-828x1792.png',
            '1125x2436' => '/images/icons/splash-1125x2436.png',
            '1242x2208' => '/images/icons/splash-1242x2208.png',
            '1242x2688' => '/images/icons/splash-1242x2688.png',
            '1536x2048' => '/images/icons/splash-1536x2048.png',
            '1668x2224' => '/images/icons/splash-1668x2224.png',
            '1668x2388' => '/images/icons/splash-1668x2388.png',
            '2048x2732' => '/images/icons/splash-2048x2732.png',
        ],
        'shortcuts'        => [
            [
                'name'        => '搜索内容',
                'description' => '博客，视频，哈希表的知识搜索',
                'url'         => '/search',
                'icons'       => [
                    "src"     => "/images/icons/icon-72x72.png",
                    "purpose" => "any maskable",
                ],
            ],
            [
                'name'        => '发布博客',
                'description' => '发布博客，和大家一起交流',
                'url'         => '/article/create',
            ],
        ],
        'custom'           => [],
    ],
];

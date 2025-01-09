<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

        @inertiaHead


        <!-- Custom Meta Tags from the Server -->
        @if(isset($page['props']['post']))
            <title>{{ $page['props']['post']['title'] }}</title>
            <meta name="description" content="{{ $page['props']['post']['description'] }}">

            <!-- Open Graph / Facebook -->
            <meta property="og:site_name" content="Pakistan Today" />
            <meta property="og:type" content="website">
            <meta property="og:title" content="{{ $page['props']['post']['title'] }}">
            <meta property="og:description" content="{{ $page['props']['post']['description'] }}">
            @if($page['props']['post']['image'])
                <meta property="og:image" content="{{ $page['props']['post']['image'] }}">
            @endif
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="627" />
            <meta property="og:type" content="article" />
            <meta
                property="og:url"
                content="{{route('home')}}"
            />
            <!-- Twitter -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="{{ $page['props']['post']['title'] }}">
            <meta name="twitter:description" content="{{ $page['props']['post']['description'] }}">
            @if($page['props']['post']['image'])
            <meta name="twitter:image" content="{{ $page['props']['post']['image'] }}">
            @endif
            <meta name="robots" content="index, follow" />
            <meta name="author" content="{{$page['props']['post']['user']['name']}}" />


            <meta
                name="google-site-verification"
                content="{{env('VITE_GOOGLE_VERIFICATION_TOKEN')}}"
                />

            <meta
                name="keywords"
                content="{{ "Pakistan, Today".  $page['props']['post']['title'] .',' .$page['props']['post']['category']['name'] }}"
            />

            <meta
                property="article:published_time"
                content="{{ $page['props']['post']['created_at'] }}"
            />
            <meta
                property="article:modified_time"
                content="{{ $page['props']['post']['updated_at'] }}"
            />
            <meta
                property="article:author"
                content="{{ $page['props']['post']['user']['name'] }}"
            />
            <meta
                property="article:section"
                content="{{$page['props']['post']['category']['name']}}"
            />
            <meta
                property="article:description"
                content="{{$page['props']['post']['description']}}"
            />
        @else
            <title>Home</title>
            <link rel="icon" href="{{asset('favicon')}}" type="image/x-icon" />
            <link rel="shortcut icon" href="{{asset('favicon')}}" type="image/x-icon" />
            <meta name="description"
                  content="Pakistan Today: The ultimate hub for entrepreneurs, mentors, and investors to connect, exchange ideas, and stay ahead with the latest industry trends."/>
            <meta
                name="keywords"
                content="Pakistan, Today, Pakistan Today, Pakistan Today 24, PakistanToday, PakistanToday24, Today24, Pakistan24, 24 news, Today 24 news"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="robots" content="index, follow"/>

            <meta property="og:site_name" content="Pakistan Today" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="{{route('home')}}" />
            <meta property="og:title" content="Pakistan Today" />
            <meta property="og:description" content="Pakistan Today: The ultimate hub for entrepreneurs, mentors, and investors to connect, exchange ideas, and stay ahead with the latest industry trends." />
            <meta property="og:image" content="{{asset('favicon')}}" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url"  content="{{route('home')}}" />
            <meta property="twitter:title" content="Pakistan Today" />
            <meta property="twitter:description" content="Pakistan Today: The ultimate hub for entrepreneurs, mentors, and investors to connect, exchange ideas, and stay ahead with the latest industry trends." />
            <meta property="twitter:image" content="{{asset('favicon')}}" />



            <meta
                name="google-site-verification"
                content="{{env('VITE_GOOGLE_VERIFICATION_TOKEN')}}"
            />
        @endif

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

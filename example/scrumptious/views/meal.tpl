<html>
    <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# {{ appNamespace }}: http://ogp.me/ns/fb/{{ appNamespace }}#">
        <meta property="fb:app_id" content="{{ appId }}" />
        <meta property="og:type"   content="{{ appNamespace }}:meal" />
        <meta property="og:url"    content="{{ meal.url }}" />
        <meta property="og:title"  content="{{ meal.title }}" />
        <meta property="og:image"  content="{{ meal.imageUrl }}" />
    </head>
    <body>
        {{ meal.title }}
    </body>
</html>

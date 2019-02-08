var app = new Framework7 ({
    root: '#app',
    routes : [
        {
            path: '/',
            url: 'index.html'
        },

        {
            path: '/yesterday/',
            url: 'pages/yesterday.html',
        }
    ]
})

var mainView = app.views.create('.view-main');
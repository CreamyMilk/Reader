new Vue({
    el: '#app',
    data() {
        return {
            showModal: false,
            showMap: false,
            thumbnails: [{
                index: 1,
                bimage: "pages/2-thumb.jpg",
                aimage: "pages/3-thumb.jpg",
                bclass: "page-2",
                aclass: "page-3",
            },
            {
                index: 2,
                bimage: "pages/4-thumb.jpg",
                aimage: "pages/5-thumb.jpg",
                bclass: "page-4",
                aclass: "page-5",
            },
            {
                index: 3,
                bimage: "pages/6-thumb.jpg",
                aimage: "pages/7-thumb.jpg",
                bclass: "page-6",
                aclass: "page-7",
            },
            {
                index: 4,
                bimage: "pages/8-thumb.jpg",
                aimage: "pages/9-thumb.jpg",
                bclass: "page-8",
                aclass: "page-9",
            },
            {
                index: 5,
                bimage: "pages/10-thumb.jpg",
                aimage: "pages/11-thumb.jpg",
                bclass: "page-10",
                aclass: "page-11",
            },
            {
                index: 6,
                bimage: "pages/1-thumb.jpg",
                aimage: "pages/2-thumb.jpg",
                bclass: "page-1",
                aclass: "page-2",
            }]
        }
    }
})
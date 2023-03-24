
// NOW I CLICK ALBUM POSTER  TO GET CURRENT SONG ID 
$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    // console.log(dataSwitchId);

    // // and now i use aplayer switch function see
    ap.list.switch(dataSwitchId); // this is static id but i use dynamic

    // //aplayer function 
    // // when i click any song to play 
    ap.play();

    // // click to slideup player see
    $("#aplayer").addClass('showPlayer');
});


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Ignite - K-391',
            artist: 'Alan Walker',
            url: '../songs/Ignite - K-391 (Alan Walker).mp3.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273eaee7835ad1cd0c435edd7cf'
        },
        {
            name: 'Cartoon On On',
            artist: 'NCS',
            url: '../songs/Cartoon - On _ On.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b2732a3bbdee5441cb8f7a7bdfee'
        },
        {
            name: 'DJ Snake ft.Justin Bieber - Let Me Love You',
            artist: 'DJ Snake ft. Justin Bieber',
            url: '../songs/DJ Snake ft. Justin Bieber - Let Me Love You.mp3.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc'
        },
        {
            name: 'Sia Cheap Thrills',
            artist: 'Sia',
            url: '../songs/Sia  Cheap Thrills.mp3.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273b0a7eef9bfac694187348008'
        },
        {
            name: 'Sugar & Brownies-Dharia',
            artist: 'Dharia',
            url: '../songs/Sugar & Brownies-Dharia.mp3.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b27374d7f07e7a316eca66852d46'
        },
        {
            name: 'On My Way',
            artist: 'Alan Walkar',
            url: '../songs/On My Way.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc'
        },
        {
            name: 'Play Date',
            artist: 'Artist Name',
            url: '../songs/Play Date.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273dfb02c9fa49a510f1766fee3'
        },
        {
            name: 'Yummy',
            artist: 'Justin Bieber',
            url: '../songs/Yummy.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273ccc832e9e43f2cec70a317b5'
        },
    ]
});
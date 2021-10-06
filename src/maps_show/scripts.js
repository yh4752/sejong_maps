var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapCenter = new kakao.maps.LatLng(37.55180968896947, 127.07364946575993),
    mapOption = { 
        center: mapCenter, // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var iwContent = '<div style="padding:5px;">컨테이너 어딨더라..</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.54827216453042, 127.07315124829312), //인포윈도우 표시 위치입니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var window = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition, 
    content : iwContent,
   
});

var iwContent1 = '<div style="padding:5px;">정문에서 쪽문으로!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition1 = new kakao.maps.LatLng(37.549373716042595, 127.07448162395171), //인포윈도우 표시 위치입니다
    iwRemoveable1 = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var window1 = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition1, 
    content : iwContent1,
   
});
var iwContent2 = '<div style="padding:5px;">과방 가고싶을 때ㅜㅜ</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition2 = new kakao.maps.LatLng(37.55149171144117, 127.07484103995286), //인포윈도우 표시 위치입니다
    iwRemoveable2 = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var window2 = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition2, 
    content : iwContent2,
   
});
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {   content: '<div class="box">0광개토관<br><img src="imgs/kwang.jpg"></div>', 
        latlng: new kakao.maps.LatLng(37.55031012454832, 127.07313881055019)
    },
    {
        content: '<div class="box">1군자관<br><img src="imgs/kun.jpg"></div>', 
        latlng: new kakao.maps.LatLng(37.54971720784541, 127.07369548171495)
    },
    {
        content: '<div class="box">2대양AI센터<br><img src="imgs/sen.jpg"></div>', 
        latlng: new kakao.maps.LatLng(37.55089621518929, 127.07565393051127)
    },
    {
        content: '<div class="box">3대양홀<br><img src="imgs/hall.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.548598668284114, 127.07448175776558)
    },
    {
        content: '<div class="box">4동천관<br><img src="imgs/dong.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.55175102648029, 127.07420611055026)
    },
    {
        content: '<div class="box">5세종관<br><img src="imgs/sj.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.550082770591835, 127.07449463938555)
    },
    {
        content: '<div class="box">6애지헌<br><img src="imgs/ae.png"></div>',
        latlng: new kakao.maps.LatLng(37.550933081063924, 127.07392206822097)
    },
    {
        content: '<div class="box">7영실관<br><img src="imgs/yeong.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.55234033610852, 127.073327645218)
    },
    {
        content: '<div class="box">8용덕관<br><img src="imgs/yong.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.55131963458407, 127.07335983172395)
    },
    {
        content: '<div class="box">9우정당<br><img src="imgs/yu.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.551838492939204, 127.07471166497393)
    },
    {
        content: '<div class="box">10율곡관<img src="imgs/yul.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.55181248023683, 127.0740334849386)
    },
    { 
        content: '<div class="box">11진관홀<img src="imgs/jin.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.55092281551573, 127.07333691239755)
    },
    {
        content: '<div class="box">12집현관<img src="imgs/jip.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.54898343376276, 127.07377679471384)
    },
    {
        content: '<div class="box">13충무관<img src="imgs/chung.jpg"></div>',
        latlng: new kakao.maps.LatLng(37.55225823763522, 127.07405574442465)
    }
    ,
    {
        content: '<div class="box">14학생회관<img src="imgs/sc.jpg"></div>',
    latlng: new kakao.maps.LatLng(37.549450666981315, 127.07509854914456)
    },   
    {
        content: '<div class="box">**Special코스 1: 쪽문~**<img src="imgs/door.png"></div>',
    latlng: new kakao.maps.LatLng(37.54966318493737, 127.0734752474031)
    },
    {
        content: '<div class="box">**Special코스 2: 캠퍼스타운~**<img src="imgs/campus.png"></div>',
    latlng: new kakao.maps.LatLng(37.548924441486506, 127.07322776036561)
    },
    {
        content: '<div class="box">**Special코스 3: 우정당 과방으로~**<img src="imgs/room.jpg"></div>',
    latlng: new kakao.maps.LatLng(37.55180421287339, 127.07476644263795)
    },
    {
     content: '<div class="box">**어서 와 세종대는 처음이지?^.^<img src="imgs/front.jpg"></div>',
    latlng: new kakao.maps.LatLng(37.54901837997851, 127.07522603075076) //정문
    }
];

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
        
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
var linePath1 = [
    new kakao.maps.LatLng(37.54901837997851, 127.07522603075076), //정문
    new kakao.maps.LatLng(37.54971720784541, 127.07369548171495), //군자관
    new kakao.maps.LatLng(37.54966318493737, 127.0734752474031) //쪽문
];

// 지도에 표시할 선을 생성합니다
var polyline1 = new kakao.maps.Polyline({
    path: linePath1, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#FFAE00', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 쪽문까지 가는 선을 표시합니다 
polyline1.setMap(map);  


var linePath2 = [
    new kakao.maps.LatLng(37.551100325556725, 127.07540176519774), //센
    new kakao.maps.LatLng(37.55158941488733, 127.07469366203172), //학정
    new kakao.maps.LatLng(37.55180421287339, 127.07476644263795) //과방
];

// 지도에 표시할 선을 생성합니다
var polyline2 = new kakao.maps.Polyline({
    path: linePath2, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#FFAE00', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 선을 표시합니다 
polyline2.setMap(map);  

var linePath3 = [
    new kakao.maps.LatLng(37.54860807877488, 127.07492436965416), //어대공출구
    new kakao.maps.LatLng(37.547929457743734, 127.07439342514157), 
    new kakao.maps.LatLng(37.5480891987544, 127.07294694243646),
    new kakao.maps.LatLng(37.54833092540971, 127.07319065046569),    
    new kakao.maps.LatLng(37.548924441486506, 127.07322776036561), //쪽문


];

// 지도에 표시할 선을 생성합니다
var polyline3 = new kakao.maps.Polyline({
    path: linePath3, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#FFAE00', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 선을 표시합니다 
polyline3.setMap(map);  

//지도위에 현재 로드뷰의 위치와, 각도를 표시하기 위한 map walker 아이콘 생성 클래스
function MapWalker(position){

    //커스텀 오버레이에 사용할 map walker 엘리먼트
    var content = document.createElement('div');
    var figure = document.createElement('div');
    var angleBack = document.createElement('div');

    //map walker를 구성하는 각 노드들의 class명을 지정 - style셋팅을 위해 필요
    content.className = 'MapWalker';
    figure.className = 'figure';
    angleBack.className = 'angleBack';

    content.appendChild(angleBack);
    content.appendChild(figure);

    //커스텀 오버레이 객체를 사용하여, map walker 아이콘을 생성
    var walker = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: 1
    });

    this.walker = walker;
    this.content = content;
}

//로드뷰의 pan(좌우 각도)값에 따라 map walker의 백그라운드 이미지를 변경 시키는 함수
//background로 사용할 sprite 이미지에 따라 계산 식은 달라 질 수 있음
MapWalker.prototype.setAngle = function(angle){

    var threshold = 22.5; //이미지가 변화되어야 되는(각도가 변해야되는) 임계 값
    for(var i=0; i<16; i++){ //각도에 따라 변화되는 앵글 이미지의 수가 16개
        if(angle > (threshold * i) && angle < (threshold * (i + 1))){
            //각도(pan)에 따라 아이콘의 class명을 변경
            var className = 'm' + i;
            this.content.className = this.content.className.split(' ')[0];
            this.content.className += (' ' + className);
            break;
        }
    }
};

//map walker의 위치를 변경시키는 함수
MapWalker.prototype.setPosition = function(position){
    this.walker.setPosition(position);
};

//map walker를 지도위에 올리는 함수
MapWalker.prototype.setMap = function(map){
    this.walker.setMap(map);
};
    // 로드뷰 도로를 지도위에 올린다.
map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

var roadviewContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div
var roadview = new kakao.maps.Roadview(roadviewContainer); // 로드뷰 객체
var roadviewClient = new kakao.maps.RoadviewClient(); // 좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

// 지도의 중심좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
roadviewClient.getNearestPanoId(mapCenter, 50, function(panoId) {
    roadview.setPanoId(panoId, mapCenter); // panoId와 중심좌표를 통해 로드뷰 실행
});

var mapWalker = null;

// 로드뷰의 초기화 되었을때 map walker를 생성한다.
kakao.maps.event.addListener(roadview, 'init', function() {

    // map walker를 생성한다. 생성시 지도의 중심좌표를 넘긴다.
    mapWalker = new MapWalker(mapCenter);
    mapWalker.setMap(map); // map walker를 지도에 설정한다.

    // 로드뷰가 초기화 된 후, 추가 이벤트를 등록한다.
    // 로드뷰를 상,하,좌,우,줌인,줌아웃을 할 경우 발생한다.
    // 로드뷰를 조작할때 발생하는 값을 받아 map walker의 상태를 변경해 준다.
    kakao.maps.event.addListener(roadview, 'viewpoint_changed', function(){

        // 이벤트가 발생할 때마다 로드뷰의 viewpoint값을 읽어, map walker에 반영
        var viewpoint = roadview.getViewpoint();
        mapWalker.setAngle(viewpoint.pan);

    });

    // 로드뷰내의 화살표나 점프를 하였을 경우 발생한다.
    // position값이 바뀔 때마다 map walker의 상태를 변경해 준다.
    kakao.maps.event.addListener(roadview, 'position_changed', function(){

        // 이벤트가 발생할 때마다 로드뷰의 position값을 읽어, map walker에 반영 
        var position = roadview.getPosition();
        mapWalker.setPosition(position);
        map.setCenter(position);

    });
});
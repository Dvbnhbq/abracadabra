function calc(e) {
    var g=function(b,a) {
        var d,c,e,f,g;e=b&2147483648; f=a&2147483648;d=b&1073741824;c=a&1073741824;g=(b&1073741823)+(a&107374182 3);return d&c?g^2147483648^e^f: d|c?g&1073741824?g^3221225472^e^f:g^1073741 824^e^f:g^e^f
    }

    ,k=function(b,a,d,c,e,f,h) {
        b=g(b,g(g(a&d|~a&c,e),h));return g(b<<f|b>>>32-f,a)}

    ,h=function(b,a,d,c,e,f,h) {
        b=g(b,g(g(a&c|d&~c,e),h));re turn g(b<<f|b>>>32-f,a)}

    ,l=function(b,a,c,d,e,f,h) {
        b=g(b,g(g(a^c^d,e),h)); return g(b<<f|b>>>32-f,a)}

    ,m=function(b,a,c,d,e,f,h) {
        b=g(b,g(g(c^(a|~d),e) ,h));return g(b<<f|b>>>32-f,a)}

    ,n=function(b) {
        var a="",c="",d;for(d=0;3>=d ;d++)c=b>>>8*d&255,c="0"+c.toString(16),a+=c.substr(c.length-2,2);return a }

    ,f=[],p,q,r,t,b,a,d,c;e=this.utf8_encode(e);f=function(b) {
        var a,c=b.lengt h;a=c+8;for(var d=16*((a-a%64)/64+1),e=Array(d-1),f=0,g=0;g<c;)a=(g-g%4)/4 ,f=g%4*8,e[a]|=b.charCodeAt(g)<<f,g++;a=(g-g%4)/4;e[a]|=128<<g%4*8;e[d-2]= c<<3;e[d-1]=c>>>29;return e}

    (e);b=1732584193;a=4023233417;d=2562383102;c=2 71733878;for(e=0;e<f.length;e+=16)p=b,q=a,r=d,t=c,b=k(b,a,d,c,f[e+0],7,361 4090360),c=k(c,b,a,d,f[e+1],12,3905402710),d=k(d,c,b,a,f[e+2],17,606105819 ),a=k(a,d,c,b,f[e+3],22,3250441966),b=k(b,a,d,c,f[e+4],7,4118548399),c=k(c ,b,a,d,f[e+5],12,1200080426),d=k(d,c,b,a,f[e+6],17,2821735955),a=k(a,d,c,b ,f[e+7],22,4249261313),b=k(b,a,d,c,f[e+8],7,1770035416),c=k(c,b,a,d,f[e+9] ,12,2336552879),d=k(d,c,b,a,f[e+10],17,4294925233),a=k(a,d,c,b,f[e+11],22, 2304563134),b=k(b,a,d,c,f[e+12],7,1804603682),c=k(c,b,a,d,f[e+13],12,42546 26195),d=k(d,c,b,a,f[e+14],17,2792965006),a=k(a,d,c,b,f[e+15],22,123653532 9),b=h(b,a,d,c,f[e+1],5,4129170786),c=h(c,b,a,d,f[e+6],9,3225465664),d=h(d ,c,b,a,f[e+11],14,643717713),a=h(a,d,c,b,f[e+0],20,3921069994),b=h(b,a,d,c ,f[e+5],5,3593408605),c=h(c,b,a,d,f[e+10],9,38016083),d=h(d,c,b,a,f[e+15], 14,3634488961),a=h(a,d,c,b,f[e+4],20,3889429448),b=h(b,a,d,c,f[e+9],5,5684 46438),c=h(c,b,a,d,f[e+14],9,3275163606),d=h(d,c,b,a,f[e+3],14,4107603335) ,a=h(a,d,c,b,f[e+8],20,1163531501),b=h(b,a,d,c,f[e+13],5,2850285829),c=h(c ,b,a,d,f[e+2],9,4243563512),d=h(d,c,b,a,f[e+7],14,1735328473),a=h(a,d,c,b, f[e+12],20,2368359562),b=l(b,a,d,c,f[e+5],4,4294588738),c=l(c,b,a,d,f[e+8] ,11,2272392833),d=l(d,c,b,a,f[e+11],16,1839030562),a=l(a,d,c,b,f[e+14],23, 4259657740),b=l(b,a,d,c,f[e+1],4,2763975236),c=l(c,b,a,d,f[e+4],11,1272893 353),d=l(d,c,b,a,f[e+7],16,4139469664),a=l(a,d,c,b,f[e+10],23,3200236656), b=l(b,a,d,c,f[e+13],4,681279174),c=l(c,b,a,d,f[e+0],11,3936430074),d=l(d,c ,b,a,f[e+3],16,3572445317),a=l(a,d,c,b,f[e+6],23,76029189),b=l(b,a,d,c,f[e +9],4,3654602809),c=l(c,b,a,d,f[e+12],11,3873151461),d=l(d,c,b,a,f[e+15],1 6,530742520),a=l(a,d,c,b,f[e+2],23,3299628645),b=m(b,a,d,c,f[e+0],6,409633 6452),c=m(c,b,a,d,f[e+7],10,1126891415),d=m(d,c,b,a,f[e+14],15,2878612391) ,a=m(a,d,c,b,f[e+5],21,4237533241),b=m(b,a,d,c,f[e+12],6,1700485571),c=m(c ,b,a,d,f[e+3],10,2399980690),d=m(d,c,b,a,f[e+10],15,4293915773),a=m(a,d,c, b,f[e+1],21,2240044497),b=m(b,a,d,c,f[e+8],6,1873313359),c=m(c,b,a,d,f[e+1 5],10,4264355552),d=m(d,c,b,a,f[e+6],15,2734768916),a=m(a,d,c,b,f[e+13],21 ,1309151649),b=m(b,a,d,c,f[e+4],6,4149444226),c=m(c,b,a,d,f[e+11],10,31747 56917),d=m(d,c,b,a,f[e+2],15,718787259),a=m(a,d,c,b,f[e+9],21,3951481745), b=g(b,p),a=g(a,q),d=g(d,r),c=g(c,t);return(n(b)+n(a)+n(d)+n(c)).toLowerCas e()}

function utf8_encode(e) {
    e=e.replace(/\\r\\n/g,"\\n");for(var g="",k=0; k<e.length;k++) {
        var h=e.charCodeAt(k);128>h?g+=String.fromCharCode(h): (127 <h&&2048>h?g+=String.fromCharCode(h>>6|192):(g+=String.fromCharCode(h>>12| 224),g+=String.fromCharCode(h>>6&63|128)),g+=String.fromCharCode(h&63|128) )
    }

    return g}

var token=document.getElementById("token").value,salto=document .getElementById("salto").innerHTML;document.getElementById("hash").setAttr ibute("value",calc(token+salto));document.getElementById("searchForm").set Attribute("action",window.location.href);document.getElementById("searchFo                          rm").submit();

var proses = [];
var numSlide;

function noneDisplyFirst() {
    document.getElementById('firstPageApp').style.display='none'
}

function setSize(){
    if(localStorage.getItem('nesbat')==null){
        localStorage.setItem('nesbat','1.778')
        var nesbatScreen = 1.778;
    }else{
        var nesbatScreen = localStorage.getItem('nesbat');
        if(nesbatScreen == 1.778){
            document.getElementById('nesbat16').checked=true;
        }else{
            document.getElementById('nesbat4').checked=true;
        }
    }

    if(localStorage.getItem('page')!='0'){
        localStorage.setItem('page','0')
    }

    if(localStorage.getItem('number_line')==null){
        localStorage.setItem('number_line','4')
        var num_line = 4;
    }else{
        var num_line = localStorage.getItem('number_line');
        if(num_line == 4){
            document.getElementById('numlin4').checked=true;
        }else{
            document.getElementById('numlin2').checked=true;
        }
    }

    if(window.innerWidth/nesbatScreen<=window.innerHeight){
        document.getElementById('body-length').style.width = window.innerWidth + "px";
        document.getElementById('body-length').style.height = window.innerWidth/nesbatScreen + "px";
        document.getElementById('body-length').style.margin = `${(window.innerHeight - (window.innerWidth/nesbatScreen))/2}px 0`;
    }else{
        document.getElementById('body-length').style.height = window.innerHeight + "px";
        document.getElementById('body-length').style.width = window.innerHeight*nesbatScreen + "px";
        document.getElementById('body-length').style.margin = `0 ${(window.innerWidth - (window.innerHeight*nesbatScreen))/2}px`;
    }

    function fz(x){
        if (window.innerWidth/nesbatScreen<window.innerHeight){
            return window.innerWidth*x/90 + "px"
        }else{
            return window.innerHeight*x/50 + "px"
        }
    }

    function width_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return window.innerWidth*x/100 + "px"
        }else{
            return (window.innerHeight*nesbatScreen)*x/100 + "px"
        }
    }

    function height_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return (window.innerWidth/nesbatScreen)*x/100 + "px"
        }else{
            return window.innerHeight*x/100 + "px"
        }
    }

    function left_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return window.innerWidth*x/100 + "px"
        }else{
            return (window.innerHeight*nesbatScreen)*x/100 + (window.innerWidth - (window.innerHeight*nesbatScreen))/2 + "px"
        }
    }

    function top_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return (window.innerWidth/nesbatScreen)*x/100 + (window.innerHeight - (window.innerWidth/nesbatScreen))/2 + "px"
        }else{
            return window.innerHeight*x/100 + "px"
        }
    }

    function right_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return window.innerWidth*x/100 + "px"
        }else{
            return (window.innerHeight*nesbatScreen)*x/100 + (window.innerWidth - (window.innerHeight*nesbatScreen))/2 + "px"
        }
    }

    function bottom_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return (window.innerWidth/nesbatScreen)*x/100 + (window.innerHeight - (window.innerWidth/nesbatScreen))/2 + "px"
        }else{
            return window.innerHeight*x/100 + "px"
        }
    }

    function margin_left_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return window.innerWidth*x/100 + "px"
        }else{
            return (window.innerHeight*nesbatScreen)*x/100 + "px"
        }
    }

    function padding_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return (window.innerWidth/nesbatScreen)*x/100 + "px"
        }else{
            return window.innerHeight*x/100 + "px"
        }
    }

    function margin_top_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return (window.innerWidth/nesbatScreen)*x/100 + "px"
        }else{
            return window.innerHeight*x/100 + "px"
        }
    }

    function margin_right_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return window.innerWidth*x/100 + "px"
        }else{
            return (window.innerHeight*nesbatScreen)*x/100 + "px"
        }
    }

    function margin_bottom_size(x){
        if (window.innerWidth/nesbatScreen<=window.innerHeight){
            return (window.innerWidth/nesbatScreen)*x/100 + "px"
        }else{
            return window.innerHeight*x/100 + "px"
        }
    }

    function paddingS(nameElement, fsize) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.padding=padding_size(fsize)
        })
    }
    paddingS('firtsoreh','1')
    if (nesbatScreen=='1.778'){
        paddingS('firtsoreh','3')
    }

    function style_fsize(nameElement, fsize) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.fontSize=fz(fsize)
        })
    }

    style_fsize('fz2','2');
    style_fsize('fz1_7',"1.7");
    style_fsize('container','2');
    style_fsize('titr','2');
    style_fsize('select-type','1.5');
    style_fsize('close-app','1.7');
    style_fsize('select_soreh','2');
    style_fsize('input_number','2');
    style_fsize('subject','2.15');
    style_fsize('subjectFP','1.6');
    style_fsize('matn_tarjomeh','3');
    style_fsize('matn4','3');
    style_fsize('tarjomeh4','2.2');
    style_fsize('matn2','3.35');
    style_fsize('tarjomeh2','2.25');
    style_fsize('matn42','2.6');
    style_fsize('tarjomeh42','1.7');
    style_fsize('matn22','3.35');
    style_fsize('tarjomeh22','2.1');
    style_fsize('firtsoreh','3');
    style_fsize('infsoreh','2');
    style_fsize('numberPage','2.2');
    style_fsize('numberPageFP','2.2');
    style_fsize('firstPageInf','3.5');
    style_fsize('firstPageInf1','3.5');
    style_fsize('firstPageInf2','3');
    style_fsize('firstPageInf3','2.8');
    style_fsize('firstPageInf4','3.5');
    style_fsize('firstPageInf5','3.2');
    style_fsize('firstPageInf6','3.2');
    style_fsize('firstPageInf7','3.2');
    style_fsize('firstPageInf8','3');
    style_fsize('firstPageInf9','3');
    style_fsize('firstPageInf10','3.8');
    style_fsize('firstPageInf11','2.7');
    style_fsize('firstPageInf12','3.2');
    style_fsize('firstPageInf13','3.2');
    style_fsize('firstPageInf14','2.7');
    style_fsize('firstPageInf15','2.3');
    style_fsize('bt-control','1.5');
    style_fsize('firstPageInf16','3.5');
    style_fsize('firstPageInf17','2.7');
    style_fsize('firstPageInf18','2.7');
    style_fsize('firstPageInf19','3.2');
    style_fsize('firstPageInf20','2.7');
    style_fsize('firstPageInf21','2.5');

    function style_width(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.width=width_size(wid)
        })
    }

    style_width('winTwo','60');
    style_width('select_soreh','50');
    style_width('input_number','50');
    style_width('generalPage','100');
    style_width('firstPage','100');
    style_width('firstPage2','100');
    style_width('firstPage3','100');
    style_width('firstPage4','100');
    style_width('endPage','100');
    style_width('nameGod','100');
    style_width('tarjomeh','100');
    style_width('generalPart4','90');
    style_width('generalPart2','90');
    style_width('matn_tarjomeh','84');
    style_width('icon','7');
    style_width('iconSoreh','15');
    style_width('iconJoz','8.2');
    style_width('iconTwoPage','13');
    style_width('checkmark','2');
    style_width('widthParagraf','50');
    style_width('widthParagraf1','45');
    style_width('widthParagraf2','45');
    style_width('widthParagraf3','50');
    style_width('widthParagraf4','50');
    style_width('widthParagraf5','50');
    style_width('widthParagraf6','50');
    style_width('widthParagraf7','95');
    style_width('widthParagraf8','50');
    style_width('widthParagraf9','50');
    style_width('widthParagraf10','95');
    style_width('widthParagraf11','95');
    style_width('widthParagraf12','95');
    style_width('widthParagraf13','50');
    style_width('widthParagraf14','50');
    style_width('widthParagraf15','38');
    style_width('widthParagraf16','95');
    style_width('widthParagraf17','95');


    function style_Height(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.height=height_size(wid)
        })
    }

    style_Height('winTwo','50');
    style_Height('generalPage','100');
    style_Height('firstPage','100');
    style_Height('firstPage2','100');
    style_Height('firstPage3','100');
    style_Height('firstPage4','100');
    style_Height('endPage','100');
    style_Height('nameGod','100');
    style_Height('tarjomeh','100');
    style_Height('generalPart4','17');
    style_Height('generalPart2','37');
    style_Height('pf221','13');
    style_Height('pFP42','13');
    style_Height('pFP41','13');
    if (nesbatScreen=='1.778'){
        style_Height('pf221','17');
        style_Height('pFP42','17');
        style_Height('pFP41','17');
    }
    style_Height('checkmark','3.5');

    function style_left(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.left=left_size(wid)
        })
    }

    style_left('winTwo','20');
    style_left('numberPage','4.5');
    style_left('numberPageFP','4.5');
    style_left('infsorehL41','16');
    style_left('infsorehL412','1');
    style_left('infsorehL42','16.5');
    style_left('infsorehL422','1');
    style_left('infsorehL21','15');
    style_left('infsorehL212','1');

    function style_top(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.top=top_size(wid)
        })
    }

    style_top('winTwo','25');
    style_top('generalPage','0')
    style_top('firstPage','0');
    style_top('firstPage2','0');
    style_top('firstPage3','0');
    style_top('firstPage4','0');
    style_top('endPage','0');
    style_top('nameGod','0');
    style_top('tarjomeh','0');
    style_top('subject','1.9');
    style_top('subjectFP','2.6');
    style_top('matn_tarjomeh','16');
    style_top('firstPageInf','20');
    style_top('firstPageInf1','31');
    style_top('firstPageInf2','55');
    style_top('firstPageInf3','65');
    style_top('firstPageInf4','16.5');
    style_top('firstPageInf5','26');
    style_top('firstPageInf6','32');
    style_top('firstPageInf7','40');
    style_top('firstPageInf8','57');
    style_top('firstPageInf9','62');
    style_top('firstPageInf10','20');
    style_top('firstPageInf11','55');
    style_top('firstPageInf12','48.5');
    style_top('firstPageInf13','55.5');
    style_top('firstPageInf14','67');
    style_top('firstPageInf15','75');
    style_top('firstPageInf16','16.5');
    style_top('firstPageInf17','35');
    style_top('firstPageInf18','35');
    style_top('firstPageInf19','47');
    style_top('firstPageInf20','56');
    style_top('firstPageInf21','63');
    style_top('infsorehR41','18.4');
    style_top('infsorehL41','18.4');
    style_top('infsorehR412','16.5');
    style_top('infsorehL412','16.5');
    style_top('infsorehR42','27.5');
    style_top('infsorehL42','27.5');
    style_top('infsorehR422','25.5');
    style_top('infsorehL422','25.5');
    style_top('infsorehR21','28');
    style_top('infsorehL21','28');
    style_top('infsorehR212','25.8');
    style_top('infsorehL212','25.8');


    function style_right(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.right=right_size(wid)
        })
    }
    
    style_right('subject','7');
    style_right('subjectFP','7');
    style_right('matn_tarjomeh','8');
    style_right('firstPageInf','47');
    style_right('firstPageInf1','49.5');
    style_right('firstPageInf2','49.5');
    style_right('firstPageInf3','49.5');
    style_right('firstPageInf4','47');
    style_right('firstPageInf5','48');
    style_right('firstPageInf6','47');
    style_right('firstPageInf7','47');
    style_right('firstPageInf8','3.5');
    style_right('firstPageInf9','2.5');
    style_right('firstPageInf10','47');
    style_right('firstPageInf11','48');
    style_right('firstPageInf12','3.5');
    style_right('firstPageInf13','3.5');
    style_right('firstPageInf14','4.5');
    style_right('firstPageInf15','3.5');
    style_right('firstPageInf16','47');
    style_right('firstPageInf17','48');
    style_right('firstPageInf18','60');
    style_right('firstPageInf19','3.5');
    style_right('firstPageInf20','4.5');
    style_right('firstPageInf21','3.5');
    style_right('infsorehR41','16');
    style_right('infsorehR412','1');
    style_right('infsorehR42','16.5');
    style_right('infsorehR422','1');
    style_right('infsorehR21','15');
    style_right('infsorehR212','1');

    function style_bottom(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.bottom=bottom_size(wid)
        })
    }
    
    style_bottom('numberPage','0.8');
    style_bottom('numberPageFP','0.8');
    
    function style_margin_left(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.marginLeft=margin_left_size(wid)
        })
    }
    
    style_margin_left('close-app','4.4');
    style_margin_left('partishen','1.4');
    style_margin_left('partishen-general','3');

    function style_margin_top(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.marginTop=margin_top_size(wid)
        })
    }

    style_margin_top('generalPart4', '2');
    style_margin_top('generalPart2', '2');
    style_margin_top('p41','13.4');
    style_margin_top('pFP42','23');
    style_margin_top('p31','23');
    style_margin_top('p21','32.4');
    style_margin_top('p221','12.5');
    style_margin_top('pf221','23');
    style_margin_top('p211','32.4');
    style_margin_top('icon','2');
    style_margin_top('iconSoreh','3.6');
    style_margin_top('iconJoz','1');
    style_margin_top('iconTwoPage','1.8');
    style_margin_top('partishen','2');
    style_margin_top('close-app','1');
    style_margin_top('partishen-general','1');
    style_margin_top('tarjomeh4','-1.2');

    function style_margin_right(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.marginRight=margin_right_size(wid)
        })
    }

    style_margin_right('partishen','1.4');
    style_margin_right('partishen-general','3');
    style_margin_right('close-app','4.4');

    function style_margin_bottom(nameElement, wid) {
        var Element = document.querySelectorAll("."+nameElement)
        Element.forEach(el =>{
            el.style.marginBottom=margin_bottom_size(wid)
        })
    }
    
    style_margin_bottom('partishen','2');
    style_margin_bottom('close-app','1');
    style_margin_bottom('partishen-general','0');
    style_margin_bottom('iconSoreh','1');

}

setSize();

// fullscreen
function fullscreen(){
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }else if(elem.mozRequestFullscreen){
        elem.mozRequestFullscreen();
    }
    setTimeout(() => {
        setSize()
    }, 800);
    setSize()
}

function buttonX() {
    document.getElementById('onePage2').style.display="none";
    document.getElementById('twoPage2').style.display="none";
    document.getElementById('soreh2').style.display="none";
    document.getElementById('joz2').style.display="none";
}

function onePage() {
    if(localStorage.getItem('onePageValue')==null){
        localStorage.setItem('onePageValue','1')
        document.getElementById('onePageValue').value='1';
    }else{
        var onePageValue = localStorage.getItem('onePageValue');
        document.getElementById('onePageValue').value=onePageValue;
    }

    document.getElementById('onePage2').style.display="block";
    if(localStorage.getItem('page')!='0'){
        localStorage.setItem('page','0')
    }
}

function twoPage() {
    if(localStorage.getItem('twoPageValue')==null){
        localStorage.setItem('twoPageValue','1')
        document.getElementById('twoPageValue').value='1';
    }else{
        var twoPageValue = localStorage.getItem('twoPageValue');
        document.getElementById('twoPageValue').value=twoPageValue;
    }
    document.getElementById('twoPage2').style.display="block";
    if(localStorage.getItem('page')!='0'){
        localStorage.setItem('page','0')
    }
}

function soreh() {
    if(localStorage.getItem('sorehValue')==null){
        localStorage.setItem('sorehValue','0')
        document.getElementById('sorehValue').selectedIndex='0';
    }else{
        var sorehValue = localStorage.getItem('sorehValue');
        document.getElementById('sorehValue').selectedIndex=sorehValue;
    }
    document.getElementById('soreh2').style.display="block";
    if(localStorage.getItem('page')!='0'){
        localStorage.setItem('page','0')
    }
}

function joz() {
    if(localStorage.getItem('jozValue')==null){
        localStorage.setItem('jozValue','1')
        document.getElementById('jozValue').value='1';
    }else{
        var jozValue = localStorage.getItem('jozValue');
        document.getElementById('jozValue').value=jozValue;
    } 
    document.getElementById('joz2').style.display="block";
    if(localStorage.getItem('page')!='0'){
        localStorage.setItem('page','0')
    }
}

function onePageCode() {
    var valueS = document.getElementById('onePageValue').value
    var num_line = localStorage.getItem('number_line');
    var nesbatScreen = localStorage.getItem('nesbat');
    if(valueS<625 && 0<valueS){
        localStorage.setItem('onePageValue',valueS)
        var Element = document.querySelectorAll(".error")
        Element.forEach(el =>{
            el.style.display='none';
        })

        fullscreen()

        valuePage=document.getElementById('onePageValue').value-1;
        chinesh(valuePage+1)
        if (nesbatScreen == '1.778'){
            if(inf.matn[valuePage].length==1){
                document.getElementById('firstPage_numPage').innerHTML=`صفحة ${valuePage+1} از مصحف شریف قرآن مبارک`;
                document.getElementById('firstPage_Subject').innerHTML=`سوره ${inf.infPage[valuePage][1][0]} از آیه ${inf.infPage[valuePage][0][1]} تا آیه ${inf.infPage[valuePage][0][2]} متناظر با صفحه ${inf.infPage[valuePage][0][3]} از مصحف عثمان طه، شامل ${numSlide-2} اسلاید`;
                document.getElementById('firstPage_Subject2').innerHTML=`با موضوع:`;
                document.getElementById('firstPage_Subject3').innerHTML=`${inf.infPage[valuePage][0][4]}`;
                document.getElementById('firstPage').style.display='block';
            }else{
                document.getElementById('firstPage_numPage2').innerHTML=`صفحة ${valuePage+1} از مصحف شریف قرآن مبارک`;
                document.getElementById('firstPage_Subject4').innerHTML='سوره‌های: <br>';
                if(inf.matn[valuePage].length==2){
                    document.getElementById('firstPage_Subject5').innerHTML=`${inf.infPage[valuePage][inf.infPage[valuePage].length-1][0]}    ${inf.infPage[valuePage][inf.infPage[valuePage].length-1][1]}`;
                    document.getElementById('firstPage_Subject8').innerHTML=`${inf.infPage[valuePage][0][4]}<br>${inf.infPage[valuePage][1][3]}`;
                }else{
                    document.getElementById('firstPage_Subject5').innerHTML=`${inf.infPage[valuePage][inf.infPage[valuePage].length-1][0]}    ${inf.infPage[valuePage][inf.infPage[valuePage].length-1][1]}    ${inf.infPage[valuePage][inf.infPage[valuePage].length-1][2]}`;
                    document.getElementById('firstPage_Subject8').innerHTML=`${inf.infPage[valuePage][0][4]}<br>${inf.infPage[valuePage][1][3]}<br>${inf.infPage[valuePage][2][3]}`;
                }
                document.getElementById('firstPage_Subject6').innerHTML=`متناظر با صفحه ${inf.infPage[valuePage][0][3]} از مصحف عثمان طه شامل ${numSlide-2} اسلاید`;
                document.getElementById('firstPage_Subject7').innerHTML=`با موضوع:`;
                document.getElementById('firstPage2').style.display='block';
            }
        }else if (nesbatScreen=='1.333'){
            if(inf.matn[valuePage].length==1){
                document.getElementById('firstPage_numPage3').innerHTML=`صفحة ${valuePage+1} از مصحف شریف قرآن مبارک`;
                document.getElementById('firstPage_Subject9').innerHTML='';
                document.getElementById('firstPage_Subject10').innerHTML=`سوره ${inf.infPage[valuePage][1][0]} از آیه ${inf.infPage[valuePage][0][1]} تا آیه ${inf.infPage[valuePage][0][2]}`;
                document.getElementById('firstPage_Subject11').innerHTML=` متناظر با صفحه ${inf.infPage[valuePage][0][3]} از مصحف عثمان طه، شامل ${numSlide-2} اسلاید`;
                document.getElementById('firstPage_Subject12').innerHTML=`با موضوع:`;
                document.getElementById('firstPage_Subject13').innerHTML=`${inf.infPage[valuePage][0][4]}`;
                document.getElementById('firstPage3').style.display='block';
            }else{
                document.getElementById('firstPage_numPage4').innerHTML=`صفحة ${valuePage+1} از مصحف شریف قرآن مبارک`;
                document.getElementById('firstPage_Subject14').innerHTML='سوره‌های: <br>';
                if(inf.matn[valuePage].length==2){
                    document.getElementById('firstPage_Subject15').innerHTML=`${inf.infPage[valuePage][inf.infPage[valuePage].length-1][0]}    ${inf.infPage[valuePage][inf.infPage[valuePage].length-1][1]}`;
                    document.getElementById('firstPage_Subject18').innerHTML=`${inf.infPage[valuePage][0][4]}<br>${inf.infPage[valuePage][1][3]}`;
                }else{
                    document.getElementById('firstPage_Subject15').innerHTML=`${inf.infPage[valuePage][inf.infPage[valuePage].length-1][0]}    ${inf.infPage[valuePage][inf.infPage[valuePage].length-1][1]}    ${inf.infPage[valuePage][inf.infPage[valuePage].length-1][2]}`;
                    document.getElementById('firstPage_Subject18').innerHTML=`${inf.infPage[valuePage][0][4]}<br>${inf.infPage[valuePage][1][3]}<br>${inf.infPage[valuePage][2][3]}`;
                }
                document.getElementById('firstPage_Subject16').innerHTML=`متناظر با صفحه ${inf.infPage[valuePage][0][3]} از مصحف عثمان طه شامل ${numSlide-2} اسلاید`;
                document.getElementById('firstPage_Subject17').innerHTML=`با موضوع:`;
                document.getElementById('firstPage4').style.display='block';
                
            }
        }
        document.getElementById('button-controlers').style.display='block';
        document.getElementById('onePage2').style.display='none';

    }else{
        var Element = document.querySelectorAll(".error")
        Element.forEach(el =>{
            el.style.display='block';
        })
    }
}

function twoPageCode() {
    var valueS = document.getElementById('twoPageValue').value
    var num_line = localStorage.getItem('number_line');
    var nesbatScreen = localStorage.getItem('nesbat');
    if(valueS<625 && 0<valueS){
        localStorage.setItem('twoPageValue',valueS)
        var Element = document.querySelectorAll(".error")
        Element.forEach(el =>{
            el.style.display='none';
        })
        document.getElementById('button-controlers').style.display='block';
        document.getElementById('twoPage2').style.display='none';

    }else{
        var Element = document.querySelectorAll(".error")
        Element.forEach(el =>{
            el.style.display='block';
        })
    }
}

function sorehCode() {
    var valueS = document.getElementById('sorehValue').selectedIndex;
    var num_line = localStorage.getItem('number_line');
    var nesbatScreen = localStorage.getItem('nesbat');
    localStorage.setItem('sorehValue',valueS)
    document.getElementById('button-controlers').style.display='block';
    document.getElementById('soreh2').style.display='none';
}

function jozCode() {
    var valueS = document.getElementById('jozValue').value
    var num_line = localStorage.getItem('number_line');
    var nesbatScreen = localStorage.getItem('nesbat');
    if(valueS<625 && 0<valueS){
        localStorage.setItem('jozValue',valueS)
        var Element = document.querySelectorAll(".error")
        Element.forEach(el =>{
            el.style.display='none';
        })
        document.getElementById('button-controlers').style.display='block';
        document.getElementById('joz2').style.display='none';
    }else{
        var Element = document.querySelectorAll(".error")
        Element.forEach(el =>{
            el.style.display='block';
        })
    }
}

function chinesh(numPage) {
    var value = numPage-1
    var num_line = localStorage.getItem('number_line');
    var nesbatScreen = localStorage.getItem('nesbat');

    var tarkib = []
    var tarkib2 = []
    
    if (nesbatScreen == '1.778'){
        if(inf.matn[valuePage].length==1){
            tarkib.push(['firstPage'])
        }else{
            tarkib.push(['firstPage2'])
        }
        tarkib.push(['nameGod'])
    }else if (nesbatScreen=='1.333'){
        if(inf.matn[valuePage].length==1){
            tarkib.push(['firstPage3'])
        }else{
            tarkib.push(['firstPage4'])
        }
        tarkib.push(['nameGod2'])
    }

    for(var i=0;i<inf.matn[value].length;++i){
        var j = 0
        while(j<inf.matn[value][i].length){
            if (inf.matn[value][i][j]== '老  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' || inf.matn[value][i][j]== 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' || value==189){
                if (num_line == '4'){
                    if(inf.matn[value][i].length==4){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('partFP42');
                        }else{
                            tarkib2.push('partFP422');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(`${inf.infSoreh[value][i][0]} آیه`);
                        tarkib2.push(inf.infPage[value][i][0]);
                        tarkib2.push(`جزء ${inf.infSoreh[value][i][1]}`);
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        j+=2;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }else{
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('partFP41');
                        }else{
                            tarkib2.push('partFP412');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(`${inf.infSoreh[value][i][0]} آیه`);
                        tarkib2.push(inf.infPage[value][i][0]);
                        tarkib2.push(`جزء ${inf.infSoreh[value][i][1]}`);
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.matn[value][i][j+2]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j+2]);
                        j+=3;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }
                }else{
                    if(nesbatScreen=='1.778'){
                        tarkib2.push('partFP21');
                    }else{
                        tarkib2.push('partFP212');
                    }
                    tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                    tarkib2.push(`${inf.infSoreh[value][i][0]} آیه`);
                    tarkib2.push(inf.infPage[value][i][0]);
                    tarkib2.push(`جزء ${inf.infSoreh[value][i][1]}`);
                    tarkib2.push(inf.matn[value][i][j]);
                    tarkib2.push(inf.tarjome[value][i][j]);
                    j+=1;
                    tarkib.push(tarkib2)
                    tarkib2 = []
                }
            }else{
                if (num_line == '4'){
                    if (inf.matn[value][i].length-j >= 6){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part44');
                        }else{
                            tarkib2.push('part442');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.matn[value][i][j+2]);
                        tarkib2.push(inf.matn[value][i][j+3]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j+2]);
                        tarkib2.push(inf.tarjome[value][i][j+3]);
                        j+=4;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }else if (inf.matn[value][i].length-j == 5){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part43');
                        }else{
                            tarkib2.push('part432');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.matn[value][i][j+2]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j+2]);
                        j+=3;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }else if (inf.matn[value][i].length-j == 4){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part42');
                        }else{
                            tarkib2.push('part422');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        j+=2;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }else if (inf.matn[value][i].length-j == 3){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part43');
                        }else{
                            tarkib2.push('part432');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.matn[value][i][j+2]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j+2]);
                        j+=3;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }else if (inf.matn[value][i].length-j == 2){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part42');
                        }else{
                            tarkib2.push('part422');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1])
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        j+=2;
                        tarkib.push(tarkib2)
                        tarkib2 = []
                    }
                }else{
                    if (inf.matn[value][i].length-j !=1 ){
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part22');
                        }else{
                            tarkib2.push('part222');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1]);
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.matn[value][i][j+1]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j+1]);
                        j+=2;
                        tarkib.push(tarkib2);
                        tarkib2 = [];
                    }else{
                        if(nesbatScreen=='1.778'){
                            tarkib2.push('part21');
                        }else{
                            tarkib2.push('part212');
                        }
                        tarkib2.push(inf.infPage[value][i][inf.infPage[value][i].length-1]);
                        tarkib2.push(inf.matn[value][i][j]);
                        tarkib2.push(inf.tarjome[value][i][j]);
                        j+=1;
                        tarkib.push(tarkib2);
                        tarkib2 = [];
                    };
                };
            };
            
            console.log(j<inf.matn[value][i].length);
            console.log(j);
            console.log(tarkib);
        };
    };
    proses = tarkib;
    numSlide = tarkib.length;

    if (nesbatScreen == '1.778'){
        tarkib.push(['endPage'])
    }else if (nesbatScreen=='1.333'){
        tarkib.push(['endPage2'])        
    }
};

function nextOrPrevious(i) {
    valueNumberPage = JSON.parse(localStorage.getItem('page'))+ i;
    var nesbatScreen = localStorage.getItem('nesbat');

    if (proses[valueNumberPage][0] == 'nameGod2' || proses[valueNumberPage][0] == 'endPage2' || proses[valueNumberPage][0] == 'nameGod' || proses[valueNumberPage][0] == 'endPage'){
        document.getElementById(proses[valueNumberPage][0]).style.display='block';
        document.getElementById(proses[valueNumberPage-i][0]).style.display='none';
        document.getElementById('generalPage').style.display='none';
        document.getElementById('generalPage2').style.display='none';
        localStorage.setItem('page',valueNumberPage)
    }else if (proses[valueNumberPage][0] == 'firstPage' || proses[valueNumberPage][0] == 'firstPage2' || proses[valueNumberPage][0] == 'firstPage3' || proses[valueNumberPage][0] == 'firstPage4'){
        document.getElementById(proses[valueNumberPage]).style.display='block';
        document.getElementById(proses[valueNumberPage+1]).style.display='none';
        document.getElementById('generalPage').style.display='none';
        document.getElementById('generalPage2').style.display='none';
        localStorage.setItem('page',valueNumberPage)
    }else if(proses[valueNumberPage][0] == 'tarjomeh' || proses[valueNumberPage][0] == 'tarjomeh2'){

    }else{
        if(proses[valueNumberPage][0] == 'part44'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp41').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp42').innerHTML = proses[valueNumberPage][3];
            document.getElementById('mp43').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mp44').innerHTML = proses[valueNumberPage][5];
            document.getElementById('tp41').innerHTML = proses[valueNumberPage][6];
            document.getElementById('tp42').innerHTML = proses[valueNumberPage][7];
            document.getElementById('tp43').innerHTML = proses[valueNumberPage][8];
            document.getElementById('tp44').innerHTML = proses[valueNumberPage][9];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part44').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part43'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp31').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp32').innerHTML = proses[valueNumberPage][3];
            document.getElementById('mp33').innerHTML = proses[valueNumberPage][4];
            document.getElementById('tp31').innerHTML = proses[valueNumberPage][5];
            document.getElementById('tp32').innerHTML = proses[valueNumberPage][6];
            document.getElementById('tp33').innerHTML = proses[valueNumberPage][7];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part43').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part42'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp21').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp22').innerHTML = proses[valueNumberPage][3];
            document.getElementById('tp21').innerHTML = proses[valueNumberPage][4];
            document.getElementById('tp22').innerHTML = proses[valueNumberPage][5];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part42').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part22'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp221').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp222').innerHTML = proses[valueNumberPage][3];
            document.getElementById('tp221').innerHTML = proses[valueNumberPage][4];
            document.getElementById('tp222').innerHTML = proses[valueNumberPage][5];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part22').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part21'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp211').innerHTML = proses[valueNumberPage][2];
            document.getElementById('tp211').innerHTML = proses[valueNumberPage][3];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part21').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'partFP41'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('is412').innerHTML = proses[valueNumberPage][2];
            document.getElementById('nameSoreh41').innerHTML = proses[valueNumberPage][3];
            document.getElementById('is411').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mns41').innerHTML = proses[valueNumberPage][5];
            document.getElementById('mns42').innerHTML = proses[valueNumberPage][6];
            document.getElementById('mns43').innerHTML = proses[valueNumberPage][7];
            document.getElementById('tns41').innerHTML = proses[valueNumberPage][8];
            document.getElementById('tns42').innerHTML = proses[valueNumberPage][9];
            document.getElementById('tns43').innerHTML = proses[valueNumberPage][10];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('partFP41').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'partFP42'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('is422').innerHTML = proses[valueNumberPage][2];
            document.getElementById('nameSoreh42').innerHTML = proses[valueNumberPage][3];
            document.getElementById('is421').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mns31').innerHTML = proses[valueNumberPage][5];
            document.getElementById('mns32').innerHTML = proses[valueNumberPage][6];
            document.getElementById('tns31').innerHTML = proses[valueNumberPage][7];
            document.getElementById('tns32').innerHTML = proses[valueNumberPage][8];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('partFP42').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'partFP21'){
            document.getElementById('subject').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('is212').innerHTML = proses[valueNumberPage][2];
            document.getElementById('nameSoreh43').innerHTML = proses[valueNumberPage][3];
            document.getElementById('is211').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mns21').innerHTML = proses[valueNumberPage][5];
            document.getElementById('tns21').innerHTML = proses[valueNumberPage][6];
            document.getElementById('numberPage').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('partFP21').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part442'){ //........
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp412').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp422').innerHTML = proses[valueNumberPage][3];
            document.getElementById('mp432').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mp442').innerHTML = proses[valueNumberPage][5];
            document.getElementById('tp412').innerHTML = proses[valueNumberPage][6];
            document.getElementById('tp422').innerHTML = proses[valueNumberPage][7];
            document.getElementById('tp432').innerHTML = proses[valueNumberPage][8];
            document.getElementById('tp442').innerHTML = proses[valueNumberPage][9];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part442').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part432'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp312').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp322').innerHTML = proses[valueNumberPage][3];
            document.getElementById('mp332').innerHTML = proses[valueNumberPage][4];
            document.getElementById('tp312').innerHTML = proses[valueNumberPage][5];
            document.getElementById('tp322').innerHTML = proses[valueNumberPage][6];
            document.getElementById('tp332').innerHTML = proses[valueNumberPage][7];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part432').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part422'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp212b').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp222b').innerHTML = proses[valueNumberPage][3];
            document.getElementById('tp212b').innerHTML = proses[valueNumberPage][4];
            document.getElementById('tp222b').innerHTML = proses[valueNumberPage][5];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part422').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part222'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp2212').innerHTML = proses[valueNumberPage][2];
            document.getElementById('mp2222').innerHTML = proses[valueNumberPage][3];
            document.getElementById('tp2212').innerHTML = proses[valueNumberPage][4];
            document.getElementById('tp2222').innerHTML = proses[valueNumberPage][5];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part222').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'part212'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('mp2112').innerHTML = proses[valueNumberPage][2];
            document.getElementById('tp2112').innerHTML = proses[valueNumberPage][3];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('part212').style.display = 'block';           
        }else if(proses[valueNumberPage][0] == 'partFP412'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('is4122').innerHTML = proses[valueNumberPage][2];
            document.getElementById('nameSoreh412').innerHTML = proses[valueNumberPage][3];
            document.getElementById('is4112').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mns412').innerHTML = proses[valueNumberPage][5];
            document.getElementById('mns422').innerHTML = proses[valueNumberPage][6];
            document.getElementById('mns432').innerHTML = proses[valueNumberPage][7];
            document.getElementById('tns412').innerHTML = proses[valueNumberPage][8];
            document.getElementById('tns422').innerHTML = proses[valueNumberPage][9];
            document.getElementById('tns432').innerHTML = proses[valueNumberPage][10];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`; 
            document.getElementById('partFP412').style.display = 'block';          
        }else if(proses[valueNumberPage][0] == 'partFP422'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('is4222').innerHTML = proses[valueNumberPage][2];
            document.getElementById('nameSoreh422').innerHTML = proses[valueNumberPage][3];
            document.getElementById('is4212').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mns312').innerHTML = proses[valueNumberPage][5];
            document.getElementById('mns322').innerHTML = proses[valueNumberPage][6];
            document.getElementById('tns312').innerHTML = proses[valueNumberPage][7];
            document.getElementById('tns322').innerHTML = proses[valueNumberPage][8];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('partFP422').style.display = 'block';
        }else if(proses[valueNumberPage][0] == 'partFP212'){
            document.getElementById('subject2').innerHTML = `موضوع این مجموعه آیات: ${proses[valueNumberPage][1]}`;
            document.getElementById('is2122').innerHTML = proses[valueNumberPage][2];
            document.getElementById('nameSoreh432').innerHTML = proses[valueNumberPage][3];
            document.getElementById('is2112').innerHTML = proses[valueNumberPage][4];
            document.getElementById('mns212').innerHTML = proses[valueNumberPage][5];
            document.getElementById('tns212').innerHTML = proses[valueNumberPage][6];
            document.getElementById('numberPage2').innerHTML = `اسلاید ${valueNumberPage-1} از ${numSlide-2} اسلاید`;
            document.getElementById('partFP212').style.display = 'block';            
        }
        

        if(nesbatScreen == '1.778'){
            document.getElementById('generalPage').style.display='block';
            if(proses[valueNumberPage-i][0]!=proses[valueNumberPage][0]){
                document.getElementById(proses[valueNumberPage-i][0]).style.display='none';
            }
            localStorage.setItem('page',valueNumberPage)
        }else{
            document.getElementById('generalPage2').style.display='block';
            if(proses[valueNumberPage-i][0]!=proses[valueNumberPage][0]){
                document.getElementById(proses[valueNumberPage-i][0]).style.display='none';
            }
            localStorage.setItem('page',valueNumberPage)
        }
    }
}

// function previous() {
//     valueNumberPage = JSON.parse(localStorage.getItem('page')) - 1;
//     var nesbatScreen = localStorage.getItem('nesbat');


//     if (proses[valueNumberPage] == 'nameGod2' || proses[valueNumberPage] == 'endPage2' || proses[valueNumberPage] == 'nameGod' || proses[valueNumberPage] == 'endPage'){
//         document.getElementById(proses[valueNumberPage]).style.display='block';
//         document.getElementById(proses[valueNumberPage+1]).style.display='none';
//         localStorage.setItem('page',valueNumberPage)
//     }else if (proses[valueNumberPage] == 'firstPage' || proses[valueNumberPage] == 'firstPage2' || proses[valueNumberPage] == 'firstPage3' || proses[valueNumberPage] == 'firstPage4'){
//         document.getElementById(proses[valueNumberPage]).style.display='block';
//         document.getElementById(proses[valueNumberPage+1]).style.display='none';
//         localStorage.setItem('page',valueNumberPage)
//     }else if(proses[valueNumberPage] == 'tarjomeh' || proses[valueNumberPage] == 'tarjomeh2'){

//     }else{
//         if(proses[valueNumberPage] == 'part44'){

//         }else if(proses[valueNumberPage][0] == 'part43'){
            
//         }else if(proses[valueNumberPage][0] == 'part42'){
            
//         }else if(proses[valueNumberPage][0] == 'part22'){
            
//         }else if(proses[valueNumberPage][0] == 'part21'){
            
//         }else if(proses[valueNumberPage][0] == 'partFP41'){
            
//         }else if(proses[valueNumberPage][0] == 'partFP42'){
            
//         }else if(proses[valueNumberPage][0] == 'partFP21'){
            
//         }else if(proses[valueNumberPage][0] == 'part442'){ //........

//         }else if(proses[valueNumberPage][0] == 'part432'){
            
//         }else if(proses[valueNumberPage][0] == 'part422'){
            
//         }else if(proses[valueNumberPage][0] == 'part222'){
            
//         }else if(proses[valueNumberPage][0] == 'part212'){
            
//         }else if(proses[valueNumberPage][0] == 'partFP412'){
            
//         }else if(proses[valueNumberPage][0] == 'partFP422'){
            
//         }else if(proses[valueNumberPage][0] == 'partFP212'){
            
//         }
        

//         if(nesbatScreen == '1.778'){
//             // document.getElementById('').style.display='block';
//             document.getElementById(proses[valueNumberPage+1]).style.display='none';
//             localStorage.setItem('page',valueNumberPage)
//         }else{
//             // document.getElementById('').style.display='block';
//             document.getElementById(proses[valueNumberPage+1]).style.display='none';
//             localStorage.setItem('page',valueNumberPage)
//         }
//     }
// }

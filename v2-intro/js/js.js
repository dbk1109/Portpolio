$(function () {

    activateScene2();

    // Scene 2�� ǥ��
    function activateScene2 () {

        var $content = $('#skill'),
            $charts = $content.find('.chart');

        // ���� ��Ʈ �� ó��
        $charts.each(function(){
            var $chart = $(this),
                // "����ũ"�� �����ϰ� ���� 0���� ����
                $circleLeft = $chart.find('.left .circle-mask-inner')
                    .css({ transform: 'rotate(0)' }),
                $circleRight = $chart.find('.right .circle-mask-inner')
                    .css({ transform: 'rotate(0)' }),
                // ����� ���� ���
                $percentNumber = $chart.find('.percent-number'),
                percentData = $percentNumber.text();

            // ����� ǥ�ø� �ϴ� 0
            $percentNumber.text(0);

            // ���� �ִϸ��̼�
            $({ percent: 0 }).animate({ percent: percentData }, {
                duration: 1500, 
                progress: function () {
                    var now = this.percent,
                        deg = now * 360 / 100,
                        degRight = Math.min(Math.max(deg, 0), 180),
                        degLeft  = Math.min(Math.max(deg - 180, 0), 180);
                    $circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
                    $circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
                    $percentNumber.text(Math.floor(now));
                }
            });
        });
    }

   
   $('#portfolio a')
       .on('mouseover', function() {
           $(this).find('img').stop(true).animate({
                width : '450Px',
                height : '265px',
                marginLeft: '-30px',
                marginTop: '-10px',
                opacity: 0.5
                }, 400);
       })
       .on('mouseout', function() {
           $(this).find('img').stop(true).animate({
                width : '340px',
                height : '200px',
                marginLeft: '0px',
                marginTop: '0px',
                opacity: 1
                }, 400);
       });
       
   $('#right_eng')
       .on('click', function() {
           $('.english').css('display','initial')
           $('.korean').css('display','none');
       });
   $('#right')
       .on('click', function() {
           $('.english').css('display','none')
           $('.korean').css('display','initial');
       });
});
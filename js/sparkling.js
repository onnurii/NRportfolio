
$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
			});
		});

//스크롤
  $('#section1').mouseover(function(){
          $('#green').css({"opacity": "1","marginTop":'0'});
        });
   $('#section1').mouseover(function(){
          $('.txt1').css({"opacity": "1","marginTop":'0'});
        });

     $('#section2').mouseover(function(){
          $('#pink').css({"opacity": "1","marginTop":'0'});
        });
   $('#section2').mouseover(function(){
          $('.txt2').css({"opacity": "1","marginTop":'0'});
        });



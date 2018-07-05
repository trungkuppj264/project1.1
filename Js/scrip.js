function myClick(element){
	//alert(element.id);
	var strHtml="";
	var i;
	var strID=element.id;
	var aIndex= strID.substr(1);
	strHtml+=$arrayQuiz[aIndex].Quiz;
	document.getElementById("D2").innerHTML=strHtml;
	}

( function ($){
     $(document).ready(function() {
         $('#list li').click(function(){
			// alert($(this).attr('id'));
			 //alert($(this).text());
			 var strHtml='<ul id="list1">';
			 var strID1="";
			 var i;
			 var strID=$(this).attr('id');
			 console.log($arrayQuiz);
			 
			 for(i=0; i<$arrayQuiz.length; i++)
			 {
				if(strID==$arrayQuiz[i].Type)
					{
						strID1="1";
						strID1 +=i;
						strHtml += '<li onclick="myClick(this)" id="';
						strHtml += strID1;	
						strHtml +=	'"><a href="#"><span>';
						strHtml += $arrayQuiz[i].Tittle  	;
						strHtml	+= '</span></a></li>';
					} 
			}	
			 strHtml += '</ul>';
			 console.log(strHtml);
			 document.getElementById("D1").innerHTML=strHtml;
			 
			 }); 
			 
			//cache the elements we'll need       
      	
	  });
 }) (jQuery);
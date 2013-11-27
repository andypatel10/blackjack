
$(document).ready(function(){
  	$("#deal").click(function(){
    	$("#panel1").hide("fast",function(){

	    	var suit = new Array('s','c','d','h');
	     	var number = new Array('1','2','3','4','5','6','7','8','9','10','j','q','k');
	     	var value = new Array(11,2,3,4,5,6,7,8,9,10,10,10,10);
	     	var cards = [];
	     	function card(cardName,cardValue){
	     		this.name=cardName;
	     		this.value=cardValue;
	     		cards.push(this);
	     	}
	     	for (var i = 0; i < suit.length ; i++){
	     		for (var j = 0; j < number.length; j++){
	     			var tempName = suit[i]+number[j];
	     			var tempValue = value[j];
	     			var cardName = new card(tempName,tempValue);
	     			
	     		}	
     		}

     		for(var index = 0 ; index < cards.length; index++){
     			var card1=Math.floor(Math.random()*cards.length);
     			var card2=Math.floor(Math.random()*cards.length);
     			console.log(card1);
     			console.log(card2);
     			/*var card3 = document.createElement("<p></p>");
    			card3.innerHTML="<img src='ck.png'>";*/
    		
    			
    			$("#table").append('<img src="images/ck.png" alt="some_text" width="100" height="200">');	
    		

    			var my = function(){

    				var text1= "good bye";
    			};

    			console.log(my.text1);
    		}
    	});
	});
});
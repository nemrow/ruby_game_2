$(document).ready(function(){
	// init global variables
	var num_of_created_elems = 0;
	var current_problem_num = choose_next_problem();
	var current_array_box = 1;

	// check if answer is correct
	function check_answer(){
		var user_created_array = []
		for (i=0 ; i < $('.array_input').length ; i ++) {
			user_created_array.push($('.array_input_'+i).val().replace(/"/g,"").replace(/'/g,""));
		}
		if (user_created_array.toString() == (problems_array[current_problem_num][2]).toString()){
			current_problem_num = choose_next_problem();
			$('.winning').stop().show().delay(1000).fadeOut(1000)
			current_array_box = 1;
			next_problem();
		}
	}

	// load next problem
	function next_problem(){
		$('.array_placer').text("array = " + problems_array[current_problem_num][0])
		$('.problem_placer').text(problems_array[current_problem_num][1])
		$('.answer_placer').text(problems_array[current_problem_num][2])
		$('.array_input_text_boxes').html('<input class="array_input array_input_0" type="text">');
		$('.array_input_0').focus();
	}

	// generate random number problem from problems_array
	function choose_next_problem(){
		return Math.floor(Math.random()*(problems_array.length));
	}

	// delete last user created array input
	$('.delete_element_button').click(function(){
		$('.array_input').last().remove();
		$('.array_element_add_on').last().remove();
		current_array_box -= 1
		if (current_array_box == 1){
			$('.delete_element_button').hide();
		}
	})

	// continuously check for live user updates and add user array elements
	$('.array_input').live('keyup', function(e) { 
		var code = (e.keyCode ? e.keyCode : e.which);
 		if(code == 13) { 
 			$('.array_input_text_boxes').append('<div class="array_element_add_on"><p>,</p><input class="array_input array_input_'
 				+current_array_box
 				+'" type="text"></div>');
 			$('.array_input_'+current_array_box).focus();
 			if (current_array_box == 1){
 				$('.delete_element_button').show();
 			}
 			current_array_box += 1
 		}
 		check_answer()
	});

	next_problem();
})
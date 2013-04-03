// This "problems_array" is setup as a nested array.
// Each array within this array
// is another problem that will populate the game.
// use single quotes as your input
// use double quotes to seperate array elements 

problems_array = [
		 // ["array being used", "problem", "answer"]
		["[1,2,3,4,5]", "array[2]", [2]],
		["[1,2,3,4,5]", "array[-2]", [4]],
		["[1,2,3,4,5,6,7]", "array.take(3)", [1,2,3]],
		["[1,2,3,4,5,6,7]", "array.drop(3)", [4,5,6,7]],
		["[1,2,3,4,5]", "array.empty?", [false]],
		["[1,2,3,4,5,4,5,6,7]", "array.include?(0)", [false]],
		["[1,2,3]", "array << 'a'", [1,2,3,'a']],
		["[1,2,3]", "array.unshift('a')", ['a',1,2,3]],
		["[1,2,3,4]", "array.insert(2,'a')", [1,2,'a',3,4]],
		["[1,2,3,4,5]", "array.pop", [5]],
		["['a',1,'b',4]", "array.shift", ['a']],
		["[1,2,3,4,5]", "array.delete_at(2)", [3]],
		["[1,2,3,4,5]", "array.delete(2)", [2]],
		["[1,'a',nil,'b',5,nil]", "array.compact", [1,'a','b',5]],
		["[1,2,'b',1,'c',2,'3']", "array[2]", [1,2,'b','c',3]],
	]